'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './Banner.module.css';

export default function Banner() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroBackground}>
        <Image
          src="/images/hero.png"
          alt="K. Frantz GmbH Gebäude"
          fill
          priority
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay} />
      </div>
      
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Ihr Experte für<br />
          <span className={styles.heroHighlight}>Heizung & Sanitär</span>
        </h1>
        <p className={styles.heroSubtitle}>
          Fachbetrieb der Landesinnung Saarland für energiesparende Heizungsanlagen und moderne Badezimmer
        </p>
        <div className={styles.heroCTA}>
          <Link href="/kontakt" className={styles.primaryButton}>
            Kontakt aufnehmen
            <svg className={styles.buttonIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
          <Link href="/baeder" className={styles.secondaryButton}>
            Ausstellung besuchen
          </Link>
        </div>
      </div>
      
      <div className={styles.heroStats}>
        <div className={styles.stat}>
          <span className={styles.statNumber}>150+</span>
          <span className={styles.statLabel}>Jahre Erfahrung</span>
        </div>
        <div className={styles.statDivider} />
        <div className={styles.stat}>
          <span className={styles.statNumber}>100%</span>
          <span className={styles.statLabel}>Qualitätsprodukte</span>
        </div>
        <div className={styles.statDivider} />
        <div className={styles.stat}>
          <span className={styles.statNumber}>24/7</span>
          <span className={styles.statLabel}>Notdienst</span>
        </div>
      </div>
    </div>
  );
}
