import React, { FC } from 'react';
import cn from 'classnames';

import { PATHS } from 'config';
import { Link, Container, Logo, Avatar } from 'shared/components';

import { Menu } from '../menu';
import { HeaderProps } from './types';
import styles from './header.module.scss';

// !TODO Добавить выбор города (если нужно вообще), кнопки для аутентификации (когда будут готовы)
export const Header: FC<HeaderProps> = ({ className, ...props }) => {
  return (
    <header className={cn(styles.header, className)} {...props}>
      <Container className={styles.content}>
        <Link to={PATHS.HOME}>
          <Logo className={styles.logo} />
        </Link>
        <Menu />
        <Avatar />
      </Container>
    </header>
  );
};
