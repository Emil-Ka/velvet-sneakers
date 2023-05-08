import React from 'react';
import { useSelector } from 'react-redux';

import { Container } from 'shared/components';
import { Page } from 'pages/page';
import { productsBeforeAfterPageSelector } from 'store/before-after-page';

import styles from './before-after.module.scss';

export const BeforeAfter = () => {
  const products = useSelector(productsBeforeAfterPageSelector);

  return (
    <Page>
      <Container className={styles.container}>
        <ul className={styles.products}>
          {products.map(({ id, image, title }) => (
            <li key={id}>
              <img src={image} alt={title} />
            </li>
          ))}
        </ul>
      </Container>
    </Page>
  );
};
