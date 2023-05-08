import React, { FC } from 'react';
import cn from 'classnames';

import { Container } from 'shared/components';
import { SectionComponentProps } from 'shared/types';

import styles from './before-after.module.scss';

export const BeforeAfter: FC<SectionComponentProps> = ({ className, ...props }) => {
  return (
    <section className={cn(styles.beforeAfter, className)} {...props}>
      <Container className={styles.content}>
        <img src="assets/balenciaga-black.jpg" alt="Черные баленсиаги" />
        <img src="assets/balenciaga-cveta-kapusty.jpg" alt="Баленсиаги цвета капусты" />
        <img src="assets/yeezy.jpg" alt="Изи бусты" />
      </Container>
    </section>
  );
};
