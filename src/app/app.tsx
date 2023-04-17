import React, { StrictMode } from 'react';
import { AppRouter } from 'pages';

import './design/index.scss';

export const App = () => (
  <StrictMode>
    <AppRouter />
  </StrictMode>
);
