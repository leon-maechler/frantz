'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { useEffect } from 'react';

export default function HtmlLang() {
  try {
    const { language } = useLanguage();

    useEffect(() => {
      if (typeof document !== 'undefined') {
        document.documentElement.lang = language === 'fr' ? 'fr' : 'de';
      }
    }, [language]);

    return null;
  } catch {
    return null;
  }
}
