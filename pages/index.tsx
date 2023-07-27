import Head from 'next/head'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tic Tac Toe</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="style.css"/>
        <script src="script.js"></script>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Tic Tac Toe!
        </h1>

        <p className={styles.description}>
          Get started by pressing play. Then, choose X's or O's and beat your opponent. 
          <code className={styles.code}>pages/index.js</code>
        </p>
        <body>
          <div class="board" id="board">
            <div class="cell" data-cell></div>
            <div class="cell" data-cell></div>
            <div class="cell" data-cell></div>
            <div class="cell" data-cell></div>
            <div class="cell" data-cell></div>
            <div class="cell" data-cell></div>
            <div class="cell" data-cell></div>
            <div class="cell" data-cell></div>
            <div class="cell" data-cell></div>
          </div>
          <div class="winning-message" id="winningMessage">
            <div id="winningMessageText"></div>
            <button id="restartButton">Restart</button>
          </div>
        </body>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=typescript-nextjs-starter"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{` `}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
