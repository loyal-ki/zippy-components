import React, { type FC } from 'react';
import { StatusBar } from 'react-native';

import { useTheme } from 'src/context';
import { useBarStyle } from 'src/hooks';

export const ScreenStatusBar: FC = () => {
  const { theme } = useTheme();
  const { darkContent } = useBarStyle();

  return (
    <StatusBar
      barStyle={darkContent}
      backgroundColor={theme.background}
      animated
    />
  );
};
