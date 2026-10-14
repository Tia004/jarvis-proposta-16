import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '4rem 1.5rem',
        backgroundColor: 'var(--color-gray-50)'
      }}
    >
      <div style={{ maxWidth: '580px' }}>
        <div
          style={{
            fontSize: '5rem',
            fontWeight: 900,
            color: 'var(--color-primary)',
            lineHeight: 1,
            marginBottom: '1rem',
            letterSpacing: '-0.04em'
          }}
        >
          404
        </div>

        <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-dark-800)' }}>
          Pagina Non Trovata
        </h1>

        <p style={{ color: 'var(--color-dark-500)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2rem' }}>
          L’annuncio o la sezione che stai cercando potrebbe essere stata rimossa, venduta o non essere più disponibile all’indirizzo digitato.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/" className="btn btn-primary btn-lg">
            <i className="bi bi-house-door" aria-hidden="true"></i>
            <span>Torna agli Immobili in Vendita</span>
          </Link>
          <Link href="/#contatti" className="btn btn-secondary btn-lg">
            <i className="bi bi-envelope" aria-hidden="true"></i>
            <span>Contatta una Filiale</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
