import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AxiosResponse } from 'axios';

import { PATHS } from 'config';
import { backendApi } from 'shared/api';
import { SliceNames } from 'store/constants';

import { Home } from './home';
import { About } from './about';
import { BeforeAfter } from './before-after';
import { Shop } from './shop';
import { Contact } from './contact';
import { Personal } from './personal';

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
    component: <BeforeAfter />,
    loadData: () => {
      return backendApi.get('/product');
    },
    sliceName: SliceNames.BEFORE_AFTER_PAGE,
  },
  {
    path: PATHS.ABOUT_US,
    component: <About />,
  },
  {
    path: PATHS.SHOP,
    component: <Shop />,
  },
  {
    path: PATHS.CONTACTS,
    component: <Contact />,
  },
  {
    path: PATHS.PERSONAL,
    component: <Personal />,
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
