import React, { type FC } from 'react';

import { getButtonSmallSecondaryStyles } from './button-small-secondary.styles';
import type { ButtonSmallProps } from '../button-small.props';
import { Button } from '../../button';

export const ButtonSmallSecondary: FC<ButtonSmallProps> = (
  props: ButtonSmallProps
) => {
  const { theme } = props;
  const styleConfig = getButtonSmallSecondaryStyles(theme);

  return <Button {...props} styleConfig={styleConfig} />;
};
