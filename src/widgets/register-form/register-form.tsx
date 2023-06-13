import React from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { Button } from 'shared/components';
import { useTypedDispatch } from 'shared/hooks';
import { RegisterRequest } from 'shared/types';
import { registerApi, errorMessageSelector } from 'store/auth';
import { redirect } from 'shared/utils';
import { PATHS } from 'config';
import { Form } from '../form';

export const RegisterForm = () => {
  const dispatch = useTypedDispatch();
  const errorMessage = useSelector(errorMessageSelector);
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<RegisterRequest>({
    mode: 'onBlur',
  });

  const onSubmit = (data: RegisterRequest) => {
    dispatch(registerApi(data))
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
        placeholder="Имя"
        error={errors.first_name?.message}
        {...register('first_name', {
          required: {
            value: true,
            message: 'Обязательное поле',
          },
        })}
      />
      <Form.Input
        placeholder="Фамилия"
        error={errors.second_name?.message}
        {...register('second_name', {
          required: {
            value: true,
            message: 'Обязательное поле',
          },
        })}
      />
      <Form.Input
        placeholder="Телефон"
        type="tel"
        error={errors.phone?.message}
        {...register('phone', {
          required: {
            value: true,
            message: 'Обязательное поле',
          },
        })}
      />
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
        Зарегистрироваться
      </Button>
    </Form>
  );
};
