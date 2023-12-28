import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Vercel By <a href="https://lifegazette.info">lifegazette</a>
        </h1>
        <div className={styles.grid}>
          <a href="https://lifegazette.info/topics/baby/" className={styles.card}>
            <h2> Baby &rarr;</h2>
            <p> Here you can find other domestic and international news about babies.</p>
          </a>

          <a href="https://lifegazette.info/topics/pet/" className={styles.card}>
            <h2> Dog &rarr;</h2>
            <p> Here you can find other national and international news about dogs </p>
          </a>

          <a
            href="https://lifegazette.info/category/blogging/"
            className={styles.card}
          >
            <h2>Blogging &rarr;</h2>
            <p>Here you can find the source to become master in blogging</p>
          </a>

          <a
            href="https://lifegazette.info"
            className={styles.card}
          >
            <h2>News &rarr;</h2>
            <p>
              Here you can find showviz news and other national and internation news
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
