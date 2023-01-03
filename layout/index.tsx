import { FC, ReactNode } from 'react';

import { Footer } from './Footer';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import styles from './Layout.module.css';


type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header}/>
        <Sidebar className={styles.sidebar}/>
        <div className={styles.content}>
          {children}
        </div>
      <Footer className={styles.footer}/>
    </div>
  );
};