import Head from "next/head";

import styles from "../styles/Showcase.module.css";

export default function Showcases() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Showcases</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1>about_works__</h1>
                <p>tell something about my works</p>
            </main>
        </div>
    );
}
