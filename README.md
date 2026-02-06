# K. Frantz GmbH – Website

Offizielle Website der K. Frantz GmbH (Heizung & Sanitär, Neunkirchen).  
Technologie: **Next.js 14** (App Router), **React 18**, **TypeScript**, **CSS Modules**.  
Die Seite ist **mehrsprachig** (Deutsch, Französisch, Englisch).

---

## Inhaltsverzeichnis

1. [Schnellstart](#schnellstart)
2. [Projektstruktur](#projektstruktur)
3. [Änderungen vornehmen](#änderungen-vornehmen)
4. [Texte und Übersetzungen](#texte-und-übersetzungen)
5. [Bilder](#bilder)
6. [Neue Seite anlegen](#neue-seite-anlegen)
7. [Build und Deployment](#build-und-deployment)
8. [Technische Details](#technische-details)

---

## Schnellstart

**Voraussetzungen:** Node.js 18+ (empfohlen: LTS), npm.

```bash
# Repository klonen (falls noch nicht geschehen)
git clone <REPO-URL>
cd frantz

# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten (läuft unter http://localhost:3000)
npm run dev
```

Im Browser [http://localhost:3000](http://localhost:3000) öffnen. Änderungen an Code/CSS werden automatisch neu geladen.

---

## Projektstruktur

```
frantz/
├── app/                    # Seiten (Next.js App Router)
│   ├── layout.tsx          # Wurzel-Layout: Header, Navigation, Footer
│   ├── page.tsx            # Startseite
│   ├── page.module.css
│   ├── baeder/             # Seite /baeder
│   ├── bildnachweise/      # Seite /bildnachweise
│   ├── datenschutz/        # Seite /datenschutz
│   ├── gas-wasser-installation/
│   ├── heizungsbau/
│   ├── impressum/
│   ├── kontakt/
│   └── versicherungsschaeden/
├── components/             # Wiederverwendbare React-Komponenten
│   ├── Banner.tsx
│   ├── ContactBar.tsx
│   ├── Footer.tsx
│   ├── GoogleMap.tsx
│   ├── Header.tsx
│   ├── LanguageSwitcher.tsx
│   └── Navigation.tsx
├── lib/                    # Logik und Konfiguration
│   ├── LanguageContext.tsx # Mehrsprachigkeit (DE/FR/EN)
│   └── translations/
│       ├── de.ts           # Deutsche Texte
│       ├── en.ts           # Englische Texte
│       └── fr.ts           # Französische Texte
├── public/
│   └── images/             # Statische Bilder (z. B. für Seiten/Header)
├── styles/
│   └── globals.css         # Globale CSS-Variablen und Basis-Styles
├── next.config.js
├── package.json
└── tsconfig.json
```

- **Seiten:** Jede URL entspricht einem Ordner unter `app/` mit `page.tsx` (und optional `page.module.css`).
- **Layout:** `app/layout.tsx` umschließt alle Seiten mit Header, Navigation und Footer.
- **Komponenten:** Liegen in `components/`, werden mit `@/components/...` importiert.
- **Übersetzungen:** Alle sichtbaren Texte kommen aus `lib/translations/` (siehe unten).

---

## Änderungen vornehmen

### Nur Texte ändern

- Texte **nicht** direkt in den TSX-Dateien anpassen.
- Änderungen in **`lib/translations/de.ts`** (Deutsch), **`en.ts`** (Englisch) und **`fr.ts`** (Französisch) vornehmen.
- Struktur der Objekte (z. B. `home.servicesTitle`, `nav.kontakt`) beibehalten, damit der Code nicht bricht.
- Nach dem Speichern die Seite im Browser prüfen (bei laufendem `npm run dev` reicht oft ein Reload).

### Layout / Navigation

- **Navigation:** Links und Labels in `components/Navigation.tsx` (Labels kommen aus den Übersetzungen, siehe `t.nav.*`).
- **Header/Footer:** `components/Header.tsx` und `components/Footer.tsx`.
- **Globales Aussehen:** `styles/globals.css` und die jeweiligen `*.module.css` in `app/` bzw. `components/`.

### Einzelne Seite anpassen

- Gewünschte Seite unter `app/<seitenname>/` finden (z. B. `app/kontakt/page.tsx`).
- Inhalt in `page.tsx` anpassen; Texte möglichst über `useLanguage()` und `t.*` aus den Übersetzungsdateien verwenden.
- Styles in der zugehörigen `page.module.css` anpassen.

---

## Texte und Übersetzungen

- **Sprachen:** Deutsch (Standard), Französisch, Englisch.
- **Speicherorte:**  
  - `lib/translations/de.ts`  
  - `lib/translations/fr.ts`  
  - `lib/translations/en.ts`
- **Verwendung im Code:** In Komponenten `'use client';` und dann:
  - `import { useLanguage } from '@/lib/LanguageContext';`
  - `const { t } = useLanguage();`
  - Texte z. B. mit `t.home.servicesTitle` oder `t.nav.kontakt`.
- **Neuer Text:**  
  - In allen drei Dateien (`de.ts`, `fr.ts`, `en.ts`) den gleichen Schlüssel anlegen (z. B. unter `home` oder einem anderen Bereich), damit keine Sprache fehlt.

---

## Bilder

- **Ablage:** Alle statischen Bilder liegen in **`public/images/`**.
- **Einbindung:** Über Pfad ab Root, z. B. `/images/logo.png`, oder mit der Next.js Komponente:
  - `import Image from 'next/image';`
  - `<Image src="/images/dateiname.png" alt="..." width={...} height={...} />`
- Neue Bilder einfach in `public/images/` ablegen und wie oben referenzieren.

---

## Neue Seite anlegen

1. Unter `app/` einen neuen Ordner anlegen, z. B. `app/meine-seite/`.
2. Darin `page.tsx` (und optional `page.module.css`) anlegen.
3. Die URL lautet dann automatisch: `/<ordnername>` (z. B. `/meine-seite`).
4. Falls die Seite in der Navigation erscheinen soll: In `components/Navigation.tsx` einen Eintrag in `navItems` ergänzen und in `lib/translations/de.ts` (sowie `en.ts`, `fr.ts`) einen passenden Schlüssel für das Menü-Label hinzufügen.

---

## Build und Deployment

```bash
# Produktions-Build erzeugen
npm run build

# Produktions-Server lokal starten (optional, z. B. zum Testen)
npm start
```

- Für Deployment den **Build** auf dem Server bzw. in der CI/CD-Pipeline ausführen (`npm run build`).
- Anschließend die Next.js-App starten (`npm start`) oder in der Hosting-Dokumentation (z. B. Vercel, Docker, eigener Node-Server) nach der empfohlenen Methode für Next.js vorgehen.
- **Umgebungsvariablen:** Aktuell keine Pflicht; falls später z. B. API-Keys oder andere Konfiguration hinzukommen, in der Deployment-Doku des Anbieters hinterlegen.

---

## Technische Details

| Thema        | Details |
|-------------|--------|
| Framework   | Next.js 14 (App Router) |
| Sprache     | TypeScript |
| Styling     | CSS Modules (`.module.css`) + `globals.css` |
| Mehrsprache | React Context (`LanguageContext`), Texte in `lib/translations/` |
| Linting     | ESLint (Next.js-Konfiguration), Aufruf: `npm run lint` |

Bei Fragen zum Codeaufbau oder zu Änderungswünschen bitte die zuständigen Ansprechpartner im Projekt kontaktieren oder ein Issue im Repository anlegen.
