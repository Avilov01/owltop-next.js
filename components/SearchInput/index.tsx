import { DetailedHTMLProps, HTMLAttributes } from 'react';

import cn from 'classnames';
import Link from 'next/link';

import SearchIcon from '../../assets/icons/search.svg';
import styles from './SearchInput.module.css';

interface SearchInputProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

export const SearchInput = ({
  className,
  ...restProps
}: SearchInputProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <input
        className={cn(styles.input, className)}
        placeholder="Поиск..."
        {...restProps}
      />
      <Link className={styles.searchWrapper} href="/search">
        <SearchIcon  />
      </Link>
    </div>
  );
};