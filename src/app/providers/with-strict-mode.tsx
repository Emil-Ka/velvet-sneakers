import React, { StrictMode } from 'react';

import { Hoc } from 'shared/types';

export const withStrictMode: Hoc = (Component) => (props) => {
  return (
    <StrictMode>
      <Component {...props} />
    </StrictMode>
  );
};
