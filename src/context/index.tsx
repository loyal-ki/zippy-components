import React from 'react';
import {
  ThemeProvider as InternalThemeProvider,
  type ThemeProps as ThemeProviderProps,
  useTheme,
} from './themes/theme-context';
import {
  ScreenLoadingProvider,
  useScreenLoading,
  type ScreenLoadingProviderProps,
} from './screen-loading';

const ThemeProvider: React.FC<
  ThemeProviderProps & {
    screenLoadingProps?: ScreenLoadingProviderProps;
  }
> = ({ children, screenLoadingProps }) => {
  return (
    <InternalThemeProvider>
      <ScreenLoadingProvider {...screenLoadingProps}>
        {children}
      </ScreenLoadingProvider>
    </InternalThemeProvider>
  );
};

export { ThemeProvider, useTheme, useScreenLoading };
