'use client';

import styles from './ContactBar.module.css';

export default function ContactBar() {
  return (
    <div className={styles.contactBar}>
      <div className={styles.contactContent}>
        <div className={styles.address}>
          K. Frantz GmbH | Spieser Str. 119 | 66538 Neunkirchen
        </div>
        <div className={styles.contact}>
          <a href="tel:068218091">Tel. 06821 80 91</a>
          {' | '}
          <a href="mailto:info@frantz-gmbh.de">eMail info@frantz-gmbh.de</a>
          {' | '}
          <a href="https://www.frantz-gmbh.de" target="_blank" rel="noopener noreferrer">www.frantz-gmbh.de</a>
        </div>
      </div>
    </div>
  );
}
