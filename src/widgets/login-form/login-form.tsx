import React from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { Button } from 'shared/components';
import { useTypedDispatch } from 'shared/hooks';
import { LoginRequest } from 'shared/types';
import { loginApi, errorMessageSelector } from 'store/auth';
import { redirect } from 'shared/utils';
import { PATHS } from 'config';
import { Form } from '../form';

export const LoginForm = () => {
  const dispatch = useTypedDispatch();
  const errorMessage = useSelector(errorMessageSelector);
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<LoginRequest>({
    mode: 'onBlur',
  });

  const onSubmit = (data: LoginRequest) => {
    dispatch(loginApi(data))
      .unwrap()
      .then(() => redirect(PATHS.HOME));
  };

  return (
    <Form
      variant="filled"
      buttonLocation="right"
      onSubmit={handleSubmit(onSubmit)}
      error={errorMessage}
    >
      <Form.Input
        placeholder="Email"
        type="email"
        error={errors.email?.message}
        {...register('email', {
          required: {
            value: true,
            message: 'Обязательное поле',
          },
        })}
      />
      <Form.Input
        placeholder="Пароль"
        type="password"
        error={errors.password?.message}
        {...register('password', {
          required: {
            value: true,
            message: 'Обязательное поле',
          },
        })}
      />
      <Button variant="reverse-theme" disabled={!isValid} type="submit">
        Войти
      </Button>
    </Form>
  );
};
