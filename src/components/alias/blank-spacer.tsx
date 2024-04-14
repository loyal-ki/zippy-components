import React from 'react';
import { View, type ViewProps } from 'react-native';

export interface BlankSpacerProps extends ViewProps {
  height?: number;

  width?: number;

  color?: string;
}

export const BlankSpacer: React.FC<BlankSpacerProps> = ({
  style,
  height,
  width,
  color: backgroundColor,
  ...otherProps
}) => (
  <View style={[{ height, width, backgroundColor }, style]} {...otherProps} />
);
