'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import styles from './Footer.module.css';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerMain}>
        <div className={styles.footerContent}>
          <div className={styles.footerGrid}>
            <div className={styles.footerBrand}>
              <Image
                src="/images/logo.png"
                alt="K. Frantz"
                width={120}
                height={40}
                className={styles.logoImage}
              />
              <span className={styles.tagline}>{t.footer.tagline}</span>
            </div>
            
            <div className={styles.footerContact}>
              <h4 className={styles.footerHeading}>{t.footer.contact}</h4>
              <p>Spieser Straße 119</p>
              <p>66538 Neunkirchen</p>
              <p className={styles.contactLink}>
                <a href="tel:068218091">06821 80 91</a>
              </p>
              <p className={styles.contactLink}>
                <a href="mailto:info@frantz-gmbh.de">info@frantz-gmbh.de</a>
              </p>
            </div>
            
            <div className={styles.footerLinks}>
              <h4 className={styles.footerHeading}>{t.footer.services}</h4>
              <Link href="/heizungsbau">{t.nav.heizungsbau}</Link>
              <Link href="/baeder">{t.nav.baeder}</Link>
              <Link href="/gas-wasser-installation">{t.nav.gasWasser}</Link>
              <Link href="/versicherungsschaeden">{t.nav.versicherungsschaeden}</Link>
            </div>
            
            <div className={styles.footerLinks}>
              <h4 className={styles.footerHeading}>{t.footer.legal}</h4>
              <Link href="/impressum">{t.footer.impressum}</Link>
              <Link href="/datenschutz">{t.footer.datenschutz}</Link>
              <Link href="/bildnachweise">{t.footer.bildnachweise}</Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <div className={styles.footerContent}>
          <p>© {new Date().getFullYear()} K. Frantz GmbH. {t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
