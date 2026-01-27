'use client';

import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';
import styles from './page.module.css';

export default function GasWasserInstallation() {
  const { t } = useLanguage();

  return (
    <div className={styles.page}>
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <Image
            src="/images/gas-wasser-header.png"
            alt="Gas-Wasser-Installation"
            fill
            priority
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.heroTag}>Unsere Leistungen</span>
          <h1 className={styles.heroTitle}>Gas & Wasser</h1>
          <p className={styles.heroSubtitle}>
            Sichere Versorgung mit frischem Trinkwasser und zuverlässige Gasinstallation
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.introText}>
            <p className={styles.paragraph}>
              Wasser ist unser Lebensmittel Nummer eins. Eine sichere Versorgung mit frischem Trinkwasser ist deshalb ein absolutes Muss, egal ob im Neubau oder in der Renovierung.
            </p>
          </div>
          
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3 className={styles.serviceTitle}>Zertifizierter Fachbetrieb</h3>
              <p className={styles.serviceDesc}>Zugelassen nach Wasserrecht §62 AwSV</p>
            </div>
            
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                </svg>
              </div>
              <h3 className={styles.serviceTitle}>Reparaturen</h3>
              <p className={styles.serviceDesc}>Rohrleitungs- und Gasleitungsschäden</p>
            </div>
            
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <h3 className={styles.serviceTitle}>Neuinstallation</h3>
              <p className={styles.serviceDesc}>Änderungen und Neuerungen von Rohrleitungen</p>
            </div>
            
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <path d="M3 9h18M9 21V9"/>
                </svg>
              </div>
              <h3 className={styles.serviceTitle}>Zählereinbau</h3>
              <p className={styles.serviceDesc}>Wasser- und Wärmemengenzähler</p>
            </div>
            
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h3 className={styles.serviceTitle}>Qualität</h3>
              <p className={styles.serviceDesc}>Nur hochwertige, geprüfte Materialien</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactCard}>
            <div className={styles.contactInfo}>
              <p className={styles.contactTitle}>Ihr Ansprechpartner</p>
              <h3 className={styles.contactName}>Andrej Maier</h3>
              <p className={styles.contactRole}>Geschäftsführung</p>
              <p className={styles.contactRole}>Installations- & Heizungsbaumeister</p>
              <p className={styles.contactRole}>geprüfter Energieberater (HWK)</p>
              
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

      <section className={styles.partnersSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Qualität</span>
            <h2 className={styles.sectionTitle}>Unsere Partner</h2>
          </div>
          <div className={styles.logosWrapper}>
            <Image
              src="/images/gas-wasser-logos.png"
              alt="Unsere Partner"
              width={1200}
              height={150}
              className={styles.logosImage}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
