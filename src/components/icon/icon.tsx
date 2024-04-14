import React, { type FC, useMemo } from 'react';

import { iconNameMap } from './icon-name.map';
import type { IconProps } from './icon.props';

export const Icon: FC<IconProps> = ({
  name,
  size = 16,
  width = size,
  height = size,
  color,
  style,
  testID,
  stroke,
}) => {
  const Svg = useMemo(() => iconNameMap[name], [name]);

  return (
    <Svg
      width={width}
      stroke={stroke}
      height={height}
      color={color}
      style={style}
      testID={testID}
    />
  );
};
