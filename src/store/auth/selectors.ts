import { ApplicationStore } from '../types';

export const dataAuthSelector = (state: ApplicationStore) => state.auth.data;

export const statusAuthSelector = (state: ApplicationStore) => state.auth.status;

export const errorMessageSelector = (state: ApplicationStore) => state.auth.errorMessage;
