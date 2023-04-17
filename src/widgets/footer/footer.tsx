import React, { FC } from 'react';
import cn from 'classnames';

import { Container } from 'shared/components';

import { FooterProps } from './types';
import styles from './footer.module.scss';

export const Footer: FC<FooterProps> = ({ className, ...props }) => {
  return (
    <footer className={cn(styles.footer, className)} {...props}>
      <Container>Footer</Container>
    </footer>
  );
};
