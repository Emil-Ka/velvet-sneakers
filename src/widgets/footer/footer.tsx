import React, { FC } from 'react';
import cn from 'classnames';

import { Container, Text } from 'shared/components';
import TelegramIcon from 'assets/telegram.svg';

import { FooterProps } from './types';
import styles from './footer.module.scss';

export const Footer: FC<FooterProps> = ({ className, ...props }) => {
  return (
    <footer className={cn(styles.footer, className)} {...props}>
      <Container className={cn(styles.cont, className)}>
        <div className={cn(styles.wrapper, className)}>
          <a href="https://t.me/joinchat/HltVtDpVhHpiYTEy">
            <TelegramIcon />
          </a>
          <a href="tel:+74950000000">
            <Text className={cn(styles.number, className)}>+7 (495) 000-00-00</Text>
          </a>
          <a href="mailto:help@puresneakers.ru">
            <Text className={cn(styles.mail, className)}>help@puresneakers.ru</Text>
          </a>
        </div>
        <Text className={cn(styles.cpr, className)}>Copyright (C)</Text>
      </Container>
    </footer>
  );
};
