import React from 'react';
import { View } from 'react-native';

import { useWhiteContainerDividerStyles } from './white-container-divider.styles';
import { useTheme } from '@context/themes/theme-context';

export const WhiteContainerDivider = () => {
  const { theme } = useTheme();

  const styles = useWhiteContainerDividerStyles(theme);

  return <View style={styles.divider} />;
};
