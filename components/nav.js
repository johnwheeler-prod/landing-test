import Image from 'next/image'
import styles from '../styles/Nav.module.css'

function Nav() {
    return (
        <div className={styles.nav}>
        <div className={styles.navContainer}>
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
    )
}

export default Nav
