import { ComponentProps } from 'react';

export interface IButtonProps extends ComponentProps<'button'> {
  variant?: 'primary' | 'outline' | 'reverse-theme';
  size?: 'small' | 'medium';
  to?: string;
}
