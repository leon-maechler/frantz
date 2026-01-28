'use client';

import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';
import styles from './page.module.css';

export default function Baeder() {
  const { t } = useLanguage();

  return (
    <div className={styles.page}>
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <Image
            src="/images/baeder-header.png"
            alt={t.baeder.heroAlt}
            fill
            priority
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.heroTag}>{t.home.servicesTag}</span>
          <h1 className={styles.heroTitle}>{t.baeder.title}</h1>
          <p className={styles.heroSubtitle}>
            {t.baeder.subtitle}
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            <div className={styles.mainContent}>
              <p className={styles.paragraph}>
                {t.baeder.intro1}
              </p>
              
              <p className={styles.paragraph}>
                {t.baeder.intro2}
              </p>
              
              <p className={styles.paragraph}>
                {t.baeder.intro3}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.tourSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>{t.baeder.tourTag}</span>
            <h2 className={styles.sectionTitle}>{t.baeder.tourTitle}</h2>
            <p className={styles.sectionSubtitle}>{t.baeder.tourSubtitle}</p>
          </div>
          
          <div className={styles.tourGrid}>
            <div className={styles.tourEmbed}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!4v1769507585198!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ0dzdWJQYnc.!2m2!1d49.32901076502966!2d7.167419646840028!3f300!4f0!5f0.7820865974627469"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="360° Showroom Tour"
              />
            </div>
            <div className={styles.tourEmbed}>
              <iframe
                src="https://www.youtube.com/embed/vLbv8Bi150U"
                width="100%"
                height="100%"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={t.baeder.videoTour}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactCard}>
            <div className={styles.contactInfo}>
              <p className={styles.contactTitle}>{t.baeder.contactTitle}</p>
              <h3 className={styles.contactName}>{t.baeder.contactName}</h3>
              <p className={styles.contactRole}>{t.baeder.contactRole}</p>
              
              <div className={styles.contactDetails}>
                <a href="mailto:u.frantz-fuchs@frantz-gmbh.de" className={styles.contactLink}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  u.frantz-fuchs@frantz-gmbh.de
                </a>
                <a href="tel:068212071574" className={styles.contactLink}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  06821 207 15 74
                </a>
              </div>
            </div>
            
            <div className={styles.exhibitionInfo}>
              <h4 className={styles.exhibitionTitle}>{t.baeder.exhibitionTitle}</h4>
              <p className={styles.exhibitionAddress}>
                Spieser Straße 119<br/>
                66538 Neunkirchen
              </p>
              <div className={styles.exhibitionHours}>
                <p><strong>{t.baeder.monThu}</strong> {t.baeder.monThuHours}</p>
                <p><strong>{t.baeder.fri}</strong> {t.baeder.friHours}</p>
                <p><strong>{t.baeder.sat}</strong> {t.baeder.satHours}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.partnersSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>{t.baeder.partnersTag}</span>
            <h2 className={styles.sectionTitle}>{t.baeder.partnersTitle}</h2>
          </div>
          <div className={styles.logosWrapper}>
            <Image
              src="/images/baeder-logos.png"
              alt={t.baeder.partnersTitle}
              width={1200}
              height={300}
              className={styles.logosImage}
            />
          </div>
          
          <div className={styles.partnerLinks}>
            <a
              href="https://www.elements-show.de/neunkirchen"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.partnerLink}
            >
              Elements Neunkirchen
            </a>
            <a
              href="https://www.pfeiffer-may.de"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.partnerLink}
            >
              Pfeiffer & Mai
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
