import React, { type FC } from 'react';

import { IconNameEnum } from '@components/icon';
import { Button } from '@components/button/button';
import type { ButtonSharedProps } from '@components/button/button-shared.props';

import { getButtonMediumStyleConfig } from './button-medium.styles';

interface Props extends ButtonSharedProps {
  title: string;
  iconName?: IconNameEnum;
  theme: Theme;
}

export const ButtonMedium: FC<Props> = (props) => {
  const { theme } = props;
  const styleConfig = getButtonMediumStyleConfig(theme);

  return <Button {...props} styleConfig={styleConfig} />;
};
