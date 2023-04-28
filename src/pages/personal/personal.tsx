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
        <div className={styles.subcont}>photo</div>
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
          blocks={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }]}
          perPage={3}
        />
      </Container>
    </Page>
  );
};
