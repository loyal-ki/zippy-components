import React from 'react';
import {
  Text,
  TouchableOpacity,
  type TouchableOpacityProps,
  View,
} from 'react-native';

import { useTheme } from '@context/themes/theme-context';
import { Icon, IconNameEnum } from '@components/icon';

import { getKeyboardNumberPadStyles } from './keyboard-num-pad.styles';

type KeyContentProps = {
  children: React.ReactNode;
};

export const KeyContent = React.memo(({ children }: KeyContentProps) => {
  const { theme } = useTheme();
  const styles = getKeyboardNumberPadStyles(theme);

  return (
    <View style={styles.button}>
      <Text style={styles.buttonText}>{children}</Text>
    </View>
  );
});

KeyContent.displayName = 'KeyContent';

export const EmptyKeyContent = React.memo(({ children }: KeyContentProps) => {
  const { theme } = useTheme();
  const styles = getKeyboardNumberPadStyles(theme);

  return <View style={styles.button}>{children}</View>;
});

EmptyKeyContent.displayName = 'EmptyKeyContent';

export const BackspaceKeyContent = React.memo(
  (props: TouchableOpacityProps) => {
    const { theme } = useTheme();
    const styles = getKeyboardNumberPadStyles(theme);

    return (
      <TouchableOpacity {...props} style={styles.button}>
        <Icon name={IconNameEnum.Erase} size={36} color={theme.primary} />
      </TouchableOpacity>
    );
  }
);

BackspaceKeyContent.displayName = 'BackspaceKeyContent';
