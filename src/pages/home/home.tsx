import React from 'react';

import { Carousel } from 'widgets/carousel';

import { Page } from '../page';
import styles from './home.module.scss';

export const Home = () => {
  return (
    <Page className={styles.kefteme}>
      Что за тяги такие бархатные? Уффф кефтемеее...
      <Carousel blocks={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }]} />
    </Page>
  );
};
