import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

import { Form } from 'widgets';
import { Container, Rating } from 'shared/components';

import { Page } from '../page';
import styles from './home.module.scss';

export const Home = () => {
  const [rating, setRating] = useState<number>(2);

  useEffect(() => {
    console.log(rating);
  }, [rating]);

  return (
    <Page className={styles.home}>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <Container>
        <div>rating: {rating}</div>
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
      </Container>
    </Page>
  );
};
