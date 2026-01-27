'use client';

import { useLanguage } from '@/lib/LanguageContext';
import styles from './LanguageSwitcher.module.css';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      className={styles.languageButton}
      onClick={() => setLanguage(language === 'de' ? 'fr' : 'de')}
      aria-label="Change language"
    >
      {language === 'de' ? 'FR' : 'DE'}
    </button>
  );
}
