'use client';

import { useLanguage } from '@/lib/LanguageContext';
import styles from './page.module.css';

export default function Kontakt() {
  const { t } = useLanguage();

  return (
    <div className={styles.page}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <span className={styles.heroTag}>{t.kontakt.title}</span>
          <h1 className={styles.heroTitle}>{t.kontakt.title}</h1>
          <p className={styles.heroSubtitle}>
            {t.kontakt.heroSubtitle}
          </p>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            <div className={styles.contactCard}>
              <div className={styles.cardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h3 className={styles.cardTitle}>{t.kontakt.address}</h3>
              <div className={styles.cardContent}>
                <p>K. Frantz GmbH</p>
                <p>Spieser Str. 119</p>
                <p>66538 Neunkirchen</p>
              </div>
            </div>
            
            <div className={styles.contactCard}>
              <div className={styles.cardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <h3 className={styles.cardTitle}>{t.kontakt.phone}</h3>
              <div className={styles.cardContent}>
                <a href="tel:068218091" className={styles.contactLink}>06821-8091</a>
                <p className={styles.note}>{t.kontakt.appointmentsNote}</p>
              </div>
            </div>
            
            <div className={styles.contactCard}>
              <div className={styles.cardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <h3 className={styles.cardTitle}>{t.kontakt.email}</h3>
              <div className={styles.cardContent}>
                <a href="mailto:info@frantz-gmbh.de" className={styles.contactLink}>info@frantz-gmbh.de</a>
                <p className={styles.note}>{t.kontakt.responseNote}</p>
              </div>
            </div>
          </div>
          
          <div className={styles.hoursCard}>
            <h3 className={styles.hoursTitle}>{t.kontakt.openingHours}</h3>
            <div className={styles.hoursGrid}>
              <div className={styles.hoursRow}>
                <span className={styles.day}>{t.kontakt.monThu}</span>
                <span className={styles.time}>09:00 – 12:00 & 14:00 – 17:00</span>
              </div>
              <div className={styles.hoursRow}>
                <span className={styles.day}>{t.kontakt.fri}</span>
                <span className={styles.time}>09:00 – 12:00 & 14:00 – 16:00</span>
              </div>
              <div className={styles.hoursRow}>
                <span className={styles.day}>{t.kontakt.sat}</span>
                <span className={styles.time}>{t.kontakt.byAppointment}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
