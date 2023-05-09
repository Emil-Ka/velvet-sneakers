import React from 'react';
import { Helmet } from 'react-helmet';

import { Container } from 'shared/components';
import { Page } from 'pages/page';
import { Card } from 'widgets/card';

import { PRODUCTS } from './constants';
import styles from './shop.module.scss';

export const Shop = () => {
  return (
    <Page className={styles.page}>
      <Helmet>
        <title>Магазин</title>
        <meta name="description" content="Здесь вы можете взглянуть на весь наш ассортимент" />
      </Helmet>
      <Container className={styles.container}>
        <div className={styles.cart}>
          <img src="assets/shopping-cart.svg" alt="cart" />
          <span className={styles.cartNumber}>0</span>
        </div>
        {PRODUCTS.map((product) => (
          <Card
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </Container>
    </Page>
  );
};
