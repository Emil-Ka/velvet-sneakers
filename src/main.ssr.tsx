import React from 'react';
import { hydrateRoot } from 'react-dom/client';

import { App } from 'app';

const htmlRoot = document.querySelector('#root');

if (!htmlRoot) {
  throw new Error('Element with id root not found');
}

window.addEventListener('load', () => {
  hydrateRoot(htmlRoot, <App />);
});
