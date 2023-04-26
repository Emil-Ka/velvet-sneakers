import React, { useState } from 'react';

import { Carousel, Form } from 'widgets';
import { Container, Rating } from 'shared/components';

import { Card } from 'widgets/card';
import { Page } from '../page';
import styles from './home.module.scss';

export const Home = () => {
  const [rating, setRating] = useState<number>(2);

  return (
    <Page className={styles.home}>
      <Container>
        <Carousel
          blocks={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }]}
          perPage={3}
        />
        <b>Пожилые звездочки, здесь можно изменять количество звезд при наведении</b>
        <Rating
          rating={rating}
          isEditable
          setRating={(rating) => {
            setRating(rating);
          }}
        />
        <b>А здесь статический рейтинг</b>
        <Rating rating={3} />
        <Form>
          <Form.Input isGray isOutlined placeholder="Пример с оутлайном" />
          <Form.Input isGray type="number" placeholder="Пример со слайдером" />
          <Form.Input
            isOutlined
            placeholder="Пример белого (для светлой темы) инпута с оутлайном"
          />
          <button>Пока кнопочки нет(</button>
        </Form>
        <Form variant="filled">
          <Form.Input isGray isOutlined placeholder="Пример с оутлайном" />
          <Form.Input isGray type="number" placeholder="Пример со слайдером" />
          <Form.Input
            isOutlined
            placeholder="Пример белого (для светлой темы) инпута с оутлайном"
          />
          <button>Пока кнопочки нет(</button>
        </Form>
        <Form variant="border">
          <Form.Input isOutlined placeholder="Пример с оутлайном" />
          <Form.Input isOutlined type="number" placeholder="Пример со слайдером" />
          <button>Пока кнопочки нет(</button>
        </Form>
        <Card title="Набор для чистки обуви" price={2900} />
      </Container>
    </Page>
  );
};
