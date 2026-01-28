'use client';

import { useLanguage } from '@/lib/LanguageContext';
import styles from './page.module.css';

export default function Versicherungsschaeden() {
  const { t } = useLanguage();

  return (
    <div className={styles.page}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <span className={styles.heroTag}>{t.versicherungsschaeden.title}</span>
          <h1 className={styles.heroTitle}>{t.versicherungsschaeden.title}</h1>
          <p className={styles.heroSubtitle}>
            {t.versicherungsschaeden.heroSubtitle}
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.introCard}>
            <h2 className={styles.cardTitle}>{t.versicherungsschaeden.richtigesVorgehen}</h2>
            <p className={styles.paragraph}>{t.versicherungsschaeden.richtigesVorgehenText}</p>
            <p className={styles.paragraph}>{t.versicherungsschaeden.versicherungInfo}</p>
            <p className={styles.paragraph}>{t.versicherungsschaeden.versicherungSofort}</p>
            <p className={styles.paragraph}>{t.versicherungsschaeden.versicherungGutachter}</p>
            <p className={styles.paragraph}>{t.versicherungsschaeden.sachverstaendiger}</p>
            <p className={styles.paragraph}>{t.versicherungsschaeden.servicefirma}</p>
          </div>
        </div>
      </section>

      <section className={styles.technicalSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>{t.versicherungsschaeden.technischeEmpfehlung}</span>
            <h2 className={styles.sectionTitle}>{t.versicherungsschaeden.technischeEmpfehlung}</h2>
          </div>
          
          <div className={styles.damageGrid}>
            <div className={styles.damageCard}>
              <div className={styles.damageIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </div>
              <h3 className={styles.damageTitle}>{t.versicherungsschaeden.blitzUeberspannung}</h3>
              <p className={styles.paragraph}>{t.versicherungsschaeden.blitzText1}</p>
              <p className={styles.highlightText}>{t.versicherungsschaeden.blitzText2}</p>
              <p className={styles.highlightText}>{t.versicherungsschaeden.blitzGrund}</p>
              <p className={styles.paragraph}>{t.versicherungsschaeden.blitzText3}</p>
              
              <div className={styles.protectionBox}>
                <h4 className={styles.protectionTitle}>{t.versicherungsschaeden.blitzschutzMassnahmen}</h4>
                <p className={styles.paragraph}>{t.versicherungsschaeden.blitzschutzText}</p>
                <ul className={styles.protectionList}>
                  <li>{t.versicherungsschaeden.blitzschutz1}</li>
                  <li>{t.versicherungsschaeden.blitzschutz2}</li>
                  <li>{t.versicherungsschaeden.blitzschutz3}</li>
                </ul>
                <p className={styles.noteText}>{t.versicherungsschaeden.blitzschutzHinweis}</p>
              </div>
            </div>

            <div className={styles.damageCard}>
              <div className={styles.damageIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
                </svg>
              </div>
              <h3 className={styles.damageTitle}>{t.versicherungsschaeden.wasserschaeden}</h3>
              <p className={styles.paragraph}>{t.versicherungsschaeden.wasserText}</p>
              <p className={styles.paragraph}>{t.versicherungsschaeden.wasserText2}</p>
              <p className={styles.highlightText}>{t.versicherungsschaeden.wasserEmpfehlung}</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <p className={styles.ctaText}>{t.versicherungsschaeden.abrechnung}</p>
          </div>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactCard}>
            <div className={styles.contactInfo}>
              <p className={styles.contactTitle}>{t.versicherungsschaeden.ihreAnsprechpartner}</p>
              <h3 className={styles.contactName}>Andrej Maier</h3>
              <p className={styles.contactRole}>{t.versicherungsschaeden.geschaeftsfuehrung}</p>
              <p className={styles.contactRole}>{t.versicherungsschaeden.installationsHeizungsbaumeister}</p>
              <p className={styles.contactRole}>{t.versicherungsschaeden.gepruefterEnergieberater}</p>
              
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
