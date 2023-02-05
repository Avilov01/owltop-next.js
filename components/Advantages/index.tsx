import CheckIcon from '../../assets/icons/check.svg';
import { TopPageAdvantage } from '../../interfaces/page.interface';
import styles from './Advantages.module.css';

type AdvantagesProps = {
  advantages: TopPageAdvantage[]
};

export const Advantages = ({ advantages }: AdvantagesProps) => {

  return (
    <>
      {advantages.map(({ _id, title, description}) => (
        <div key={_id} className={styles.advantage}>
          <CheckIcon />
          <div className={styles.title}>{title}</div>
          <hr className={styles.vLine} />
          <div>{description}</div>
        </div>
      ))}
    </>
  );
};