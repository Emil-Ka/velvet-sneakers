import React, { FC } from 'react';
import cn from 'classnames';

import { TextProps } from './types';
import styles from './text.module.scss';

export const Text: FC<TextProps> = ({ className, children, ...props }) => {
  return (
    <div className={cn(styles.text, className)} {...props}>
      {children}
    </div>
  );
};
