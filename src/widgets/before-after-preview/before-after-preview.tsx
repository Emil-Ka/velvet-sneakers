import React, { FC } from 'react';
import cn from 'classnames';

import { PATHS } from 'config';
import { Button, Container, Text } from 'shared/components';
import { SectionComponentProps } from 'shared/types';

import styles from './before-after-preview.module.scss';

export const BeforeAfterPreview: FC<SectionComponentProps> = ({ className, ...props }) => {
  return (
    <section className={cn(styles.afterBeforePreview, className)} {...props}>
      <Container className={styles.content}>
        <img src="assets/nike-jordan-purple.jpg" alt="Найки" className={styles.img} />
        <div className={styles.info}>
          <Text tag="h2" size="l" weight="bold" className={styles.title}>
            До / После
          </Text>
          <Text tag="p" size="m" className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Text>
          <Button to={PATHS.BEFORE_AFTER} variant="outline">
            Наши работы
          </Button>
        </div>
      </Container>
    </section>
  );
};
