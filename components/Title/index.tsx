import { ReactNode } from 'react';

import styles from './Title.module.css';

interface TitleProp {
  variant: 'h1' | 'h2' | 'h3';
  children: ReactNode;
}

export const Title = ({ variant, children }: TitleProp): JSX.Element => {
  switch (variant) {
    case 'h1':
      return <h1 className={styles.h1}>{children}</h1>;
    case 'h2':
      return <h2 className={styles.h2}>{children}</h2>;
    case 'h3':
      return <h3 className={styles.h3}>{children}</h3>;
    default:
      return <></>;
  }
};