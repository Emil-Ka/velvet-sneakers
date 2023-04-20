import React from 'react';
import cn from 'classnames';

import { Input } from 'shared/components';

import { FormType } from './types';
import styles from './form.module.scss';

export const Form: FormType = ({ className, variant = 'transparent', children, ...props }) => {
  return (
    <form className={cn(styles.form, className, styles[variant])} {...props}>
      {children}
    </form>
  );
};

Form.Input = Input;
