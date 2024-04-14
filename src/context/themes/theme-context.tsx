import React, {
  createContext,
  useMemo,
  useState,
  type ComponentType,
} from 'react';
import { Appearance } from 'react-native';
import { Themes } from '../../constants';
import { useMemoizedCallback } from '../../hooks';

export type ThemeProps = {
  children: React.ReactNode;
};

type WithThemeProps = {
  theme: Theme;
  updateTheme: (value: ThemeType) => void;
};

export function getDefaultThemeByAppearance() {
  if (Appearance.getColorScheme() === 'dark') {
    return Themes.dark;
  }
  return Themes.light;
}

export function getThemeMode(value: ThemeType) {
  if (value === 'dark') {
    return Themes.dark;
  }
  return Themes.light;
}

export const ThemeContext = createContext({
  theme: getDefaultThemeByAppearance(),
  updateTheme: (_value: ThemeType) => {},
});

const { Consumer, Provider } = ThemeContext;

const getTheme = (): Theme => {
  const defaultTheme = getDefaultThemeByAppearance();

  return defaultTheme;
};

/* //////////////////////////////////////////////////////////////
                  THEME CONFIGURATION 
////////////////////////////////////////////////////////////// */
export const ThemeProvider = ({ children }: ThemeProps) => {
  const [theme, setTheme] = useState<Theme>(getTheme());

  const updateTheme = useMemoizedCallback((value: ThemeType) => {
    const appTheme = getThemeMode(value);
    setTheme(appTheme);
  }, []);

  const themeRef = useMemo(() => {
    return { theme, updateTheme };
  }, [theme, updateTheme]);

  return <Provider value={themeRef}>{children}</Provider>;
};

export function withTheme<T extends WithThemeProps>(
  Component: ComponentType<T>
): ComponentType<T> {
  return function ThemeComponent(props) {
    return (
      <Consumer>
        {({ theme }) => <Component {...props} theme={theme} />}
      </Consumer>
    );
  };
}

export function useTheme(): WithThemeProps {
  return React.useContext(ThemeContext);
}
