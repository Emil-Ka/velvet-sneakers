import compose from 'compose-function';

import { withTheme } from './with-theme';
import { withStrictMode } from './with-strict-mode';

export const withProviders = compose(withStrictMode, withTheme);
