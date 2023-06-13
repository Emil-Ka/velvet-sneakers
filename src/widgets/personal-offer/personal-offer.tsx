import React from 'react';

import { Text } from 'shared/components';

import styles from './personal-offer.module.scss';

export const PersonalOffer = () => {
  return (
    <>
      <Text tag="h1" color="#000" size="l" className={styles.title}>
        {' '}
        Ваши персональные предложения{' '}
      </Text>
      <div className={styles.subcont}>
        <img className={styles.airforceImg} src="assets/airforce.jpg" alt="airforce" />
        <img className={styles.blackFridayImg} src="assets/black-friday.jpg" alt="blackfriday" />
        <img className={styles.adidasImg} src="assets/adidas.jpg" alt="adidas" />
        <img className={styles.bootsImg} src="assets/partner.jpg" alt="boots" />
      </div>
    </>
  );
};
