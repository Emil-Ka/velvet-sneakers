import React from 'react';
import { Helmet } from 'react-helmet';

import { Container } from 'shared/components';
import { useAuth } from 'shared/hooks';
import { Auth, OrderHistory, PersonalOffer, Subscription } from 'widgets';

import { Page } from '../page';
import styles from './personal.module.scss';

export const Personal = () => {
  const { isAuth } = useAuth();

  return (
    <Page className={styles.personal}>
      <Helmet>
        <title>Личный кабинет</title>
        <meta
          name="description"
          content="На этой странице вы сможете посмотреть историю своих
          заказов, а также персональные предложения"
        />
      </Helmet>
      <Container>
        {isAuth ? (
          <>
            <PersonalOffer />
            <Subscription />
            <OrderHistory />
          </>
        ) : (
          <Auth />
        )}
      </Container>
    </Page>
  );
};
