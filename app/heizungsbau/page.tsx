'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import styles from './page.module.css';

export default function Heizungsbau() {
  const { t } = useLanguage();

  return (
    <div className={styles.page}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <span className={styles.heroTag}>Unsere Leistungen</span>
          <h1 className={styles.heroTitle}>{t.heizungsbau.title}</h1>
          <p className={styles.heroSubtitle}>
            Effiziente Heizungsanlagen für nachhaltiges Wohnen und eine bessere Umwelt
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            <div className={styles.mainContent}>
              <p className={styles.paragraph}>
                {t.heizungsbau.intro}
              </p>
              
              <p className={styles.paragraph}>
                {t.heizungsbau.paragraph1}
              </p>
              
              <p className={styles.paragraph}>
                {t.heizungsbau.paragraph2}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.rentalSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Neu</span>
            <h2 className={styles.sectionTitle}>{t.heizungsbau.neuMieten}</h2>
          </div>
          
          <div className={styles.stepsGrid}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3 className={styles.stepTitle}>{t.heizungsbau.beratung}</h3>
              <p className={styles.stepText}>{t.heizungsbau.beratungText}</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3 className={styles.stepTitle}>{t.heizungsbau.errechnungMonatsrate}</h3>
              <p className={styles.stepText}>{t.heizungsbau.errechnungMonatsrateText}</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3 className={styles.stepTitle}>{t.heizungsbau.montage}</h3>
              <p className={styles.stepText}>{t.heizungsbau.montageText}</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>4</div>
              <h3 className={styles.stepTitle}>{t.heizungsbau.waermeLieferung}</h3>
              <p className={styles.stepText}>{t.heizungsbau.waermeLieferungText}</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactCard}>
            <div className={styles.contactInfo}>
              <p className={styles.contactTitle}>{t.heizungsbau.ihreAnsprechpartner}</p>
              <h3 className={styles.contactName}>Andrej Maier</h3>
              <p className={styles.contactRole}>{t.heizungsbau.geschaeftsfuehrung}</p>
              <p className={styles.contactRole}>{t.heizungsbau.installationsHeizungsbaumeister}</p>
              <p className={styles.contactRole}>{t.heizungsbau.gepruefterEnergieberater}</p>
              
              <div className={styles.contactDetails}>
                <a href="mailto:a.maier@frantz-gmbh.de" className={styles.contactLink}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  a.maier@frantz-gmbh.de
                </a>
                <a href="tel:068212071573" className={styles.contactLink}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  06821 207 15 73
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
