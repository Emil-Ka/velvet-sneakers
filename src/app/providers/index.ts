import compose from 'compose-function';

import { withStrictMode } from './with-strict-mode';
import { withTheme } from './with-theme';

export const withProviders = compose(withStrictMode, withTheme);
