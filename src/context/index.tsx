import React from 'react';
import {
  ThemeProvider as InternalThemeProvider,
  type ThemeProps,
} from './themes/theme-context';

const ThemeProvider: React.FC<ThemeProps> = ({ children }) => {
  return <InternalThemeProvider>{children}</InternalThemeProvider>;
};

export { ThemeProvider };
