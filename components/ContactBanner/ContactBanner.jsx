
import styles from './css/ContactBanner.module.css';

export default function ContactBanner() {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.banner}>
        <h2 className={styles.bannerTitle}>Contact Us</h2>
        <p className={styles.bannerText}>We'd love to hear from you!</p>
      </div>
    </div>
  );
}