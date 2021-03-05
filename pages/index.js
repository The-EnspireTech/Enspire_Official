import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Enspire Tech</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="App">
        <header>
          <div className="img">
            <img src="/favicon.ico" alt="" />
            <h2>Enspire Tech</h2>
          </div>
        </header>
        <div className="center">
          <h1>Coming Soon</h1>
          <a href="https://facebook.com/enspiretech" target="_blank">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
