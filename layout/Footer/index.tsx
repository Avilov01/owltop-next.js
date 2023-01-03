import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import cn from 'classnames';
import { format } from 'date-fns';

import styles from './Footer.module.css';

interface FooterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Footer: FC<FooterProps> = ({className, ...props}) => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <span>
        OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены
      </span>
      <a href="#" target="_blank">
        Пользовательское соглашение
      </a>
      <a href="#" target="_blank">
        Политика конфиденциальности
      </a>
    </footer>
  );
};