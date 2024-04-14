import type { StyleProp, ViewStyle } from 'react-native';

import { IconNameEnum } from '@components/icon';
import type { TestIdProps } from '@typings/interface/test-id.props';

export interface ButtonIconProps extends TestIdProps {
  iconName: IconNameEnum;
  theme: Theme;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}
