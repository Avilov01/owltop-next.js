import { DetailedHTMLProps, HTMLAttributes } from 'react';

import cn from 'classnames';

import SortIcon from '../../assets/icons/sort.svg';
import styles from './Sort.module.css';

export type SortType = 'Rating' | 'Price';

interface SortProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  sort: 'Rating' | 'Price';
  setSort: (sort: SortType) => void;
}

export const Sort = ({
  sort, setSort, className, ...props
}: SortProps): JSX.Element => {
  return (
    <div className={cn(styles.sort, className)} {...props}>
      <span className={cn({
        [styles.active]: sort === 'Rating'
      })} onClick={() => setSort('Rating')}>
          <SortIcon />По&nbsp;рейтингу
      </span>

      <span className={cn({
        [styles.active]: sort === 'Price'
      })} onClick={() => setSort('Price')}>
          <SortIcon />По&nbsp;цене
      </span>
    </div>
  );
};