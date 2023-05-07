import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AxiosResponse } from 'axios';

import { PATHS } from 'config';
import { api } from 'shared/api';

import { SliceNames } from 'store/constants';
import { Home } from './home';
import { Before } from './before';

interface RouteConfig {
  path: PATHS;
  component: JSX.Element;
  loadData?: (params?: Record<string, string | undefined>) => Promise<AxiosResponse>;
  sliceName?: SliceNames;
}

export const routes: RouteConfig[] = [
  {
    path: PATHS.HOME,
    component: <Home />,
  },
  {
    path: PATHS.BEFORE_AFTER,
    component: <Before />,
    loadData: () => {
      return api.get('/product');
    },
    sliceName: SliceNames.BEFORE,
  },
  {
    path: PATHS.ABOUT_US,
    component: <div>about us</div>,
  },
];

export const AppRouter = () => {
  return (
    <Routes>
      {routes.map(({ path, component }) => (
        <Route key={path} path={path} element={component} />
      ))}
    </Routes>
  );
};

// import React from 'react';
// import { useRoutes, RouteObject } from 'react-router-dom';

// import { PATHS } from 'config';

// import { Home } from './home';

// export const routes: RouteObject[] = [
//   {
//     path: PATHS.HOME,
//     element: <Home />,
//   },
// ];

// export const AppRouter = () => useRoutes(routes);
