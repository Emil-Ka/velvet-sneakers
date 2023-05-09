import { configureStore } from '@reduxjs/toolkit';

import { isBrowser } from 'shared/utils';

import { rootReducer } from './root-reducer';

export const preloadedState = isBrowser() ? window.__PRELOADED_STATE__ : {};

export const store = configureStore({
  reducer: rootReducer,
  preloadedState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
