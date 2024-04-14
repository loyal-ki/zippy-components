import React, { type FC } from 'react';

import { Button } from '@components/button/button';
import type { ButtonSharedProps } from '@components/button/button-shared.props';

import { getButtonTextStyleConfig } from './button-text.styles';

interface Props extends ButtonSharedProps {
  title: string;
  theme: Theme;
}

export const ButtonText: FC<Props> = (props) => {
  const { theme } = props;
  const styleConfig = getButtonTextStyleConfig(theme);

  return <Button {...props} styleConfig={styleConfig} />;
};
