import { createSlice } from '@reduxjs/toolkit';

import { IProduct } from 'shared/types';

import { SliceNames } from '../constants';

interface BeforeAfterPageState {
  data: IProduct[];
}

const initialState: BeforeAfterPageState = {
  data: [],
};

export const { actions: beforeAfterPageActions, reducer: beforeAfterPageReducer } = createSlice({
  initialState,
  name: SliceNames.BEFORE_AFTER_PAGE,
  reducers: {},
});
