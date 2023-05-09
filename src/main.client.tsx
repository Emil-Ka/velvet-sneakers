import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from 'app';

const htmlRoot = document.querySelector('#root');

if (!htmlRoot) {
  throw new Error('Element with id root not found');
}

const reactRoot = createRoot(htmlRoot);

reactRoot.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
