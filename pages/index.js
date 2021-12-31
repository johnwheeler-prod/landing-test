import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/nav'
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
        <Nav></Nav>
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
          <div className={styles.mediaContainer}>
            <div className={styles.heroMedia}>
              <Image src="/image.jpg" alt="Detail shot of two people working with slight hazy blue overlay" width={620} height={634} />
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.centeredContentConstraint}>
            <div className={styles.featureContainer}>
              <p className={styles.overline}>Features</p>
              <h2 className={styles.centeredH2}>A better way to work together</h2>
              <p className={styles.body2}>Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>
            </div>
          </div>
        </div>

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
