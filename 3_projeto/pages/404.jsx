import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/NotFound.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
        <div className={styles.card}>
            <h1 className={styles.title}>404</h1>
            <p className={styles.message}>Parece que esta página não existe!</p>
            <div className={styles.imageContainer}>
                <Image 
                    src="/images/pokemon.png"
                    alt="Pikachu"
                    width={400}
                    height={300}
                    className={styles.pikachuImage}
                />
            </div>
            <p className={styles.joke}>Por que o Pikachu não gosta de computadores? Porque ele tem medo do mouse!</p>
            <Link href="/">Voltar</Link>
      </div>
    </div>
  );
}
