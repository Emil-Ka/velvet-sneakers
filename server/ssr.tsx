import express, { Request, Response, NextFunction } from 'express';
import fs from 'fs/promises';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { matchPath } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { JSDOM } from 'jsdom';

import { routes } from '../src/pages';
import { App } from '../src/app';
import { rootReducer } from '../src/store';

const app = express();
const PORT = 8080;

app.get(/\.(js|css|map|ico|svg|jpg|jpeg|png)$/, express.static(path.resolve(__dirname, '..', 'ssr')));

const handler = async (req: Request, res: Response, next: NextFunction) => {
  console.log('[GET]', req.originalUrl);

  const indexHTML = await fs.readFile(path.resolve(__dirname, '..', 'ssr', 'index.html'), {
    encoding: 'utf8',
  });

  const preloadedState = {};

  /* eslint-disable-next-line */
  for (const { path, loadData, sliceName } of routes) {
    const match = matchPath(req.originalUrl, path);

    if (!match) continue;

    if (loadData && sliceName) {
      const { data } = await loadData(match.params);
      preloadedState[sliceName] = {
        data,
      };

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

  const { window: { document } } = new JSDOM(indexHTML);

  if (document) {
    const root = document.querySelector('#root');
    const body = document.querySelector('body');

    if (root) {
      root.innerHTML = appHTML;
    }

    if (body) {
      body.append(`<script>window.__PRELOADED_STATE__=${JSON.stringify(preloadedState)}</script>`);
    }
  }

  // indexHTML = indexHTML.replace(
  //   '<div id="root" data-theme="light"></div>',
  //   `<div id="root" data-theme="light">${appHTML}</div>
  //   <script>window.__PRELOADED_STATE__=${JSON.stringify(preloadedState)}</script>`,
  // );

  res.contentType('text/html');
  res.status(200);

  res.send(indexHTML);

  next();
};

routes.forEach(({ path }) => {
  app.get(path, handler);
})

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
