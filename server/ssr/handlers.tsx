import React from 'react';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import { matchPath } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { configureStore } from '@reduxjs/toolkit';
import { StaticRouter } from 'react-router-dom/server';
import { NextFunction, Request, Response } from 'express';
import path from 'path';
import fs from 'fs/promises';
import { JSDOM } from 'jsdom';

import { App } from '../../src/app';
import { routes } from '../../src/pages';
import { PreloadedState, rootReducer } from '../../src/store';

const SUCCESS_STATUS = 200;
let preloadedState: PreloadedState = {};

export const renderHtml = async (req: Request, res: Response, next: NextFunction) => {
  console.log('[GET]', req.originalUrl);

  const indexHTML = await fs.readFile(path.resolve(__dirname, '..', '..', 'ssr', 'index.html'), {
    encoding: 'utf8',
  });

  for (const { path, loadData, sliceName } of routes) {
    const match = matchPath(req.originalUrl, path);

    if (!match) continue;

    if (loadData && sliceName) {
      try {
        const { data } = await loadData(match.params);

        preloadedState[sliceName] = {
          ...(preloadedState[sliceName] || {}),
          data,
        };
      } catch (err) {
        if (err instanceof Error) {
          console.log('[ERR]', err.message);
        }
      }

      break;
    }
  }

  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
  });

  const appHTML = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.originalUrl}>
        <App />
      </StaticRouter>
    </Provider>,
  );

  const helmet = Helmet.renderStatic();

  const {
    window: { document },
  } = new JSDOM(indexHTML);

  if (document) {
    const root = document.querySelector('#root');
    const body = document.querySelector('body');
    const head = document.querySelector('head');

    if (root) {
      root.innerHTML = appHTML;
    }

    if (body) {
      const script = document.createElement('script');
      script.innerHTML = `window.__PRELOADED_STATE__=${JSON.stringify(preloadedState)}`;

      body.append(script);
    }

    if (head) {
      head.innerHTML += helmet.link.toString();
      head.innerHTML += helmet.meta.toString();
      head.innerHTML += helmet.title.toString();
    }
  }

  res.contentType('text/html');
  res.status(200);

  res.send(`<!DOCTYPE html>${document.documentElement.outerHTML}`);

  next();
};

export const updateStore = (req: Request<unknown, unknown, PreloadedState>, res: Response) => {
  preloadedState = req.body;

  res.status(SUCCESS_STATUS);
  res.end();
};
