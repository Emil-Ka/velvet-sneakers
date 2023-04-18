import React, { useEffect, useMemo } from 'react';

import { DEFAULT_THEME } from 'config';
import { ThemeContext } from 'shared/context';
import { Hoc, THEME } from 'shared/types';
import { changeTheme } from 'shared/utils';

export const withTheme: Hoc = (Component) => (props) => {
  const themeProviderValue = useMemo(
    () => ({
      theme: DEFAULT_THEME,
      changeTheme,
    }),
    [],
  );

  useEffect(() => {
    changeTheme(THEME.LIGHT);
  }, []);

  return (
    <ThemeContext.Provider value={themeProviderValue}>
      <Component {...props} />
    </ThemeContext.Provider>
  );
};
