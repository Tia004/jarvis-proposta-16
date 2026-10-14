'use client';

import React, { useState } from 'react';
import { BRANCHES } from '@/data/branches';

export default function BranchSelector() {
  const [selectedProvince, setSelectedProvince] = useState<string>('tutte');

  const filteredBranches = BRANCHES.filter((b) => {
    if (selectedProvince === 'PD') return b.province === 'PD';
    if (selectedProvince === 'VE') return b.province === 'VE';
    return true;
  });

  return (
    <section id="filiali" className="section-wrapper section-muted" aria-labelledby="branches-heading">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">
            <i className="bi bi-geo-alt" aria-hidden="true"></i>
            Presenza Territoriale
          </span>
          <h2 id="branches-heading" className="section-title">
            Le Nostre 7 Filiali in Veneto
          </h2>
          <p className="section-subtitle">
            Radicamento capillare tra Padova e Venezia. Professionisti locali che conoscono ogni quartiere, le dinamiche di prezzo e i piani urbanistici del territorio.
          </p>

          {/* Filter Pills */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1.5rem' }}>
            <button
              type="button"
              className={`filter-tab-btn ${selectedProvince === 'tutte' ? 'active' : ''}`}
              onClick={() => setSelectedProvince('tutte')}
            >
              Tutte le Filiali (7)
            </button>
            <button
              type="button"
              className={`filter-tab-btn ${selectedProvince === 'PD' ? 'active' : ''}`}
              onClick={() => setSelectedProvince('PD')}
            >
              Provincia di Padova (5)
            </button>
            <button
              type="button"
              className={`filter-tab-btn ${selectedProvince === 'VE' ? 'active' : ''}`}
              onClick={() => setSelectedProvince('VE')}
            >
              Provincia di Venezia & Riviera (2)
            </button>
          </div>
        </div>

        {/* Branches Grid */}
        <div className="branches-grid">
          {filteredBranches.map((branch) => (
            <article key={branch.id} className="branch-card" aria-label={branch.name}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <span className="branch-city-pill">
                  {branch.city} ({branch.province})
                </span>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-primary)' }}>
                  {branch.zone}
                </span>
              </div>

              <h3 className="branch-name">
                {branch.name}
              </h3>

              <p className="branch-address">
                <i className="bi bi-geo-alt-fill" style={{ color: 'var(--color-primary)', marginTop: '0.15rem' }} aria-hidden="true"></i>
                <span>{branch.address}</span>
              </p>

              <div className="branch-hours">
                <i className="bi bi-clock" aria-hidden="true"></i>
                <span>{branch.hours}</span>
              </div>

              <div style={{ fontSize: '0.85rem', color: 'var(--color-dark-700)', marginBottom: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <i className="bi bi-telephone-fill" style={{ color: 'var(--color-gray-400)' }} aria-hidden="true"></i>
                  <span>Tel: {branch.phone}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <i className="bi bi-envelope-fill" style={{ color: 'var(--color-gray-400)' }} aria-hidden="true"></i>
                  <span>Email: {branch.email}</span>
                </div>
              </div>

              <div className="branch-actions">
                <a
                  href={`tel:${branch.phone.replace(/\s+/g, '')}`}
                  className="btn btn-secondary btn-sm"
                  style={{ flex: 1 }}
                >
                  <i className="bi bi-telephone" aria-hidden="true"></i>
                  <span>Chiama</span>
                </a>
                <a
                  href={`https://wa.me/393279474598?text=Buongiorno%20${encodeURIComponent(branch.name)},%20desidero%20fissare%20un%20appuntamento`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                  style={{ flex: 1 }}
                >
                  <i className="bi bi-whatsapp" aria-hidden="true"></i>
                  <span>WhatsApp</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
