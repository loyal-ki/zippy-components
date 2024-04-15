import type { StatusBarStyle } from 'react-native';

import { useTheme } from '../../src/context/themes/theme-context';

export const useBarStyle = () => {
  const { theme } = useTheme();

  const isDarkTheme = theme.type === 'dark';

  const lightContent: StatusBarStyle = isDarkTheme
    ? 'dark-content'
    : 'light-content';
  const darkContent: StatusBarStyle = isDarkTheme
    ? 'light-content'
    : 'dark-content';

  return { lightContent, darkContent };
};
