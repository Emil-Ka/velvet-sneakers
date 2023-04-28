import React from 'react';
import { useRoutes, RouteObject } from 'react-router-dom';

import { PATHS } from 'config';

import { Home } from './home';
import { Contact } from './contact';
import { About } from './about';
import { Personal } from './personal';

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
    path: PATHS.PERSONAL,
    element: <Personal />,
  },
];

export const AppRouter = () => useRoutes(routes);
