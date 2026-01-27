'use client';

import Banner from '@/components/Banner';
import GoogleMap from '@/components/GoogleMap';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <Banner />

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Unsere Leistungen</span>
            <h2 className={styles.sectionTitle}>
              Alles aus einer Hand
            </h2>
            <p className={styles.sectionSubtitle}>
              Wir arbeiten ausschließlich mit geprüften Markenprodukten für langfristige Sicherheit und Zufriedenheit.
            </p>
          </div>
          
          <div className={styles.serviceCards}>
            <Link href="/heizungsbau" className={styles.serviceCard}>
              <div className={styles.serviceImageWrapper}>
                <Image
                  src="/images/heizungsbau.png"
                  alt="Heizungsbau"
                  width={400}
                  height={300}
                  className={styles.serviceImage}
                />
                <div className={styles.serviceOverlay} />
              </div>
              <div className={styles.serviceContent}>
                <h3 className={styles.serviceTitle}>Heizungsbau</h3>
                <p className={styles.serviceDesc}>Effiziente Heizungsanlagen für nachhaltiges Wohnen</p>
                <span className={styles.serviceLink}>
                  Mehr erfahren
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </div>
            </Link>
            
            <Link href="/gas-wasser-installation" className={styles.serviceCard}>
              <div className={styles.serviceImageWrapper}>
                <Image
                  src="/images/gas-wasser.png"
                  alt="Gas- /Wasserinstallation"
                  width={400}
                  height={300}
                  className={styles.serviceImage}
                />
                <div className={styles.serviceOverlay} />
              </div>
              <div className={styles.serviceContent}>
                <h3 className={styles.serviceTitle}>Gas & Wasser</h3>
                <p className={styles.serviceDesc}>Sichere Installation und Wartung Ihrer Leitungen</p>
                <span className={styles.serviceLink}>
                  Mehr erfahren
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </div>
            </Link>
            
            <Link href="/baeder" className={styles.serviceCard}>
              <div className={styles.serviceImageWrapper}>
                <Image
                  src="/images/baeder.png"
                  alt="Bäder"
                  width={400}
                  height={300}
                  className={styles.serviceImage}
                />
                <div className={styles.serviceOverlay} />
              </div>
              <div className={styles.serviceContent}>
                <h3 className={styles.serviceTitle}>Bäder</h3>
                <p className={styles.serviceDesc}>Traumhafte Badezimmer mit 3D-Planung</p>
                <span className={styles.serviceLink}>
                  Mehr erfahren
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className={styles.whyUsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Warum wir?</span>
            <h2 className={styles.sectionTitle}>
              Kundenservice, der überzeugt
            </h2>
          </div>
          
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3 className={styles.featureTitle}>Kundendienst</h3>
              <p className={styles.featureDesc}>
                Wartungs- und Reparaturservice für alle von uns installierten Anlagen. Bei dringenden Störfällen auch außerhalb der Geschäftszeiten erreichbar.
              </p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 7h-9M14 17H5M17 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM7 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>
                </svg>
              </div>
              <h3 className={styles.featureTitle}>Ersatzteilservice</h3>
              <p className={styles.featureDesc}>
                Umfangreiches Ersatzteillager mit allen wichtigen Teilen für Heizung und Sanitär. Schnellste Beschaffung garantiert.
              </p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <h3 className={styles.featureTitle}>Beratung vor Ort</h3>
              <p className={styles.featureDesc}>
                Individuelle Beratung in unserer Ausstellung für Bäder und Heizungsanlagen. Vereinbaren Sie einen Termin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Tour Section */}
      <section className={styles.tourSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Erleben Sie uns</span>
            <h2 className={styles.sectionTitle}>
              Virtuelle Tour
            </h2>
            <p className={styles.sectionSubtitle}>
              Entdecken Sie unsere Ausstellung und unser Gebäude in 360°
            </p>
          </div>
          
          <div className={styles.tourGrid}>
            <div className={styles.tourEmbed}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!4v1769507585198!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ0dzdWJQYnc.!2m2!1d49.32901076502966!2d7.167419646840028!3f300!4f0!5f0.7820865974627469"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="360° Showroom Tour"
              />
            </div>
            <div className={styles.tourEmbed}>
              <iframe
                src="https://www.youtube.com/embed/vLbv8Bi150U"
                width="100%"
                height="100%"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="360° Video Tour"
              />
            </div>
          </div>
          
          <div className={styles.tourLinks}>
            <a
              href="https://www.google.de/maps/@49.3291027,7.1669104,3a,75y,146.96h,96.51t/data=!3m7!1e1!3m5!1sAF1QipP0G2ZF7JVqMCAxrGd1R_2J-8Tj9YpU7k3ciiJY!2e10!3e12!7i11124!8i5562"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.tourLink}
            >
              360° Außenansicht
            </a>
            <a
              href="https://www.google.de/maps/place/K.+Frantz+GmbH/@49.3289459,7.1672649,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipP5panD0_dj774op3po-UooLia5pbiIzcOf4rkP!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipP5panD0_dj774op3po-UooLia5pbiIzcOf4rkP%3Dw203-h135-k-no!7i5625!8i3750!4m5!3m4!1s0x4795c648f68a3243:0x97b37caee89b4faa!8m2!3d49.3289459!4d7.1672649"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.tourLink}
            >
              Alle Touren ansehen
            </a>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Bereit für Ihr Projekt?</h2>
            <p className={styles.ctaSubtitle}>
              Kontaktieren Sie uns für eine unverbindliche Beratung
            </p>
            <div className={styles.ctaButtons}>
              <a href="tel:068218091" className={styles.ctaPrimary}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                06821 80 91
              </a>
              <Link href="/kontakt" className={styles.ctaSecondary}>
                Kontaktformular
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection}>
        <div className={styles.container}>
          <div className={styles.mapHeader}>
            <h2 className={styles.mapTitle}>Besuchen Sie uns</h2>
            <p className={styles.mapAddress}>
              Spieser Straße 119, 66538 Neunkirchen
            </p>
          </div>
          <GoogleMap />
          <div className={styles.openingHours}>
            <p>
              <strong>Öffnungszeiten:</strong> Mo – Do 09:00 – 12:00 & 14:00 – 17:00 Uhr | Fr 09:00 – 12:00 & 14:00 – 16:00 Uhr | Sa nach Vereinbarung
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
