import React from 'react';

import { Button, Text } from 'shared/components';
import { PATHS } from 'config';

import styles from './auth.module.scss';

export const Auth = () => {
  return (
    <div className={styles.auth}>
      <Text className={styles.title} size="l">
        Вы не вошли в свой аккаунт(
      </Text>
      <Button className={styles.login} to={PATHS.LOGIN}>
        Войти
      </Button>
      <Button className={styles.register} to={PATHS.REGISTER}>
        Зарегистрироваться
      </Button>
    </div>
  );
};
