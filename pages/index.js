import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/nav'
import Grid from '../components/grid'
import CTA from '../components/cta'
import Footer from '../components/footer'
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

        <div className={styles.featureSection}>
          <div className={styles.centeredContentConstraint}>
            <div className={styles.featureContainer}>
              <p className={styles.overline}>Features</p>
              <h2 className={styles.centeredH2}>A better way to work together</h2>
              <p className={styles.body2}>Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>
            </div>
          </div>
        </div>

        <Grid className={styles.gridMarginBottom}></Grid>

        <CTA></CTA>
      </main>

      <Footer></Footer>

    </div>
  )
}
