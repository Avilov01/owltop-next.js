import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import cn from 'classnames';

import Logo from '../../assets/icons/logo.svg';
import { SearchInput } from '../../components/SearchInput';
import { Menu } from '../Menu';
import styles from './Sidebar.module.css';

interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Sidebar: FC<SidebarProps> = ({ className, ...props}) => {
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <Logo className={styles.logo} />
      <SearchInput />
      <Menu />
    </div>
  );
};