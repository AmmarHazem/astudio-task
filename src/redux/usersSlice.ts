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
  searchDateOfBirth?: string;
}

const initialState: UsersState = {
  users: [],
  limit: 5,
  loading: true,
  searchText: "",
  loadingError: false,
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async (_, thunkAPI) => {
  const state = thunkAPI.getState() as RootState;
  const searchParams = new URLSearchParams();
  searchParams.set("limit", state.users.limit.toString());
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
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.loading = false;
        state.loadingError = true;
      });
  },
});

export const { setUsers, setLimit, setSearchText } = usersSlice.actions;

export default usersSlice.reducer;
