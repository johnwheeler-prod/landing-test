import styles from '../styles/Footer.module.css'
import Image from 'next/image'

function Footer() {
    const currentDate = new Date();
    const copyrightDate = currentDate.getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.flexTop}>
                <div className={styles.allLinksContainer}>
                    <div className={styles.linksContainer}>
                        <h2 className={styles.footerLabel}>Solutions</h2>
                        <a href="" className={styles.footerLink}>Screen Sharing</a>
                        <a href="" className={styles.footerLink}>Marketing</a>
                        <a href="" className={styles.footerLink}>Commerce</a>
                        <a href="" className={styles.footerLink}>Insights</a>
                    </div>
                    <div className={styles.linksContainer}>
                        <h2 className={styles.footerLabel}>Resources</h2>
                        <a href="" className={styles.footerLink}>Screen Sharing</a>
                        <a href="" className={styles.footerLink}>Marketing</a>
                        <a href="" className={styles.footerLink}>Commerce</a>
                        <a href="" className={styles.footerLink}>Insights</a>
                    </div>
                    <div className={styles.linksContainer}>
                        <h2 className={styles.footerLabel}>Company</h2>
                        <a href="" className={styles.footerLink}>Screen Sharing</a>
                        <a href="" className={styles.footerLink}>Marketing</a>
                        <a href="" className={styles.footerLink}>Commerce</a>
                        <a href="" className={styles.footerLink}>Insights</a>
                    </div>
                    <div className={styles.linksContainer}>
                        <h2 className={styles.footerLabel}>Help</h2>
                        <a href="" className={styles.footerLink}>Screen Sharing</a>
                        <a href="" className={styles.footerLink}>Marketing</a>
                        <a href="" className={styles.footerLink}>Commerce</a>
                        <a href="" className={styles.footerLink}>Insights</a>
                    </div>
                </div>
                <div className={styles.subscriptionContainer}>
                    <h2 className={styles.footerLabel}>Subscribe to our newsletter</h2>
                    <p className={styles.footerLink}>Get the latest news, articles, and resources, sent to your inbox every week.</p>
                    <div>
                        <form className={styles.form} action="" method="POST">
                            <input className={styles.input} id="email" type="email" autoComplete="email" placeholder="Email" required />
                            <button className={styles.btnMain} type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
            <hr/>
            <div className={styles.flex}>
                <div>
                    <p className={styles.copyright}>© {copyrightDate} Acme, Inc. All rights reserved.</p>
                </div>
                <div className={styles.flexBottom}>
                    <a href="" className={styles.iconContainer}>
                        <Image src="/logo-facebook.svg" alt="Facebook Icon" width={20} height={20} />
                    </a>
                    <a href="" className={styles.iconContainer}>
                        <Image src="/logo-twitter.svg" alt="Facebook Icon" width={20} height={20} />
                    </a>
                    <a href="" className={styles.iconContainerRight}>
                        <Image src="/logo-instagram.svg" alt="Facebook Icon" width={20} height={20} />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer