import React, { FC } from 'react';
import cn from 'classnames';

import { Button, Text } from 'shared/components';

import { CardProps } from './types';
import styles from './card.module.scss';

// !TODO Заменить текст с кнопкой на настоящую кнопку
export const Card: FC<CardProps> = ({ className, ...props }) => {
  return (
    <div className={cn(styles.card, className)} {...props}>
      <a href="#top">
        <img src={props.image} alt="cardImage" />
      </a>
      <Text tag="p" color="#fff" size="s" className={cn(styles.title, className)}>
        {props.title}
      </Text>
      <div className={cn(styles.cardBottom)}>
        <Text tag="p" color="#fff" size="xs" className={cn(styles.price, className)}>
          {props.price}р
        </Text>
        <Button size="small">В корзину</Button>
      </div>
    </div>
  );
};
