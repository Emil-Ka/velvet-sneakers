import React from 'react';
import { useRoutes, RouteObject } from 'react-router-dom';

import { PATHS } from 'config';

import { Home } from './home';
import { About } from './about';

const routes: RouteObject[] = [
  {
    path: PATHS.HOME,
    element: <Home />,
  },
  {
    path: PATHS.ABOUT_US,
    element: <About />,
  },
];

export const AppRouter = () => useRoutes(routes);
