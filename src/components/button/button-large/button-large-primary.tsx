import React, { type FC } from 'react';

import { Button } from '../button';

import { getButtonLargePrimaryStyleConfig } from './button-large-primary.styles';
import type { ButtonLargeProps } from './button-large.props';

export const ButtonLargePrimary: FC<ButtonLargeProps> = (props) => {
  const { theme } = props;

  const styleConfig = getButtonLargePrimaryStyleConfig(theme);

  return <Button {...props} styleConfig={styleConfig} isFullWidth />;
};
