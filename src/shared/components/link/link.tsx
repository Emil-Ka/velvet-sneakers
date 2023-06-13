import React, { FC, MouseEvent } from 'react';

import { getFullHref, isBrowser, updateStore } from 'shared/utils';
import { ILinkProps } from './types';

export const Link: FC<ILinkProps> = ({ children, to, ...props }) => {
  if (!isBrowser()) {
    return (
      <a href={to} {...props}>
        {children}
      </a>
    );
  }

  const fullHref = getFullHref(to);

  const handleClick = async (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    await updateStore();

    window.location.href = fullHref;
  };

  return (
    <a onClick={handleClick} href={fullHref} {...props}>
      {children}
    </a>
  );
};
