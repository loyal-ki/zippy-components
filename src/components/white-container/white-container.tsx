import React, { type FC } from 'react';
import { View } from 'react-native';

import { useWhiteContainerStyles } from './white-container.styles';
import { useTheme } from 'src/context/themes/theme-context';

interface WhiteContainerProps {
  children: React.ReactNode;
}

export const WhiteContainer: FC<WhiteContainerProps> = ({
  children,
}: WhiteContainerProps) => {
  const { theme } = useTheme();

  const styles = useWhiteContainerStyles(theme);

  return <View style={styles.container}>{children}</View>;
};
