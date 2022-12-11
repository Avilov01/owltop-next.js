import React, { ButtonHTMLAttributes, ReactNode } from 'react';

import cn from 'classnames';

import ArrowIcon from '../../assets/icons/arrow.svg';
import styles from './Button.module.css';


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  appearance?: 'primary' | 'ghost';
  arrow?: 'right' | 'down' | 'none';
}

export const Button = (props: ButtonProps): JSX.Element => {
  const {
    children,
    appearance = 'primary',
    className,
    arrow = 'none',
    ...restProps
  } = props;

  return <button
    className={cn(styles.button, className, {
      [styles.primary]: appearance === 'primary',
      [styles.ghost]: appearance === 'ghost'
    })}
    {...restProps}
  >
    {children}

    {arrow !== 'none' && (
      <span className={cn(styles.arrow, {
        [styles.right]: arrow === 'right',
        [styles.down]: arrow === 'down'
      })}
      >
      <ArrowIcon />
    </span>
    )}
  </button>;
};