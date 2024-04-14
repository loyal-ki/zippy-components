import React, { type FC } from 'react';
import { Text } from 'react-native';

import { useWhiteContainerTextStyles } from './white-container-text.styles';
import { useTheme } from '@context/themes/theme-context';

interface Props {
  text: string;
}

export const WhiteContainerText: FC<Props> = ({ text }) => {
  const { theme } = useTheme();
  const styles = useWhiteContainerTextStyles(theme);

  return <Text style={styles.text}>{text}</Text>;
};
