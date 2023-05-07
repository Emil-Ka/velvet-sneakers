import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { App } from 'app';
import { store, preloadedState } from 'store';

const htmlRoot = document.querySelector('#root');

if (!htmlRoot) {
  throw new Error('Element with id root not found');
}

window.addEventListener('load', () => {
  hydrateRoot(
    htmlRoot,
    <Provider store={store} serverState={preloadedState}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  );
});
