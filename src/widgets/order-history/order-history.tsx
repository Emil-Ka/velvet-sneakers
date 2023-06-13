import React from 'react';

import { Text } from 'shared/components';
import { isBrowser } from 'shared/utils';

import { Carousel } from '../carousel';
import styles from './order-history.module.scss';

export const OrderHistory = () => {
  return (
    <>
      <Text tag="h2" color="#000" size="l" className={styles.title}>
        {' '}
        История ваших заказов{' '}
      </Text>
      {isBrowser() && (
        <Carousel
          blocks={[
            { id: 1, image: 'assets/product/Химчистка_кроссовок_4.png' },
            { id: 2, image: 'assets/product/Химчистка_кроссовок_10.png' },
            { id: 3, image: 'assets/product/Химчистка_кроссовок_15.png' },
            { id: 4, image: 'assets/product/Химчистка_кроссовок_30.png' },
            { id: 5, image: 'assets/product/Химчистка_кроссовок_33.png' },
            { id: 6, image: 'assets/product/Химчистка_кроссовок_4.png' },
          ]}
          perPage={3}
        />
      )}
    </>
  );
};
