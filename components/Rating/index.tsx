import { DetailedHTMLProps, HTMLAttributes, useEffect, useState, KeyboardEvent } from 'react';

import cn from 'classnames';

import StarIcon from '../../assets/icons/star.svg';
import styles from './Rating.module.css';

interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isEditable?: boolean;
  rating: number;
  setRating?: (rating: number) => void;
}

export const Rating = ({
  isEditable = false,
  setRating,
  rating,
  ...props
}: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  useEffect(() => {
    constructorRating(rating);
    // eslint-disable-next-line
  }, [rating]);

  const constructorRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, idx: number) => {
      return (
        <span
          className={cn(styles.star, {
            [styles.filled]: idx < currentRating,
            [styles.editable]: isEditable
          })}
          onMouseEnter={() => changeDisplay(idx + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => handleClick(idx + 1)}
        >
          <StarIcon
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGAElement>) => isEditable && handleKeySpace(idx + 1, e) }
          />
        </span>
      );
    });

    setRatingArray(updatedArray);
  };

  const handleKeySpace = (value: number, e: KeyboardEvent<SVGAElement>) => {
    if (e.code === 'Space') {
      setRating?.(value);
    }
  };

  const changeDisplay = (value: number) => {
    if (!isEditable) {
      return;
    }
    constructorRating(value);
  };

  const handleClick = (value: number) => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(value);
  };

  return (
    <div
      {...props}
    >
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};