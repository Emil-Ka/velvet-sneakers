import React, { FC } from 'react';
import cn from 'classnames';

import { Container, Text } from 'shared/components';

import { HeaderProps } from './types';
import styles from './header.module.scss';

export const Header: FC<HeaderProps> = ({ className, ...props }) => {
  return (
    <header className={cn(styles.header, className)} {...props}>
      <Container>
        <Text>Header</Text>
      </Container>
    </header>
  );
};
