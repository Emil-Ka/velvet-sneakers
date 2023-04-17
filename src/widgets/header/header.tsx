import React, { FC } from 'react';
import cn from 'classnames';

import { Container } from 'shared/components';

import { HeaderProps } from './types';
import styles from './header.module.scss';

export const Header: FC<HeaderProps> = ({ className, ...props }) => {
  return (
    <header className={cn(styles.header, className)} {...props}>
      <Container>Header</Container>
    </header>
  );
};
