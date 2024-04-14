import React, { type FC } from 'react';

import { Button } from '@components/button/button';
import { getButtonSmallDelegateStyles } from '@components/button/button-small/button-small-delegate/button-small-delegate.styles';
import type { ButtonSmallProps } from '@components/button/button-small/button-small.props';

export const ButtonSmallDelegate: FC<ButtonSmallProps> = (
  props: ButtonSmallProps
) => {
  const { theme } = props;
  const styleConfig = getButtonSmallDelegateStyles(theme);

  return <Button {...props} styleConfig={styleConfig} />;
};
