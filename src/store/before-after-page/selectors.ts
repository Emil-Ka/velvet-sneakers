import { IProduct } from 'shared/types';

import { ApplicationStore } from '../types';

export const productsBeforeAfterPageSelector = (state: ApplicationStore): IProduct[] =>
  state.beforeAfterPage.data;
