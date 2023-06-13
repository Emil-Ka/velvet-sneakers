import { rootReducer } from './root-reducer';
import { store } from './store';
import {
  LoginPendingAction,
  LoginFulfilledAction,
  LoginRejectedAction,
  RegisterPendingAction,
  RegisterFulfilledAction,
  RegisterRejectedAction,
} from './auth';

export type PreloadedState = Partial<ApplicationStore>;

export type ApplicationStore = ReturnType<typeof rootReducer>;

export type DispatchType = typeof store.dispatch;

export type Actions =
  | LoginPendingAction
  | LoginFulfilledAction
  | LoginRejectedAction
  | RegisterPendingAction
  | RegisterFulfilledAction
  | RegisterRejectedAction;
