'use client';

import { useLanguage } from '@/lib/LanguageContext';
import styles from './page.module.css';

export default function Bildnachweise() {
  const { t } = useLanguage();

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>{t.footer.bildnachweise}</h1>
        <div className={styles.content}>
          <p>{t.placeholder.pageInAufbau}</p>
        </div>
      </div>
    </div>
  );
}
