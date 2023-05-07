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

export const { actions: afterActions, reducer: afterReducer } = createSlice({
  initialState,
  name: SliceNames.AFTER,
  reducers: {},
});
