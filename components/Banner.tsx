'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import styles from './Banner.module.css';

export default function Banner() {
  const { t } = useLanguage();

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
          {t.hero.title1}<br />
          <span className={styles.heroHighlight}>{t.hero.title2}</span>
        </h1>
        <p className={styles.heroSubtitle}>
          {t.hero.subtitle}
        </p>
        <div className={styles.heroCTA}>
          <Link href="/kontakt" className={styles.primaryButton}>
            {t.hero.contactButton}
            <svg className={styles.buttonIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
          <Link href="/baeder" className={styles.secondaryButton}>
            {t.hero.exhibitionButton}
          </Link>
        </div>
      </div>
      
      <div className={styles.heroStats}>
        <div className={styles.stat}>
          <span className={styles.statNumber}>150+</span>
          <span className={styles.statLabel}>{t.hero.yearsExperience}</span>
        </div>
        <div className={styles.statDivider} />
        <div className={styles.stat}>
          <span className={styles.statNumber}>100%</span>
          <span className={styles.statLabel}>{t.hero.qualityProducts}</span>
        </div>
        <div className={styles.statDivider} />
        <div className={styles.stat}>
          <span className={styles.statNumber}>24/7</span>
          <span className={styles.statLabel}>{t.hero.emergency}</span>
        </div>
      </div>
    </div>
  );
}
