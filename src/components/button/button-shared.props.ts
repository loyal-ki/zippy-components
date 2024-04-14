import type { ReactNode } from 'react';

import { IconNameEnum } from '@components/icon';
import type { TestIdProps } from '@typings/interface/test-id.props';
import type { MarginProps } from '@typings/styles/margin';

export interface ButtonSharedProps extends MarginProps, TestIdProps {
  title?: ReactNode;
  iconName?: IconNameEnum;
  disabled?: boolean;
  onPress: () => void;
}
