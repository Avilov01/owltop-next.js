import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

import cn from 'classnames';

import styles from './Card.module.css';

interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  color?: 'blue' | 'white';
}

export const Card = ({
  children,
  className,
  color = 'white',
  ...props
}: CardProps): JSX.Element => {

  const classes = cn(styles.card, className, {
    [styles.blue]: color === 'blue'
  });

  return (
    <div className={classes}
         {...props}
    >
      {children}
    </div>
  );
};