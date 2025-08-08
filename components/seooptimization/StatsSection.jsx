// components/StatsSection.js
import React from 'react';
import styles from './css/StatsSection.module.css';

const StatsSection = () => {
  return (
    <section className={styles.statsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Over <span className={styles.highlight}>99,000</span> Searches On Google</h2>
          <p className={styles.subtitle}>Every <span className={styles.highlight}>Second</span></p>
          <p className={styles.description}>
            Numbers like these, powered by statistics, help to explain how SEO influences the international traffic
            of users on SEAP. We have this fact clear and help our clients by providing the necessary skill set and
            the best strategies.
          </p>
        </div>

        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>75%</span>
            <div className={styles.statBar}></div>
            <p className={styles.statDescription}>
              During web browsing, users don't move beyond page one of search results.
            </p>
          </div>

          <div className={styles.statItem}>
            <span className={styles.statNumber}>19x</span>
            <div className={styles.statBar}></div>
            <p className={styles.statDescription}>
              More clicks that go to the top organic result than the top paid result.
            </p>
          </div>

          <div className={styles.statItem}>
            <span className={styles.statNumber}>68.7%</span>
            <div className={styles.statBar}></div>
            <p className={styles.statDescription}>
              Clicks are received by Google's top three organic search results from the overall results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;