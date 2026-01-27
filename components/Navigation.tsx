'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/lib/LanguageContext';
import styles from './Navigation.module.css';

export default function Navigation() {
  const pathname = usePathname();
  const { t } = useLanguage();

  const navItems = [
    { href: '/', label: t.nav.start },
    { href: '/versicherungsschaeden', label: t.nav.versicherungsschaeden },
    { href: '/heizungsbau', label: t.nav.heizungsbau },
    { href: '/baeder', label: t.nav.baeder },
    { href: '/gas-wasser-installation', label: t.nav.gasWasser },
    { href: '/kontakt', label: t.nav.kontakt },
  ];

  return (
    <nav className={styles.navigation}>
      <div className={styles.navContainer}>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`${styles.navLink} ${pathname === item.href ? styles.active : ''}`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
