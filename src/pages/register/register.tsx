import React from 'react';
import { Helmet } from 'react-helmet';

import { RegisterForm } from 'widgets';
import { Container } from 'shared/components';
import { Page } from '../page';

import styles from './register.module.scss';

export const Register = () => {
  return (
    <Page>
      <Helmet>
        <title>Регистрация</title>
        <meta name="description" content="Регистрация в Pure Sneakers" />
      </Helmet>
      <Container className={styles.container}>
        <RegisterForm />
      </Container>
    </Page>
  );
};
