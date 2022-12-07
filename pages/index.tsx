import styles from '../styles/Home.module.css'
import { Htag } from '../components';

export default function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <Htag tag="h1">
        Курсы по Photoshop
      </Htag>
    </div>
  )
}
