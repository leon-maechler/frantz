'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
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
              <span className={styles.tagline}>Heizung & Sanitär seit 1870</span>
            </div>
            
            <div className={styles.footerContact}>
              <h4 className={styles.footerHeading}>Kontakt</h4>
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
              <h4 className={styles.footerHeading}>Leistungen</h4>
              <Link href="/heizungsbau">Heizungsbau</Link>
              <Link href="/baeder">Bäder</Link>
              <Link href="/gas-wasser-installation">Gas & Wasser</Link>
              <Link href="/versicherungsschaeden">Versicherungsschäden</Link>
            </div>
            
            <div className={styles.footerLinks}>
              <h4 className={styles.footerHeading}>Rechtliches</h4>
              <Link href="/impressum">Impressum</Link>
              <Link href="/datenschutz">Datenschutz</Link>
              <Link href="/bildnachweise">Bildnachweise</Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <div className={styles.footerContent}>
          <p>© {new Date().getFullYear()} K. Frantz GmbH. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
