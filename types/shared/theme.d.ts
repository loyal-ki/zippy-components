type ThemeType = 'dark' | 'light' | 'system';
type ThemeKey = 'dark' | 'light' | 'system';

type Theme = {
  disabled: string;
  type: ThemeType;
  background: string;
  primary: string;
  primarySecondary: string;
  tabBar: string;
  tabBarLine: string;
  text: string;
  textMessage: string;
  disableBackground: string;
  textDisable: string;
  line: string;
  inputText: string;
  placeholder: string;
  cardBackground: string;

  // constants color
  success: string;
  warning: string;
  info: string;
  error: string;
  white: string;
  black: string;
  grey: string;
};
