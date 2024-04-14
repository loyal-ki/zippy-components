import React, { type FC } from 'react';

import { IconNameEnum } from '@src/components/icon';
import { Button } from '@components/button/button';
import type { ButtonSharedProps } from '@components/button/button-shared.props';

import { getButtonLargeStyleConfig } from './button-large.styles';

interface Props extends ButtonSharedProps {
  title: string;
  iconName?: IconNameEnum;
  theme: Theme;
}

export const ButtonLarge: FC<Props> = (props) => {
  const { theme } = props;
  const styleConfig = getButtonLargeStyleConfig(theme);

  return <Button {...props} styleConfig={styleConfig} />;
};