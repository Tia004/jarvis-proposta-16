import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.venetocase.it'),
  title: 'Veneto Case | Immobili Selezionati in Veneto - Proposta Boutique',
  description:
    'Selezione di immobili residenziali di pregio nelle province di Padova, Venezia e lungo la Riviera del Brenta. Stime di mercato certificate, verifiche catastali e assistenza fino al rogito.',
  keywords: [
    'Veneto Case',
    'immobili selezionati Veneto',
    'agenzia immobiliare Padova',
    'case in vendita Riviera del Brenta',
    'nuove costruzioni classe A4',
    'ville con parco Padova',
    'filiali Veneto Case'
  ],
  authors: [{ name: 'Veneto Case srl' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  openGraph: {
    title: 'Veneto Case | Immobili Selezionati in Veneto',
    description:
      'Pochi immobili, ma giusti: qualità dei contenuti, verifiche tecniche e negoziazione curata fino al rogito notarile.',
    url: 'https://www.venetocase.it/',
    siteName: 'Veneto Case',
    locale: 'it_IT',
    type: 'website',
    images: [
      {
        url: '/images/og_cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Veneto Case - Immobili Selezionati in Veneto'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Veneto Case | Immobili Selezionati in Veneto',
    description:
      'Immobili residenziali e di pregio a Padova, Venezia e Riviera del Brenta con verifiche tecniche certificate.',
    images: ['/images/og_cover.jpg']
  },
  alternates: {
    canonical: 'https://www.venetocase.it/'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const schemaJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Veneto Case',
    legalName: 'Veneto case srl',
    taxID: '04497920282',
    vatID: 'IT04497920282',
    url: 'https://www.venetocase.it/',
    telephone: '+39-327-9474598',
    email: 'camin@venetocase.it',
    description:
      'Boutique immobiliare specializzata nella selezione di immobili residenziali e di pregio nelle province di Padova e Venezia.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Padova',
      addressRegion: 'Veneto',
      addressCountry: 'IT'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '45.4064',
      longitude: '11.8768'
    },
    areaServed: [
      'Padova',
      'Venezia',
      'Riviera del Brenta',
      'Vigonza',
      'Noventa Padovana',
      'Dolo',
      'Piove di Sacco'
    ],
    priceRange: '€€€',
    openingHours: 'Mo,Tu,We,Th,Fr 09:00-19:30, Sa 09:00-12:30'
  };

  return (
    <html lang="it">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
        />
      </head>
      <body>
        {/* Skip to Content for Screen Readers & Keyboard Nav */}
        <a href="#main-content" className="skip-to-content">
          Salta al contenuto principale
        </a>

        {/* Demonstrative Project Notice Banner */}
        <div className="top-disclaimer-bar" role="region" aria-label="Avvertenza di progetto">
          <div className="top-disclaimer-inner">
            <span className="disclaimer-badge">Proposta Dimostrativa Indipendente</span>
            <span>
              Progetto di valorizzazione digitale per <strong>Veneto Case</strong> (P.IVA 04497920282).
              Nessun dato reale raccolto.
            </span>
            <a
              href="https://wa.me/393279474598"
              target="_blank"
              rel="noopener noreferrer"
              className="top-disclaimer-phone"
              aria-label="Contatto WhatsApp di verifica +39 327 9474598"
            >
              <i className="bi bi-whatsapp" aria-hidden="true"></i>
              <span>WhatsApp: +39 327 9474598</span>
            </a>
          </div>
        </div>

        <Navbar />

        <main id="main-content" tabIndex={-1}>
          {children}
        </main>

        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
