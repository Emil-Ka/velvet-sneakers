import { combineReducers } from '@reduxjs/toolkit';

import { SliceNames } from './constants';
import { beforeReducer } from './before';
import { afterReducer } from './after';

export const rootReducer = combineReducers({
  [SliceNames.BEFORE]: beforeReducer,
  [SliceNames.AFTER]: afterReducer,
});
