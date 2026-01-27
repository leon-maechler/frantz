import type { Metadata } from 'next';
import { LanguageProvider } from '@/lib/LanguageContext';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'K. Frantz GmbH - Heizung & Sanitär',
  description: 'K. Frantz GmbH - Ihr Fachbetrieb für Heizungsbau, Sanitär und Gas-Wasser-Installation in Neunkirchen',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        <LanguageProvider>
          <Header />
          <Navigation />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
