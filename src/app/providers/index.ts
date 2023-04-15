import compose from 'compose-function';

import { withStrictMode } from './with-strict-mode';
import { withRouter } from './with-router';

export const withProviders = compose(withStrictMode, withRouter);
