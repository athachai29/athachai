import type { AppProps } from 'next/app';
import Link from 'next/link'

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <nav>
        <Link href="/">home</Link>&nbsp;|&nbsp;
        <Link href="/about">about</Link>&nbsp;|&nbsp;
        <Link href="/showcase">showcase</Link>
      </nav>
      <Component {...pageProps} />
      <footer>
        <p>
          <a href="https://github.com/athachai29"><img src="https://img.icons8.com/material-sharp/64/000000/github.png" /></a>&nbsp;
          <a href="https://linkedin.com/in/athachai"><img src="https://img.icons8.com/material/64/000000/linkedin--v1.png" /></a>&nbsp;
          <a href="athachai.m@gmail.com"><img src="https://img.icons8.com/material/64/000000/important-mail.png" /></a>
        </p>
      </footer>
    </>
  );
}

export default MyApp;
