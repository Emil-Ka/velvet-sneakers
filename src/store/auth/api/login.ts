import { createAsyncThunk } from '@reduxjs/toolkit';

import { backendApi } from 'shared/api';
import { LoginResponse, LoginRequest } from 'shared/types';

export const loginApi = createAsyncThunk<LoginResponse, LoginRequest>(
  'auth/login',
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await backendApi.post<LoginResponse>('/auth/login/', formData);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
