import React from 'react';

import { Carousel } from 'widgets/carousel';
import { Container } from 'shared/components';

import { Page } from '../page';
import styles from './home.module.scss';

export const Home = () => {
  return (
    <Page className={styles.home}>
      <Container>
        <Carousel
          blocks={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }]}
          perPage={3}
        />
      </Container>
    </Page>
  );
};
