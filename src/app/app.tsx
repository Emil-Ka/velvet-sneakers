import React, { FC } from 'react';
import { AppRouter } from 'pages';

import { withProviders } from './providers';
import './design/index.scss';

export const App: FC = withProviders(AppRouter);
