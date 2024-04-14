import React, { type FC } from 'react';
import { View } from 'react-native';

import { getButtonFloatingContainerStyleSheet } from './buttons-floating-container.styles';

interface Props {
  children?: React.ReactNode;
  theme: Theme;
}

export const ButtonsFloatingContainer: FC<Props> = ({
  children,
  theme,
}: Props) => {
  const styles = getButtonFloatingContainerStyleSheet(theme);

  return <View style={styles.container}>{children}</View>;
};
