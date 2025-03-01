import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserModel } from "../models/UserModel";
import { GetUsersResponseModel } from "@/models/GetUsersResponseModel";
import { RootState } from "./RootState";
import axios from "axios";

interface UsersState {
  users: UserModel[];
  limit: number;
  loading: boolean;
  loadingError: boolean;
  searchText: string;
  searchName?: string;
  searchEmail?: string;
  searchGender?: "male" | "female";
  searchDateOfBirth?: string;
  currentPage: number;
  total: number;
}

const initialState: UsersState = {
  users: [],
  limit: 5,
  loading: true,
  searchText: "",
  loadingError: false,
  currentPage: 1,
  total: 0,
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async (_, thunkAPI) => {
  const state = thunkAPI.getState() as RootState;
  const searchParams = new URLSearchParams();
  searchParams.set("limit", state.users.limit.toString());
  searchParams.set("skip", ((state.users.currentPage - 1) * state.users.limit).toString());
  if (state.users.searchName || state.users.searchEmail) {
    searchParams.set("q", (state.users.searchName || state.users.searchEmail?.toString()) ?? "");
    const response = await axios.get<GetUsersResponseModel>(`https://dummyjson.com/users/search?${searchParams.toString()}`);
    return response.data;
  } else if (state.users.searchGender) {
    searchParams.set("key", "gender");
    searchParams.set("value", state.users.searchGender);
    const response = await axios.get<GetUsersResponseModel>(`https://dummyjson.com/users/filter?${searchParams.toString()}`);
    return response.data;
  } else if (state.users.searchDateOfBirth) {
    searchParams.set("key", "birthDate");
    searchParams.set("value", state.users.searchDateOfBirth);
    const response = await axios.get<GetUsersResponseModel>(`https://dummyjson.com/users/filter?${searchParams.toString()}`);
    return response.data;
  }
  const response = await axios.get<GetUsersResponseModel>(`https://dummyjson.com/users?${searchParams.toString()}`);
  return response.data;
});

export const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    setUsers: (state, users) => {
      state.users = users.payload;
    },
    setLimit: (state, payload) => {
      state.limit = payload.payload;
    },
    setSearchText: (state, payload) => {
      state.searchText = payload.payload;
      state.searchName = undefined;
      state.searchEmail = undefined;
      state.searchDateOfBirth = undefined;
      state.searchGender = undefined;
    },
    setSearchName: (state, payload) => {
      state.searchName = payload.payload;
      state.currentPage = 1;
      state.searchEmail = undefined;
      state.searchDateOfBirth = undefined;
      state.searchGender = undefined;
      state.searchText = "";
    },
    setSearchEmail: (state, payload) => {
      state.searchEmail = payload.payload;
      state.searchDateOfBirth = undefined;
      state.currentPage = 1;
      state.searchGender = undefined;
      state.searchName = undefined;
      state.searchText = "";
    },
    setSearchDateOfBirth: (state, payload) => {
      state.searchDateOfBirth = payload.payload;
      state.currentPage = 1;
      state.searchEmail = undefined;
      state.searchGender = undefined;
      state.searchName = undefined;
      state.searchText = "";
    },
    setSearchGender: (state, payload) => {
      state.searchGender = payload.payload;
      state.currentPage = 1;
      state.searchDateOfBirth = undefined;
      state.searchEmail = undefined;
      state.searchName = undefined;
      state.searchText = "";
    },
    setCurrentPage: (state, payload) => {
      state.currentPage = payload.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload.users ?? [];
        state.total = action.payload.total ?? 0;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.loading = false;
        state.loadingError = true;
      });
  },
});

export const {
  setUsers,
  setLimit,
  setSearchText,
  setSearchDateOfBirth,
  setSearchEmail,
  setSearchGender,
  setSearchName,
  setCurrentPage,
} = usersSlice.actions;

export default usersSlice.reducer;
