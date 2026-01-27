'use client';

import styles from './GoogleMap.module.css';

export default function GoogleMap() {
  const address = 'Spieser Str. 119, 66538 Neunkirchen, Germany';
  const encodedAddress = encodeURIComponent(address);
  const mapUrl = `https://www.google.com/maps?q=${encodedAddress}&output=embed`;

  return (
    <div className={styles.mapContainer}>
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={styles.map}
        title="K. Frantz GmbH Standort"
      />
      <div className={styles.mapOverlay}>
        <a 
          href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.mapLink}
        >
          Auf Google Maps öffnen
        </a>
      </div>
    </div>
  );
}
