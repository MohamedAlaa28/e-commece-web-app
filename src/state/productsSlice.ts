import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Product } from "app/types";
import axios from "axios"


const allProductsAPI = "products?populate=*";

export const fetchAllProducts = createAsyncThunk(
  'products/fetchAllProducts',
  async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_KEY}/api/${allProductsAPI}`);
    return response.data.data;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    allProducts: [],
    menProducts: [],
    womenProducts: [],
    searchedProducts: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    searchFor(state, action) {
      const searchTerm = action.payload.toLowerCase();
      state.searchedProducts = state.allProducts.filter((product: Product) =>
        product.attributes.productTitle.toLowerCase().includes(searchTerm)
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.allProducts = action.payload;
        state.menProducts = action.payload.filter((product: Product) => product.attributes.productCategory == "men");
        state.womenProducts = action.payload.filter((product: Product) => product.attributes.productCategory == "women");
      })
  },
});

export default productsSlice.reducer;
export const { searchFor } = productsSlice.actions;