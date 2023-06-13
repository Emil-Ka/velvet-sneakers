import React, { FC, MouseEvent } from 'react';
import cn from 'classnames';

import { getFullHref, updateStore } from 'shared/utils';

import { IButtonProps } from './types';
import styles from './button.module.scss';

export const Button: FC<IButtonProps> = ({
  className,
  variant = 'primary',
  size = 'medium',
  children,
  onClick,
  to,
  ...props
}) => {
  const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
    }

    if (to) {
      await updateStore();
      window.location.href = getFullHref(to);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={cn(styles.button, className, styles[variant], styles[size])}
      {...props}
    >
      {children}
    </button>
  );
};
