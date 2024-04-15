import type { StyleProp, ViewStyle } from 'react-native';
import type { SvgProps } from 'react-native-svg';

import { IconNameEnum } from './icon-name.enum';
import type { TestIdProps } from 'src/types/interface/test-id.props';

export interface IconProps extends TestIdProps, SvgProps {
  name: IconNameEnum;
  size?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
}
