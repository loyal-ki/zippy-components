import React, { type FC } from 'react';
import { View } from 'react-native';
import {
  type EdgeInsets,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

interface Props {
  type?: keyof EdgeInsets;
  style?: View['props']['style'];
}

export const InsetSubstitute: FC<Props> = ({ type = 'top', style }) => {
  const insets = useSafeAreaInsets();
  const rootStyles = { height: insets[type], zIndex: 999 };

  return <View style={[rootStyles, style]} />;
};
