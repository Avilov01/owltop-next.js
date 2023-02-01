import { FC } from 'react';

import cn from 'classnames';
import { useRouter } from 'next/router';

import { Visible } from '../../../../components/Visible';
import { useAppContext } from '../../../../context/app.context';
import { FirstLevelMenuItem, MenuItem } from '../../../../interfaces/menu.interface';
import { ThirdLevel } from '../ThirdLevel';
import styles from './SecondLevel.module.css';

interface SecondLevelProps {
  menuItem: FirstLevelMenuItem;
  menu: MenuItem[];
}

export const SecondLevel: FC<SecondLevelProps> = ({ menuItem, menu }): JSX.Element => {
  const router = useRouter();
  const { setMenu } = useAppContext();

  const openCategory = (category: string) => {
    const newMenu = menu.map((m) => {
      if (m._id.secondCategory === category) {
        m.isOpened = !m.isOpened;
      }
      return m;
    });

    setMenu?.(newMenu);
  };

  return (
    <div className={styles.wrapper}>
      {menu.map((m) => {
        if (m.pages.map((p) => p.alias).includes(router.asPath.split('/')[2])) {
          m.isOpened = true;
        }

        return (
          <div key={m._id.secondCategory}>
            <div className={styles.secondLevel} onClick={() => openCategory(m._id.secondCategory)}>
              {m._id.secondCategory}
            </div>
            <div className={cn(styles.secondLevelBlock, {
              [styles.opened]: m.isOpened
            })}>
              <Visible trigger={m.isOpened}>
                <ThirdLevel pages={m.pages} route={menuItem.route} />
              </Visible>
            </div>
          </div>
        );
      })}
    </div>
  );
};