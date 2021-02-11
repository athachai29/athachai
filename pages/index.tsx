import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>athachai mala-ut</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Portfolio - example projects delivered for various clients and my personal project. website, cross-platform, data analyze, machine learning, custom..."
        />
      </Head>

      <main className={styles.main}>
        <div className={styles.greeting}>
          <Link href="/about">
            <div className={styles.about}></div>
          </Link>
          <Link href="/showcase">
            <div className={styles.showcases}></div>
          </Link>
          <div className={styles.contact}></div>
        </div>
      </main>
    </div>
  );
}
