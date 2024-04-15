import React, { type FC } from 'react';
import type { ButtonSmallProps } from '../button-small.props';
import { getButtonSmallDelegateStyles } from './button-small-delegate.styles';
import { Button } from '../../button';

export const ButtonSmallDelegate: FC<ButtonSmallProps> = (
  props: ButtonSmallProps
) => {
  const { theme } = props;
  const styleConfig = getButtonSmallDelegateStyles(theme);

  return <Button {...props} styleConfig={styleConfig} />;
};
