'use client';

import React from 'react';
import { VERIFIED_TEAM } from '@/data/team';

export default function TeamSection() {
  return (
    <section id="team" className="section-wrapper section-muted" aria-labelledby="team-heading">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">
            <i className="bi bi-people" aria-hidden="true"></i>
            Professionisti del Territorio
          </span>
          <h2 id="team-heading" className="section-title">
            Consulenti Verificati per Ogni Filiale
          </h2>
          <p className="section-subtitle">
            Figure operative menzionate pubblicamente e convalidate dalle recensioni dei clienti. Persone reali che seguono l’iter della tua compravendita con nome, cognome e responsabilità.
          </p>
        </div>

        {/* Team Grid */}
        <div className="team-grid">
          {VERIFIED_TEAM.map((member) => (
            <article key={member.id} className="team-card" aria-label={`Consulente ${member.name}`}>
              <div className="team-avatar-monogram" aria-hidden="true">
                <span>{member.name.slice(0, 2).toUpperCase()}</span>
              </div>

              <h3 className="team-name">
                {member.name}
              </h3>

              <div className="team-role">
                {member.role}
              </div>

              <div className="team-branch">
                <i className="bi bi-building" style={{ marginRight: '0.35rem', color: 'var(--color-primary)' }} aria-hidden="true"></i>
                <span>{member.branch}</span>
              </div>

              <p className="team-bio">
                {member.bio}
              </p>

              <div className="team-verification-badge">
                <i className="bi bi-shield-check" style={{ color: 'var(--color-primary)', marginTop: '0.1rem', flexShrink: 0 }} aria-hidden="true"></i>
                <span>{member.sourceVerification}</span>
              </div>
            </article>
          ))}
        </div>

        {/* Ethical Transparency Disclaimer */}
        <div
          style={{
            marginTop: '2.5rem',
            backgroundColor: 'var(--color-white)',
            border: '1px solid var(--color-gray-200)',
            borderRadius: 'var(--border-radius-md)',
            padding: '1.25rem 1.75rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '0.85rem',
            color: 'var(--color-dark-500)'
          }}
        >
          <i className="bi bi-info-circle-fill" style={{ color: 'var(--color-primary)', fontSize: '1.3rem', flexShrink: 0 }} aria-hidden="true"></i>
          <div>
            <strong>Nota di Deontologia e Trasparenza Informativa:</strong> I nominativi sopra riportati sono estratti esclusivamente da fonti pubbliche verificate e menzioni formali dei clienti. Per il personale aggiuntivo o ruoli amministrativi non verificati con certezza documentale, i dettagli sono omessi o contrassegnati da questa proposta nel rispetto della rigorosa accuratezza dei fatti.
          </div>
        </div>
      </div>
    </section>
  );
}
