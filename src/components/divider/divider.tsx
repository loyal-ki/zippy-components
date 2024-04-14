import React, { type FC } from 'react';
import { View } from 'react-native';

import { formatSize } from '@utils';

interface Props {
  size?: number;
}

export const Divider: FC<Props> = ({ size = formatSize(24) }) => (
  <View style={{ height: size, width: size }} />
);
