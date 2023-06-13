import { ApplicationStore } from '../types';

export const productsBeforeAfterPageSelector = (state: ApplicationStore) =>
  state.beforeAfterPage.data;
