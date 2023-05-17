import React, { FC } from 'react';

import { PATHS } from 'config';

import { Link } from '../link';
import { IAvatarProps } from './types';

export const Avatar: FC<IAvatarProps> = ({ ...props }) => (
  <Link to={PATHS.PERSONAL}>
    <svg
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="23" cy="23" r="23" fill="white" />
    </svg>
  </Link>
);
