import React, { type FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { conditionalStyle, isDefined } from '@src/utils';
import { Icon } from '@components/icon';

import type { ButtonSharedProps } from './button-shared.props';
import type { ButtonStyleConfig } from './button-style.config';
import { getButtonStyleSheet } from './button.styles';

interface Props extends ButtonSharedProps {
  styleConfig: ButtonStyleConfig;
  isFullWidth?: boolean;
  theme: Theme;
}

export const Button: FC<Props> = ({
  title,
  iconName,
  disabled = false,
  styleConfig,

  isFullWidth = false,
  theme,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  onPress,
}) => {
  const {
    containerStyle,
    titleStyle,
    iconStyle,
    activeColorConfig,
    disabledColorConfig = activeColorConfig,
  } = styleConfig;

  const {
    titleColor,
    iconColor = titleColor,
    backgroundColor,
    borderColor = backgroundColor,
  } = disabled ? disabledColorConfig : activeColorConfig;

  const styles = getButtonStyleSheet(theme);

  const handlePress = () => {
    return onPress?.();
  };

  return (
    <View style={conditionalStyle(isFullWidth, styles.container)}>
      <TouchableOpacity
        disabled={disabled}
        style={[
          styles.touchableOpacity,
          containerStyle,
          { backgroundColor, borderColor },
          { marginTop, marginRight, marginBottom, marginLeft },
        ]}
        onPress={handlePress}
      >
        {isDefined(iconName) && (
          <Icon
            name={iconName}
            size={iconStyle?.size}
            color={iconColor}
            {...(isDefined(title) && {
              style: { marginRight: iconStyle?.marginRight },
            })}
          />
        )}

        <Text style={[titleStyle, { color: titleColor }]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
