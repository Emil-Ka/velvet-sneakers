import React, { FC, MouseEvent } from 'react';

import { isBrowser } from 'shared/utils';
import { ssrServerApi } from 'shared/api';
import { store } from 'store';

import { ILinkProps } from './types';

export const Link: FC<ILinkProps> = ({ children, to, ...props }) => {
  if (!isBrowser()) {
    return (
      <a href={to} {...props}>
        {children}
      </a>
    );
  }

  const { origin, pathname } = window.location;
  const fullHref = `${origin}${to}`;

  const handleClick = async (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    try {
      await ssrServerApi.post('/update-store', store.getState());
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
      }
    }

    window.location.href = fullHref;
  };

  return (
    <a onClick={handleClick} href={fullHref} {...props}>
      {children}
    </a>
  );
};
