import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts as fetchProductsAPI } from '@/services/productsAPI';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      return await fetchProductsAPI();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
