import { createSlice } from '@reduxjs/toolkit';

import { User } from 'shared/types';
import { AxiosError } from 'axios';
import { getErrorMessage } from 'shared/utils';
import { loginApi, registerApi } from './api';
import { SliceNames } from '../constants';

interface AuthState {
  data: User | null;
  status: 'init' | 'loading' | 'error' | 'success';
  errorMessage: string | null;
}

const initialState: AuthState = {
  data: null,
  status: 'init',
  errorMessage: null,
};

export const { actions: authActions, reducer: authReducer } = createSlice({
  initialState,
  name: SliceNames.AUTH,
  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(loginApi.pending, (state) => {
      state.status = 'loading';
      state.errorMessage = null;
    });

    addCase(loginApi.fulfilled, (state, { payload }) => {
      state.status = 'success';
      state.data = payload.data;
    });

    addCase(loginApi.rejected, (state, { payload }) => {
      state.status = 'error';

      if (payload instanceof AxiosError) {
        state.errorMessage = getErrorMessage(payload.request.responseText) || payload.message;
      } else {
        state.errorMessage = 'Что-то пошло не так...';
      }
    });

    addCase(registerApi.pending, (state) => {
      state.status = 'loading';
      state.errorMessage = null;
    });

    addCase(registerApi.fulfilled, (state, { payload }) => {
      state.status = 'success';
      state.data = payload.data;
    });

    addCase(registerApi.rejected, (state, { payload }) => {
      state.status = 'error';

      if (payload instanceof AxiosError) {
        state.errorMessage = getErrorMessage(payload.request.responseText) || payload.message;
      } else {
        state.errorMessage = 'Что-то пошло не так...';
      }
    });
  },
});
