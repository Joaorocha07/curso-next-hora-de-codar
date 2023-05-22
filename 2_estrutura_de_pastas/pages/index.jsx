import styles from '../styles/Home.module.css';

import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Página Principal</title>
        <meta name="keyworkds" content="Roupas, Calçados"></meta>
        <meta name="description" content="Encontre as melhores roupas"></meta>
      </Head>
      <div>
        <h1 className={styles.title}>Página Principal</h1>      
        <Image 
          src="/images/city.jpg" 
          width={400} 
          height={500} 
          alt="cidade a Noite" 
        />
      </div>
    </>
  )
}
