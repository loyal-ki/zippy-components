import React, { type FC } from 'react';

import { getButtonOutlineLargeStyleConfig } from './button-outline-large.styles';
import type { IconNameEnum } from '../../../components/icon';
import type { ButtonSharedProps } from '../button-shared.props';
import { Button } from '../button';

interface Props extends ButtonSharedProps {
  title: string;
  iconName?: IconNameEnum;
  theme: Theme;
}

export const ButtonOutlineLarge: FC<Props> = (props) => {
  const { theme } = props;
  const styleConfig = getButtonOutlineLargeStyleConfig(theme);

  return <Button {...props} styleConfig={styleConfig} />;
};
