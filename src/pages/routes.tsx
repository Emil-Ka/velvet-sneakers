import React from 'react';
import { useRoutes, RouteObject } from 'react-router-dom';

import { PATHS } from 'config';

import { Home } from './home';
import { Contact } from './contact';
import { About } from './about';
import { BeforeAfter } from './before-after';

const routes: RouteObject[] = [
  {
    path: PATHS.HOME,
    element: <Home />,
  },
  {
    path: PATHS.ABOUT_US,
    element: <About />,
  },
  {
    path: PATHS.CONTACTS,
    element: <Contact />,
  },
  {
    path: PATHS.BEFORE_AFTER,
    element: <BeforeAfter />,
  },
];

export const AppRouter = () => useRoutes(routes);
