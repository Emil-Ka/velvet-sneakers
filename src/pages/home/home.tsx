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

import { Page } from '../page';

export const Home = () => {
  return (
    <Page>
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
