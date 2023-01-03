import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import styles from './Sidebar.module.css';

interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Sidebar: FC<SidebarProps> = ({...props}) => {
  return (
    <div {...props}>
      Sidebar
    </div>
  );
};