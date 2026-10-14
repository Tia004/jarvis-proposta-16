import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cookie Policy | Veneto Case',
  description: 'Informativa estesa sull’utilizzo dei cookie e tecnologie analoghe per la proposta dimostrativa Veneto Case.'
};

export default function CookiePage() {
  return (
    <div className="section-wrapper">
      <div className="container" style={{ maxWidth: '860px' }}>
        <div style={{ marginBottom: '2rem' }}>
          <Link href="/" className="btn btn-secondary btn-sm">
            <i className="bi bi-arrow-left" aria-hidden="true"></i>
            <span>Torna alla Home</span>
          </Link>
        </div>

        <div className="section-tag">
          <i className="bi bi-cookie" aria-hidden="true"></i>
          Direttiva ePrivacy
        </div>

        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-dark-800)' }}>
          Cookie Policy (Bozza di Proposta)
        </h1>
        <p style={{ color: 'var(--color-gray-400)', fontSize: '0.9rem', marginBottom: '2rem' }}>
          Ultimo aggiornamento: Ottobre 2026 • Riferimento: Veneto Case srl
        </p>

        {/* Disclaimer */}
        <div
          style={{
            backgroundColor: 'var(--color-primary-light)',
            border: '1px solid var(--color-primary-subtle)',
            borderRadius: 'var(--border-radius-md)',
            padding: '1.25rem 1.5rem',
            marginBottom: '2.5rem',
            fontSize: '0.9rem',
            color: 'var(--color-dark-800)'
          }}
        >
          <strong>Avvertenza di Progetto:</strong> La presente policy descrive la gestione dei cookie tecnici e di preferenza del sito. Nel prototipo corrente, non sono presenti cookie di profilazione o tracciamento commerciale invasivo di terze parti.
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', lineHeight: 1.7, color: 'var(--color-dark-600)' }}>
          <section>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--color-dark-800)', marginBottom: '0.75rem' }}>
              1. Cosa sono i Cookie
            </h2>
            <p>
              I cookie sono piccoli file di testo che i siti visitati dagli utenti inviano ai loro terminali, dove vengono memorizzati per essere ritrasmessi agli stessi siti alla visita successiva. I cookie sono utilizzati per differenti finalità: esecuzione di autenticazioni informatiche, monitoraggio di sessioni, memorizzazione di informazioni su specifiche configurazioni riguardanti gli utenti che accedono al server.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--color-dark-800)', marginBottom: '0.75rem' }}>
              2. Tipologie di Cookie Utilizzati
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ backgroundColor: 'var(--color-gray-50)', padding: '1rem', borderRadius: 'var(--border-radius-sm)', border: '1px solid var(--color-gray-200)' }}>
                <strong style={{ color: 'var(--color-dark-800)', display: 'block', marginBottom: '0.25rem' }}>
                  Cookie Tecnici di Navigazione (Strettamente Necessari)
                </strong>
                <p style={{ margin: 0, fontSize: '0.9rem' }}>
                  Questi cookie sono indispensabili per il corretto funzionamento del sito e per consentire la navigazione tra le sezioni (ad es. memorizzazione del consenso o filtri della sessione). Non richiedono il consenso preventivo dell’utente.
                </p>
              </div>

              <div style={{ backgroundColor: 'var(--color-gray-50)', padding: '1rem', borderRadius: 'var(--border-radius-sm)', border: '1px solid var(--color-gray-200)' }}>
                <strong style={{ color: 'var(--color-dark-800)', display: 'block', marginBottom: '0.25rem' }}>
                  Cookie Analitici Aggregati (Statistici)
                </strong>
                <p style={{ margin: 0, fontSize: '0.9rem' }}>
                  Utilizzati esclusivamente per raccogliere informazioni in forma aggregata e anonimizzata sul numero degli utenti e su come questi visitano il sito, al fine di migliorarne prestazioni e usabilità.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--color-dark-800)', marginBottom: '0.75rem' }}>
              3. Gestione delle Preferenze tramite Browser
            </h2>
            <p>
              L’utente può gestire le preferenze relative ai cookie direttamente all’interno del proprio browser ed impedire – ad esempio – che terze parti possano installarne. Tramite le preferenze del browser è inoltre possibile eliminare i Cookie installati in passato.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--color-dark-800)', marginBottom: '0.75rem' }}>
              4. Titolare del Trattamento
            </h2>
            <p>
              Veneto case srl • C/F e P.IVA 04497920282 • REA n. 394571 Reg. Imprese di Padova n. 04497920282. Per chiarimenti: <code>camin@venetocase.it</code>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
