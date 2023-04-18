import React, { FC, useEffect, useState } from 'react';
import cn from 'classnames';

import { CarouselProps } from './types';
import styles from './carousel.module.scss';

export const Carousel: FC<CarouselProps> = ({ className, perPage = 3, blocks }) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [blockLength, setBlockLength] = useState(26);
  useEffect(() => {
    switch (perPage) {
      case 1:
        setBlockLength(77);
        break;
      case 2:
        setBlockLength(38);
        break;
      case 4:
        setBlockLength(18.5);
        break;
      default:
        setBlockLength(25);
        break;
    }
  }, [perPage]);

  const moveBack = () => {
    if (activeIndex === 0) {
      setActiveIndex(-blocks.length + 3);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };
  const moveNext = () => {
    if (activeIndex === -blocks.length + 3) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <div className={cn(styles.carousel, className)}>
      <div className={cn(styles.carouselItems)}>
        {blocks.map((block) => (
          <div
            className={cn(styles.carouselItem)}
            style={{
              transform: `translateX(${activeIndex * (blockLength + 1)}rem)`,
              minWidth: `${blockLength}rem`,
            }}
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

































