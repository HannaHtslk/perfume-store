import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginAdmin, logoutAdmin } from '../../services/adminAuth';

export const login = createAsyncThunk(
  'admin/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const user = await loginAdmin(email, password);
      return { email: user.email, uid: user.uid };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('admin/logout', async () => {
  await logoutAdmin();
});
