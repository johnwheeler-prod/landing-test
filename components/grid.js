import Image from 'next/image'
import styles from '../styles/Grid.module.css'

function Grid() {
    return (
        <div className={styles.grid}>
            <div className={styles.flex}>
                <div className={styles.flexCardLeft}>   
                    <div className={styles.iconContainer}>
                        <Image src="/icon-f1.svg" alt="Message Bubble" width={48} height={48} />
                    </div>
                    <div className={styles.contentContainer}>
                        <h3>Communicate in realtime</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                    </div>
                </div>
                <div className={styles.flexCardRight}>   
                    <div className={styles.iconContainer}>
                        <Image src="/icon-f2.svg" alt="Rocket Icon" width={48} height={48} />
                    </div>
                    <div className={styles.contentContainer}>
                        <h3>Do your best work</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                    </div>
                </div>
            </div>
            <div className={styles.flex}>
                <div className={styles.flexCardLeft}>   
                    <div className={styles.iconContainer}>
                        <Image src="/icon-f3.svg" alt="Clock Icon" width={48} height={48} />
                    </div>
                    <div className={styles.contentContainer}>
                        <h3>Avoid costly revisions</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                    </div>
                </div>
                <div className={styles.flexCardRight}>   
                    <div className={styles.iconContainer}>
                        <Image src="/icon-f4.svg" alt="Cloud Icon" width={48} height={48} />
                    </div>
                    <div className={styles.contentContainer}>
                        <h3>Everything in one place</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Grid