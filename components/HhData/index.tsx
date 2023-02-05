import RateIcon from '../../assets/icons/rate.svg';
import { priceRu } from '../../helpers';
import { IHhData } from '../../interfaces/page.interface';
import { Card } from '../Card';
import styles from './HhData.module.css';

interface HhDataProps extends IHhData {
}

export const HhData = ({
  count,
  juniorSalary,
  middleSalary,
  seniorSalary
}: HhDataProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Card className={styles.count}>
        <div className={styles.title}>Всего вакансий</div>
        <div className={styles.countValue}>{count}</div>
      </Card>
      <Card className={styles.salary}>
        <div>
          <div className={styles.title}>Начальный</div>
          <div className={styles.salaryValue}>{priceRu(juniorSalary)}</div>
          <div className={styles.rate}>
            <RateIcon className={styles.filled}/>
            <RateIcon />
            <RateIcon />
          </div>
        </div>
        <div>
          <div className={styles.title}>Средний</div>
          <div className={styles.salaryValue}>{priceRu(middleSalary)}</div>
          <div className={styles.rate}>
            <RateIcon className={styles.filled}/>
            <RateIcon />
            <RateIcon />
          </div>
        </div>
        <div>
          <div className={styles.title}>Профессионал</div>
          <div className={styles.salaryValue}>{priceRu(seniorSalary)}</div>
          <div className={styles.rate}>
            <RateIcon className={styles.filled}/>
            <RateIcon />
            <RateIcon />
          </div>
        </div>
      </Card>
    </div>
  );
};