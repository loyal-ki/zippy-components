import type { ReactNode } from 'react';
import type { TestIdProps } from '../../types/interface/test-id.props';
import type { MarginProps } from '../../types/styles/margin';
import type { IconNameEnum } from '../icon';

export interface ButtonSharedProps extends MarginProps, TestIdProps {
  title?: ReactNode;
  iconName?: IconNameEnum;
  disabled?: boolean;
  onPress: () => void;
}
