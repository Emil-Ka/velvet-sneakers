import { ComponentProps, FC, PropsWithChildren } from 'react';

import { Input } from 'shared/components';

interface FormProps extends PropsWithChildren<ComponentProps<'form'>> {
  variant?: 'filled' | 'border' | 'transparent';
  buttonLocation?: 'left' | 'right' | 'center';
  error?: string | null;
}

export type FormType = FC<FormProps> & {
  Input: typeof Input;
};
