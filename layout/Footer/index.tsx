import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import styles from './Footer.module.css';

interface FooterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Footer: FC<FooterProps> = ({...props}) => {
  return (
    <div {...props}>
      Footer
    </div>
  );
};