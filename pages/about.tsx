import Head from "next/head";

import styles from "../styles/About.module.css";

export default function About() {
    return (
        <div className={styles.container}>
            <Head>
                <title>about</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1>about_me__</h1>
                <p>tell something about my self</p>
            </main>
        </div>
    );
}
