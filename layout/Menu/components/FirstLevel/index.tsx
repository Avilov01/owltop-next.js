import { FC, PropsWithChildren } from 'react';

import cn from 'classnames';
import Link from 'next/link';

import { Visible } from '../../../../components/Visible';
import { firstLevelMenu } from '../../../../helpers';
import { MenuItem } from '../../../../interfaces/menu.interface';
import { TopLevelCategory } from '../../../../interfaces/page.interface';
import { SecondLevel } from '../SecondLevel';
import styles from './FirstLevel.module.css';

interface FirstLevelProps {
  firstCategory: TopLevelCategory;
  menu: MenuItem[];
}

export const FirstLevel: FC<PropsWithChildren<FirstLevelProps>> = ({ firstCategory, menu }): JSX.Element => {
  return (
    <>
      {firstLevelMenu.map((m) => (
        <div key={m.route}>
          <Link href={`${m.route}`}>
            <div className={cn(styles.firstLevel, {
              [styles.active]: m.id === firstCategory
            })}>
              {m.icon}
              <span>{m.name}</span>
            </div>
          </Link>

          <Visible trigger={m.id === firstCategory}>
            <SecondLevel menuItem={m} menu={menu} />
          </Visible>
        </div>
      ))}
    </>
  );
};