import React, { type FC } from 'react';

import { getButtonTextStyleConfig } from './button-text.styles';
import type { ButtonSharedProps } from '../button-shared.props';
import { Button } from '../button';

interface Props extends ButtonSharedProps {
  title: string;
  theme: Theme;
}

export const ButtonText: FC<Props> = (props) => {
  const { theme } = props;
  const styleConfig = getButtonTextStyleConfig(theme);

  return <Button {...props} styleConfig={styleConfig} />;
};
