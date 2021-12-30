import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Landing Page Test</title>
        <meta name="description" content="Ionic landing page test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.nav}>
          <div className={styles.container}>
            <div className={styles.logoNav}>
              <div className={styles.logo}> 
                <Image src="/logo.svg" alt="Landing Logo" width={40} height={32} />
              </div>
              <a className={styles.navLink}>Product</a>
              <a className={styles.navLink}>Features</a>
              <a className={styles.navLink}>Enterprise</a>
              <a className={styles.navLink}>Company</a>
            </div>
            <div className={styles.navRight}>
              <a className={styles.navLinkSecondary}>Sign in</a>
              <a className={styles.navLinkSecondary}>Download</a>
            </div>
          </div>
        </div>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              Your best work. <br/><span className={styles.orangeTitle}>Done together.</span>
            </h1>
            <p className={styles.subtitle}>Build better a business, faster. Start sharing your work across your company—in realtime.</p>
            <div className={styles.btnContainer}>
              <button className={styles.btnMain}>Try it free</button>
              <button className={styles.btnSecondary}>Download</button>
            </div>
          </div>
          <div className={styles.heroMedia}>
            <Image src="/image.jpg" alt="Detail shot of two people working with slight hazy blue overlay" width={620} height={634} />
          </div>
        </div>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
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
