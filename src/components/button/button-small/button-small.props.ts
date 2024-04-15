import type { ButtonSharedProps } from '../button-shared.props';

export interface ButtonSmallProps extends Omit<ButtonSharedProps, 'iconName'> {
  theme: Theme;
  title: string;
}
