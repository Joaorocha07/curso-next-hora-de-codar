import styles from '../styles/Home.module.css';

import Head from 'next/head'

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
      </div>
    </>
  )
}
