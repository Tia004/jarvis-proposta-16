import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Termini e Condizioni | Veneto Case',
  description: 'Termini e condizioni di utilizzo del portale e clausole di mediazione immobiliare per Veneto Case.'
};

export default function TerminiPage() {
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
          <i className="bi bi-journal-text" aria-hidden="true"></i>
          Disciplina Contrattuale
        </div>

        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-dark-800)' }}>
          Termini e Condizioni (Bozza di Proposta)
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
          <strong>Avvertenza di Progetto:</strong> Le presenti clausole costituiscono una bozza redatta a scopo dimostrativo. I contenuti informativi relativi agli annunci immobiliari hanno natura puramente descrittiva e non costituiscono elemento contrattuale vincolante ex art. 1336 c.c.
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', lineHeight: 1.7, color: 'var(--color-dark-600)' }}>
          <section>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--color-dark-800)', marginBottom: '0.75rem' }}>
              1. Oggetto e Ambito di Applicazione
            </h2>
            <p>
              I presenti termini disciplinano la consultazione delle schede descrittive degli immobili e l’invio di richieste di contatto o valutazione gestite da <strong>Veneto case srl</strong> (P.IVA 04497920282, REA 394571 Padova). L’accesso e l’utilizzo del sito comportano l’accettazione delle presenti condizioni.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--color-dark-800)', marginBottom: '0.75rem' }}>
              2. Natura delle Informazioni Immobiliari
            </h2>
            <p>
              Tutti i dati, le fotografie, le planimetrie, i prezzi e le caratteristiche degli immobili (inclusa la classe energetica APE e le metrature commerciali) pubblicati sul portale derivano dalle informazioni fornite dalle parti venditrici e dalle verifiche documentali preliminari. Tali informazioni hanno valore puramente informativo e non vincolano contrattualmente l’agenzia né il venditore fino alla sottoscrizione di formale proposta d’acquisto accettata.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--color-dark-800)', marginBottom: '0.75rem' }}>
              3. Attività di Mediazione e Provvigione
            </h2>
            <p>
              L’attività di mediazione immobiliare è svolta in conformità alla Legge 39/1989 e successive modifiche. Il diritto alla provvigione matura esclusivamente alla conclusione dell’affare per effetto dell’intervento dell’agenzia, secondo le percentuali e le modalità concordate per iscritto nei singoli mandati o proposte d’acquisto.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--color-dark-800)', marginBottom: '0.75rem' }}>
              4. Proprietà Intellettuale
            </h2>
            <p>
              I testi, le fotografie originali e l’impostazione grafica del sito sono tutelati dalla legge sul diritto d’autore. È vietata la riproduzione o diffusione non autorizzata di testi e immagini senza preventivo consenso scritto.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--color-dark-800)', marginBottom: '0.75rem' }}>
              5. Foro Competente
            </h2>
            <p>
              Per ogni eventuale controversia concernente l’interpretazione o l’esecuzione dei presenti termini, qualora l’utente sia un consumatore, sarà competente il Foro del luogo di residenza o domicilio elettivo del consumatore, ai sensi del D.Lgs. 206/2005 (Codice del Consumo). In tutti gli altri casi, è competente in via esclusiva il Foro di Padova.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
