import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Página Principal</h1>
      <ul>
        <li>
          <Link href="/sobre">Link para a página</Link>
        </li>
      </ul>      
    </div>
  )
}
