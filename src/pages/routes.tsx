import React from 'react';
import { useRoutes, RouteObject } from 'react-router-dom';

import { PATHS } from 'config';

import { Home } from './home';

const routes: RouteObject[] = [
  {
    path: PATHS.HOME,
    element: <Home />,
  },
];

export const AppRouter = () => useRoutes(routes);
