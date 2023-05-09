import { combineReducers } from '@reduxjs/toolkit';

import { SliceNames } from './constants';
import { beforeAfterPageReducer } from './before-after-page';

export const rootReducer = combineReducers({
  [SliceNames.BEFORE_AFTER_PAGE]: beforeAfterPageReducer,
});
