import React, { forwardRef } from 'react';
import cn from 'classnames';

import { Input } from 'shared/components';

import { FormType } from './types';
import styles from './form.module.scss';

export const Form: FormType = ({
  className,
  variant = 'transparent',
  children,
  buttonLocation = 'center',
  error,
  ...props
}) => {
  return (
    <form
      className={cn(styles.form, className, styles[variant], styles[buttonLocation])}
      {...props}
    >
      {children}
      {error && <b className={styles.error}>{error}</b>}
    </form>
  );
};

Form.Input = forwardRef(({ className, ...props }, ref) => (
  <Input className={cn(styles.input, className)} ref={ref} {...props} />
));
