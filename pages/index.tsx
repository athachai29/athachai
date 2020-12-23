import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Athachai Mala-ut</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.greeting}>
          <div className={styles.about}></div>
          <div className={styles.showcases}></div>
          <div className={styles.contact}></div>
        </h1>
      </main>
    </div>
  );
}
