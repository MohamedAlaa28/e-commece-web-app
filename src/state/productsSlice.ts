import { Product } from "@/app/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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
    status: 'idle',
    error: null,
  },
  reducers: {},
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
