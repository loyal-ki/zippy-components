import React, { type FC } from 'react';
import { TouchableOpacity } from 'react-native';

import { WhiteContainerActionStyles } from './white-container-action.styles';

interface WhiteContainerActionProps {
  disabled?: boolean;
  onPress?: () => void;
  children?: React.ReactNode;
}

export const WhiteContainerAction: FC<WhiteContainerActionProps> = ({
  disabled,
  children,
  onPress,
}: WhiteContainerActionProps) => (
  <TouchableOpacity
    style={WhiteContainerActionStyles.container}
    disabled={disabled}
    onPress={onPress}
  >
    {children}
  </TouchableOpacity>
);
