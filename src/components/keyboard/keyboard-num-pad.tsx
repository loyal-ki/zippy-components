import React, { useCallback } from 'react';
import {
  type StyleProp,
  View,
  type ViewStyle,
  type TouchableOpacityProps,
  TouchableOpacity,
} from 'react-native';

import { isDefined } from '../../../src/utils';

import { KeyContent } from './key-content';
import { getKeyboardNumberPadStyles } from './keyboard-num-pad.styles';
import {
  BackspaceKey,
  EmptyKey,
  type IKeyNumPad,
  KeyNumPadTypes,
} from './keyboard-num-pad.type';

type KeyboardNumberPadProps = {
  containerStyle?: StyleProp<ViewStyle>;
  theme: Theme;
  onDelete: () => void;
  onInsert: (value: number) => void;
};

const makeDigit = (digit: number): IKeyNumPad => ({
  key: String(digit),
  type: KeyNumPadTypes.Digit,
  value: digit,
  render: (props: TouchableOpacityProps) => (
    <TouchableOpacity {...props}>
      <KeyContent>{digit}</KeyContent>
    </TouchableOpacity>
  ),
});

const keys: IKeyNumPad[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  .map(makeDigit)
  .concat([EmptyKey, makeDigit(0), BackspaceKey]);

export const KeyboardNumberPad = React.memo(
  ({ containerStyle, theme, onInsert, onDelete }: KeyboardNumberPadProps) => {
    const styles = getKeyboardNumberPadStyles(theme);

    const renderKey = useCallback(
      (item: IKeyNumPad) => {
        const KeyComponent = item.render as any;

        const onKeyPress = () => {
          if (item.type === KeyNumPadTypes.Backspace) {
            return onDelete();
          }

          if (item.type === KeyNumPadTypes.Digit) {
            return onInsert(isDefined(item.value) ? item.value : 0);
          }
        };

        return (
          <KeyComponent
            style={styles.button}
            key={item.key}
            onPress={onKeyPress}
          />
        );
      },
      [onDelete, onInsert, styles.button]
    );

    return (
      <View style={[styles.pad, containerStyle]}>{keys.map(renderKey)}</View>
    );
  }
);

KeyboardNumberPad.displayName = 'KeyboardNumberPad';
