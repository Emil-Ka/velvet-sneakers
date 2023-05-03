import express from 'express';
import fs from 'fs/promises';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';

import { App } from '../src/app';

// const App = () => {
//   return <div>hello</div>;
// };

const app = express();
const PORT = 8080;

app.get(/\.(js|css|map|ico)$/, express.static(path.resolve(__dirname, '..', 'ssr')));
app.use('*', async (req, res) => {
  let indexHTML = await fs.readFile(path.resolve(__dirname, '..', 'client', 'index.html'), {
    encoding: 'utf8',
  });

  const appHTML = renderToString(<App />);

  indexHTML = indexHTML.replace('<div id="app"></div>', `<div id="app">${appHTML}</div>`);

  res.contentType('text/html');
  res.status(200);

  return res.send(indexHTML);
});

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
