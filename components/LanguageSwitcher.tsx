'use client';

import { useLanguage } from '@/lib/LanguageContext';
import styles from './LanguageSwitcher.module.css';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={styles.switcher}>
      <button
        className={`${styles.langButton} ${language === 'de' ? styles.active : ''}`}
        onClick={() => setLanguage('de')}
        title="Deutsch"
      >
        DE
      </button>
      <button
        className={`${styles.langButton} ${language === 'fr' ? styles.active : ''}`}
        onClick={() => setLanguage('fr')}
        title="Français"
      >
        FR
      </button>
      <button
        className={`${styles.langButton} ${language === 'en' ? styles.active : ''}`}
        onClick={() => setLanguage('en')}
        title="English"
      >
        EN
      </button>
    </div>
  );
}
