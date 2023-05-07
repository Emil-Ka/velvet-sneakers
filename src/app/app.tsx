import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { AppRouter } from 'pages';

import { withProviders } from './providers';
import './design/index.scss';

export const App: FC = withProviders(AppRouter);

// export const App = () => (
//    <Provider serverState={}>
//     <Ap />
//    </Provider>
// );
