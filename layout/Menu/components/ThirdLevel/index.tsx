import { FC } from 'react';

import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { PageItem } from '../../../../interfaces/menu.interface';
import styles from './ThirdLevel.module.css';

interface ThirdLevelProps {
  pages: PageItem[];
  route: string;
}

export const ThirdLevel: FC<ThirdLevelProps> = ({ pages, route }): JSX.Element => {
  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      {pages.map((p) => {
        const path = `/${route}/${p.alias}`;

        return (
          <Link key={p.alias} href={path} className={cn(styles.thirdLevel, {
            [styles.active]: path === router.asPath
          })}>
            {p.category}
          </Link>
        );
      })}
    </div>
  );
};