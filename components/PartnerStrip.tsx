'use client';

import React from 'react';

export default function PartnerStrip() {
  const partners = [
    { name: 'Immobiliare.it', role: 'Canale Diffusione Annunci', icon: 'bi-broadcast' },
    { name: 'Idealista', role: 'Network Partner Internazionale', icon: 'bi-globe-europe-africa' },
    { name: 'Casa.it', role: 'Visibilità Residenziale Italia', icon: 'bi-houses' },
    { name: 'FIAIP / FIMAA', role: 'Conformità Deontologica', icon: 'bi-award' },
    { name: 'Banca & Istituti Mutui', role: 'Convenzioni Creditizie', icon: 'bi-bank' },
    { name: 'OMI Agenzia Entrate', role: 'Riferimento Quotazioni', icon: 'bi-file-earmark-bar-graph' }
  ];

  return (
    <div style={{ backgroundColor: 'var(--color-white)', borderBottom: '1px solid var(--color-gray-200)', padding: '2rem 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-gray-400)' }}>
            Ecosistema di Visibilità e Garanzia Professionale
          </span>
        </div>

        <div className="partner-carousel-track" role="region" aria-label="Portali e partner immobiliari">
          {partners.map((p, idx) => (
            <div key={idx} className="partner-logo-item">
              <i className={`bi ${p.icon}`} style={{ color: 'var(--color-primary)', fontSize: '1.25rem' }} aria-hidden="true"></i>
              <div>
                <span style={{ display: 'block', color: 'var(--color-dark-800)', fontSize: '0.9rem' }}>{p.name}</span>
                <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--color-dark-500)', fontWeight: 500 }}>{p.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
