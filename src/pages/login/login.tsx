import React from 'react';
import { Helmet } from 'react-helmet';

import { LoginForm } from 'widgets';
import { Container } from 'shared/components';
import { Page } from '../page';

import styles from './login.module.scss';

export const Login = () => {
  return (
    <Page>
      <Helmet>
        <title>Вход</title>
        <meta name="description" content="Вход в Pure Sneakers" />
      </Helmet>
      <Container className={styles.container}>
        <LoginForm />
      </Container>
    </Page>
  );
};
