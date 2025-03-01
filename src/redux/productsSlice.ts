import { GetProductsResponseModel, ProductModel } from "@/models/GetProductsResponseModel";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./RootState";
import { ProductCategoryModel } from "@/models/ProductCategoryModel";
import axios from "axios";

interface ProductsState {
  products: ProductModel[];
  limit: number;
  loading: boolean;
  loadingError: boolean;
  searchText: string;
  total: number;
  currentPage: number;
  categories: ProductCategoryModel[];
  loadingCategories: boolean;
  loadingCategoriesError: boolean;
  selectedCategory?: string;
}

const initialState: ProductsState = {
  products: [],
  limit: 5,
  loading: true,
  loadingError: false,
  searchText: "",
  total: 0,
  currentPage: 1,
  categories: [],
  loadingCategories: true,
  loadingCategoriesError: false,
};

export const fetchProductCategories = createAsyncThunk("products/fetchProductCategories", async () => {
  const response = await axios.get<ProductCategoryModel[]>(`https://dummyjson.com/products/categories`);
  return response.data;
});

export const fetchProducts = createAsyncThunk("products/fetchProducts", async (_, thunkAPI) => {
  const state = thunkAPI.getState() as RootState;
  const searchParams = new URLSearchParams();
  searchParams.set("limit", state.products.limit.toString());
  searchParams.set("skip", ((state.products.currentPage - 1) * state.products.limit).toString());
  const searchText = state.products.searchText.trim();
  if (searchText) {
    searchParams.set("q", searchText);
    const response = await axios.get<GetProductsResponseModel>(
      `https://dummyjson.com/products/search?${searchParams.toString()}`
    );
    return response.data;
  } else if (state.products.selectedCategory) {
    const response = await axios.get<GetProductsResponseModel>(
      `https://dummyjson.com/products/category/${state.products.selectedCategory}?${searchParams.toString()}`
    );
    return response.data;
  }
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
      state.currentPage = 1;
    },
    setSelectedCategory: (state, payload) => {
      state.selectedCategory = payload.payload;
      state.searchText = "";
      state.currentPage = 1;
    },
    setCurrentPage: (state, payload) => {
      state.currentPage = payload.payload;
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
      })
      .addCase(fetchProductCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.loadingCategories = false;
        state.loadingCategoriesError = false;
      })
      .addCase(fetchProductCategories.rejected, (state) => {
        state.categories = [];
        state.loadingCategories = false;
        state.loadingCategoriesError = true;
      })
      .addCase(fetchProductCategories.pending, (state) => {
        state.loadingCategories = true;
        state.loadingCategoriesError = false;
      });
  },
});

export const { setProducts, setLimit, setSearchText, setSelectedCategory, setCurrentPage } = productsSlice.actions;

export default productsSlice.reducer;
