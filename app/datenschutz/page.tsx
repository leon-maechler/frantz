'use client';

import { useLanguage } from '@/lib/LanguageContext';
import styles from './page.module.css';

export default function Datenschutz() {
  const { t } = useLanguage();

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>{t.footer.datenschutz}</h1>
        <div className={styles.content}>
          <p>{t.placeholder.pageInAufbau}</p>
        </div>
      </div>
    </div>
  );
}
