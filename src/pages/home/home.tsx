import React from 'react';

import {
  Promo,
  BeforeAfter,
  Advantages,
  ShopPreview,
  BeforeAfterPreview,
  Subscription,
  AboutUs,
  Map,
} from 'widgets';

import { Helmet } from 'react-helmet';
import { Page } from '../page';

export const Home = () => {
  return (
    <Page>
      <Helmet>
        <title>Главная страница</title>
        <meta
          name="description"
          content="Pure Sneakers - это интернет-магазин, в котором вы можете
                   заказать средства для очистки ваших кроссовок"
        />
      </Helmet>
      <Promo />
      <BeforeAfter />
      <Advantages />
      <ShopPreview />
      <BeforeAfterPreview />
      <Subscription />
      <AboutUs />
      <Map />
    </Page>
  );
};
