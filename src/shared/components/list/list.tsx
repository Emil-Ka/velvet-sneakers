import React, { FC } from 'react';
import cn from 'classnames';

import { ListProps, ListItemProps } from './types';
import styles from './list.module.scss';

export const List: FC<ListProps> = ({ className, children }) => {
  return <ul className={cn(styles.list, className)}>{children}</ul>;
};

export const ListItem: FC<ListItemProps> = ({ className, children }) => {
  return <li className={cn(styles.item, className)}>{children}</li>;
};
