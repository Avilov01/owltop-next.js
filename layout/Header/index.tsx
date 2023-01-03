import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import styles from './Header.module.css';

interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Header: FC<HeaderProps> = ({...props}) => {
  return (
    <div {...props}>
      Header
    </div>
  );
};