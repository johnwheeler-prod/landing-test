import styles from '../styles/CTA.module.css'

function CTA() {
    return (
        <div className={styles.CTA}>
            <div className={styles.flex}>
                <h2>Ready to start? <br/><span className={styles.orangeText}>Sign up for free today.</span></h2>
                <div className={styles.btnContainer}>
                    <button className={styles.btnMain}>Try it free</button>
                    <button className={styles.btnSecondary}>Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default CTA
