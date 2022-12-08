import styles from '../styles/Home.module.css';
import { Title } from '../components';

export default function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <Title variant='h1'>
        Курсы по Photoshop
      </Title>
    </div>
  );
}
