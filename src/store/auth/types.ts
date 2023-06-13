import { loginApi, registerApi } from './api';
import { Actions } from '../types';

export type LoginPendingAction = ReturnType<typeof loginApi.pending>;

export type LoginFulfilledAction = ReturnType<typeof loginApi.fulfilled>;

export type LoginRejectedAction = ReturnType<typeof loginApi.rejected>;

export type RegisterPendingAction = ReturnType<typeof registerApi.pending>;

export type RegisterFulfilledAction = ReturnType<typeof registerApi.fulfilled>;

export type RegisterRejectedAction = ReturnType<typeof registerApi.rejected>;

export const isLoginFulfilledAction = (action: Actions): action is LoginFulfilledAction => {
  return action.type === loginApi.fulfilled.type;
};

export const isRegisterFulfilledAction = (action: Actions): action is RegisterFulfilledAction => {
  return action.type === registerApi.fulfilled.type;
};
