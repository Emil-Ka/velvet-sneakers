import React from 'react';

import { Container, Text } from 'shared/components';

import { Page } from '../page';
import styles from './personal.module.scss';
import { Carousel, Form } from '../../widgets';

export const Personal = () => {
  return (
    <Page className={styles.personal}>
      <Container>
        <Text tag="h1" color="#000" size="l" className={styles.title}>
          {' '}
          Ваши персональные предложения{' '}
        </Text>
        <div className={styles.subcont}>
          <img
            className={styles.photoBoots}
            width="400px"
            src="../../assets/airforce1.svg"
            alt="airforce"
          />
          <div className={styles.second}>
            <div className={styles.three}>
              <img
                width="470px"
                className={styles.photoBoots}
                src="../../assets/blackfriday.svg"
                alt="airforce"
              />
              <img
                className={styles.photoBoots}
                width="290px"
                src="../../assets/adidas.svg"
                alt="airforce"
              />
            </div>

            <img className={styles.photoBoots} src="../../assets/partner.svg" alt="airforce" />
          </div>
        </div>
        <Text tag="h2" color="#000" size="l" className={styles.title}>
          {' '}
          Рассчитай свою подписку{' '}
        </Text>
        <Form>
          <Form.Input isGray isOutlined placeholder="Пример с оутлайном" />
          <Form.Input isGray type="number" placeholder="Пример со слайдером" />
          <Form.Input
            isOutlined
            placeholder="Пример белого (для светлой темы) инпута с оутлайном"
          />
          <button>Пока кнопочки нет(</button>
        </Form>
        <Text tag="h2" color="#000" size="l" className={styles.title}>
          {' '}
          История ваших заказов{' '}
        </Text>
        <Carousel
          blocks={[
            { id: 1, image: '../../assets/product/Химчистка_кроссовок_4.png' },
            { id: 2, image: '../../assets/product/Химчистка_кроссовок_10.png' },
            { id: 3, image: '../../assets/product/Химчистка_кроссовок_15.png' },
            { id: 4, image: '../../assets/product/Химчистка_кроссовок_30.png' },
            { id: 5, image: '../../assets/product/Химчистка_кроссовок_33.png' },
            { id: 6, image: '../../assets/product/Химчистка_кроссовок_4.png' },
          ]}
          perPage={3}
        />
      </Container>
    </Page>
  );
};
