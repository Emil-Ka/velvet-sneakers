import { Middleware } from '@reduxjs/toolkit';

import { cookie } from 'shared/utils';
import { isLoginFulfilledAction, isRegisterFulfilledAction } from './types';
import { Actions, DispatchType } from '../types';

export const addAccessTokenToCookie: Middleware =
  () => (next: DispatchType) => (action: Actions) => {
    if (isLoginFulfilledAction(action) || isRegisterFulfilledAction(action)) {
      const { access } = action.payload;
      cookie.setCookie('accessToken', access);
    }

    next(action);
  };
