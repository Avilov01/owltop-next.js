import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

import cn from 'classnames';

import styles from './Tag.module.css';

interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  size?: 's' | 'm';
  color?: 'ghost' | 'red' | 'grey' | 'green' | 'primary';
  href?: string;
}

export const Tag = ({
  children,
  color = 'ghost',
  size = 's',
  href,
  className,
  ...props
}: TagProps): JSX.Element => {
  return (
    <div className={cn(styles.tag, className, {
      [styles.s]: size === 's',
      [styles.m]: size === 'm',
      [styles.ghost]: color === 'ghost',
      [styles.red]: color === 'red',
      [styles.grey]: color === 'grey',
      [styles.green]: color === 'green',
      [styles.primary]: color === 'primary'
    })}
         {...props}>
      {
        href
          ? <a href={href}>{children}</a>
          : <>{children}</>
      }
      {children}
    </div>
  );
};
