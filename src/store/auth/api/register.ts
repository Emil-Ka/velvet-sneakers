import { createAsyncThunk } from '@reduxjs/toolkit';

import { backendApi } from 'shared/api';
import { RegisterResponse, RegisterRequest } from 'shared/types';

export const registerApi = createAsyncThunk<RegisterResponse, RegisterRequest>(
  'auth/register',
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await backendApi.post<RegisterResponse>('/auth/register/', formData);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
