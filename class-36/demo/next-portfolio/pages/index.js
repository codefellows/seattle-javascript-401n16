import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>John's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav>
          <ul>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/projects"><a>Projects</a></Link></li>
          </ul>
        </nav>
      </header >

      <main className={styles.main}>
        <h1 className={styles.title}>
          John Is Cool
        </h1>

        <div>
          Here would be cool things about John
        </div>
      </main>

      <footer className={styles.footer}>
        &copy; 2020 John
      </footer>
    </div >
  )
}
