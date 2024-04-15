import type { ReactNode } from 'react';
import type { TestIdProps } from 'src/types/interface/test-id.props';
import type { MarginProps } from 'src/types/styles/margin';
import type { IconNameEnum } from '../icon';

export interface ButtonSharedProps extends MarginProps, TestIdProps {
  title?: ReactNode;
  iconName?: IconNameEnum;
  disabled?: boolean;
  onPress: () => void;
}
