import { useAppContext } from '../../context/app.context';
import { FirstLevel } from './components/FirstLevel';
import styles from './Menu.module.css';

export const Menu = () => {
  const { menu, firstCategory } = useAppContext();

  return (
    <div className={styles.menu}>
      <FirstLevel firstCategory={firstCategory} menu={menu}/>
    </div>
  );
};