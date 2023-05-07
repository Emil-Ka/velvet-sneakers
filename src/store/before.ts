import { createSlice } from '@reduxjs/toolkit';
import { SliceNames } from './constants';

interface IProduct {
  title: string;
  image: string;
}

interface InitialState {
  data: IProduct[];
}

const initialState: InitialState = {
  data: [],
};

export const { actions: beforeActions, reducer: beforeReducer } = createSlice({
  initialState,
  name: SliceNames.BEFORE,
  reducers: {},
});
