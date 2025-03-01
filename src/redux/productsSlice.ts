import { GetProductsResponseModel, ProductModel } from "@/models/GetProductsResponseModel";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./RootState";
import axios from "axios";

interface ProductsState {
  products: ProductModel[];
  limit: number;
  loading: boolean;
  loadingError: boolean;
  searchText: string;
  total: number;
  currentPage: number;
}

const initialState: ProductsState = {
  products: [],
  limit: 5,
  loading: true,
  loadingError: false,
  searchText: "",
  total: 0,
  currentPage: 1,
};

export const fetchProducts = createAsyncThunk("products/fetchProducts", async (_, thunkAPI) => {
  const state = thunkAPI.getState() as RootState;
  const searchParams = new URLSearchParams();
  searchParams.set("limit", state.products.limit.toString());
  searchParams.set("skip", ((state.products.currentPage - 1) * state.products.limit).toString());
  const response = await axios.get<GetProductsResponseModel>(`https://dummyjson.com/products?${searchParams.toString()}`);
  return response.data;
});

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
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
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.products ?? [];
        state.total = action.payload.total ?? 0;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
        state.loadingError = true;
      });
  },
});

export const { setProducts, setLimit, setSearchText } = productsSlice.actions;

export default productsSlice.reducer;
