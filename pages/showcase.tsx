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
                {/* <p>tell something about my works</p> */}
                <div className={styles.gridContainer}>
                    {/* ChordHub */}
                    <div className={styles.gridItem}>
                        <img src="https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80" />
                        <div>ChordHub</div>
                    </div>
                    {/* Simple Ecommerce with microservice */}
                    <div className={styles.gridItem}>
                        <img src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80" />
                        <div>Simple Ecommerce</div>
                    </div>
                    {/* Keystroke Biometric */}
                    <div className={styles.gridItem}>
                        <img src="https://images.unsplash.com/photo-1592991538534-00972b6f59ab?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80" />
                        <div>Keystroke Biometric</div>
                    </div>
                    {/* Pomodoro app with Flutter */}
                    <div className={styles.gridItem}>
                        <img src="https://images.unsplash.com/photo-1511915274835-e2e34894d687?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3289&h=2200&q=80" />
                        <div>Pomodoro App</div>
                    </div>
                    {/* AV actress analysis */}
                    <div className={styles.gridItem}>
                        <img src="https://images.unsplash.com/photo-1485662765173-b710c399cd34?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2571&h=1720&q=80" />
                        <div>Actress Analyze</div>
                    </div>
                    {/* OCR with flutter */}
                    {/* <div className={styles.gridItem}>
                        <img src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&h=1460&q=80" />
                        <div>OCR Application</div>
                    </div> */}
                    {/* Recommendation AV movie */}
                    <div className={styles.gridItem}>
                        <img src="https://images.unsplash.com/photo-1588031710787-5d6e7feac7d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&h=1505&q=80" />
                        <div style={{ fontSize: '64%' }}>Movie Recommendation</div>
                    </div>
                    {/* Command-line tools */}
                    <div className={styles.gridItem}>
                        <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&h=1505&q=80" />
                        <div>Command Line Tool</div>
                    </div>
                </div>
            </main>
        </div>
    );
}
