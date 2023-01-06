import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import { Menu } from '../Menu';

interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Sidebar: FC<SidebarProps> = ({...props}) => {
  return (
    <div {...props}>
      <Menu />
    </div>
  );
};