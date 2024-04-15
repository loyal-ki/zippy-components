import React, { type FC } from 'react';

import { getButtonMediumStyleConfig } from './button-medium.styles';
import type { ButtonSharedProps } from '../button-shared.props';
import type { IconNameEnum } from '../../../components/icon';
import { Button } from '../button';

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
