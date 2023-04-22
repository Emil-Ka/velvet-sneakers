import React, { FC } from 'react';
import cn from 'classnames';

import { TextProps } from './types';
import styles from './text.module.scss';

export const Text: FC<TextProps> = ({
  tag: Tag = 'div',
  color,
  size,
  className,
  children,
  ...props
}) => {
  const style = {
    color,
    fontSize: size,
  };

  return (
    <Tag className={cn(styles.text, className)} style={style} {...props}>
      {children}
    </Tag>
  );
};
