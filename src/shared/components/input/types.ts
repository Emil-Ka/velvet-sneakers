import { ComponentProps } from 'react';

export interface InputProps extends ComponentProps<'input'> {
  rangeClassName?: string;
  isGray?: boolean;
  isOutlined?: boolean;
  error?: string;
}
