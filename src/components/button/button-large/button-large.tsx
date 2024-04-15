import React, { type FC } from 'react';

import { getButtonLargeStyleConfig } from './button-large.styles';
import type { IconNameEnum } from '../../../../src/components/icon';
import type { ButtonSharedProps } from '../button-shared.props';
import { Button } from '../button';

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
