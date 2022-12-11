import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

import cn from 'classnames';

import styles from './P.module.css';

interface PProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  children: ReactNode;
  size?: 's' | 'm' | 'l';
}

export const P = ({
  children,
  className,
  size = 'm',
  ...restProps
}: PProps): JSX.Element => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.s]: size === 's',
        [styles.m]: size === 'm',
        [styles.l]: size === 'l'
      })}
      {...restProps}
    >
      {children}
    </p>
  );
};