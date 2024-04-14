export enum AppThemeEnum {
  light = 'light',
  dark = 'dark',
  system = 'system',
}

// constant colors
export const ConstantColor = {
  success: '#50C19A',
  warning: '#FFD571',
  info: '#6DA9E4',
  error: '#D13E56',
  white: '#FFFFFF',
  black: '#000000',
  grey: '#F9F9F9',
};

export const Themes = {
  dark: {
    ...ConstantColor,
    type: 'dark',
    background: '#181A1F',
    primary: '#7966FF',
    primarySecondary: '#F1EEFC',
    text: '#FFFFFF',
    textMessage: '#FFFFFF',
    textDisable: '#3A3A3A',
    disableBackground: '#CBCBCB',
    tabBar: '#FCF8F3',
    tabBarLine: '#FCF8F3',

    line: '#F1EEFC',
    inputText: '#1A1A2E',
    placeholder: '#2D2D2D',
    cardBackground: '#202020',
  },
  light: {
    ...ConstantColor,
    type: 'light',
    background: '#FFFFFF',
    primary: '#7966FF',
    primarySecondary: '#F1EEFC',
    text: '#1A1A2E',
    textMessage: '#1A1A2E',
    textDisable: '#3A3A3A',
    disableBackground: '#F5F5F5',
    tabBar: '#B4B4B8',
    tabBarLine: '#B4B4B8',

    line: '#F1EEFC',
    inputText: '#1A1A2E',
    placeholder: '#2D2D2D',
    cardBackground: '#FFFFFF',
  },
} as Record<ThemeKey, Theme>;
