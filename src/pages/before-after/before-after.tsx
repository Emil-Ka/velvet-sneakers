import React, { useEffect, useState } from 'react';
import { Container } from 'shared/components';
import { Page } from 'pages/page';
import { IProduct } from 'shared/types/product';
import styles from './before-after.module.scss';
import { fetchProducts } from './api';

export const BeforeAfter = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);
  return (
    <Page>
      <Container className={styles.container}>
        <ul className={styles.products}>
          {products.map(({ image, title }, index) => (
            <li key={index}>
              <img src={image} alt={title} />
            </li>
          ))}
        </ul>
      </Container>
    </Page>
  );
};
