import React, { FC, useState } from 'react';
import cn from 'classnames';

import { CarouselProps } from './types';
import styles from './carousel.module.scss';

export const Carousel: FC<CarouselProps> = ({ className, ...props }) => {
  const moveAmount = 26;
  const [activeIndex, setActiveIndex] = useState(-1);
  const moveBack = () => {
    if (activeIndex === 0) {
      setActiveIndex(-props.blocks.length + 3);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };
  const moveNext = () => {
    if (activeIndex === -props.blocks.length + 3) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };
  return (
    <div className={cn(styles.carousel, className)} {...props}>
      <div className={cn(styles.carouselItems)}>
        {props.blocks.map((block) => (
          <div
            className={cn(styles.carouselItem)}
            style={{ transform: `translateX(${activeIndex * moveAmount}rem)` }}
            key={block.id}
          >
            {block.image}
          </div>
        ))}
      </div>
      <button className={cn(styles.carouselButtonBack)} onClick={() => moveBack()}>
        <i className={cn(styles.arrowLeft)} />
      </button>
      <button className={cn(styles.carouselButtonNext)} onClick={() => moveNext()}>
        <i className={cn(styles.arrowRight)} />
      </button>
    </div>
  );
};
