import { ComponentProps } from 'react';

export interface ILinkProps extends Omit<ComponentProps<'a'>, 'href'> {
  to: string;
}
