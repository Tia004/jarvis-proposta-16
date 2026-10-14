import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Informativa sulla Privacy | Veneto Case',
  description: 'Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR) per la proposta dimostrativa Veneto Case.'
};

export default function PrivacyPage() {
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
          <i className="bi bi-shield-lock" aria-hidden="true"></i>
          Trasparenza GDPR
        </div>

        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-dark-800)' }}>
          Informativa sulla Privacy (Bozza di Proposta)
        </h1>
        <p style={{ color: 'var(--color-gray-400)', fontSize: '0.9rem', marginBottom: '2rem' }}>
          Ultimo aggiornamento: Ottobre 2026 • Riferimento: Veneto Case srl
        </p>

        {/* Legal Disclaimer Box */}
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
          <strong>Avvertenza di Progetto:</strong> Il presente documento costituisce una bozza preliminare predisposta a scopo dimostrativo nell’ambito della proposta digitale per <em>Veneto Case srl</em>. La presente bozza dovrà essere formalmente revisionata e validata dal Responsabile della Protezione dei Dati (DPO) o dal consulente legale aziendale prima di qualsiasi utilizzo operativo. Nel presente prototipo, nessun dato personale viene archiviato o trasmesso.
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', lineHeight: 1.7, color: 'var(--color-dark-600)' }}>
          <section>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--color-dark-800)', marginBottom: '0.75rem' }}>
              1. Titolare del Trattamento
            </h2>
            <p>
              Il Titolare del trattamento dei dati è <strong>Veneto case srl</strong>, C/F e P.IVA 04497920282, Capitale Sociale € 15.000,00 i.v., REA n. 394571 Reg. Imprese di Padova n. 04497920282. Sede operativa e contatti di riferimento: Padova (PD), email istituzionale: <code>camin@venetocase.it</code>.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--color-dark-800)', marginBottom: '0.75rem' }}>
              2. Tipologia di Dati Trattati
            </h2>
            <p>
              I dati che possono formare oggetto di trattamento nell’ambito delle normali attività di intermediazione immobiliare comprendono:
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
              <li>Dati anagrafici e di contatto (nome, cognome, indirizzo email, recapito telefonico);</li>
              <li>Dati relativi all’immobile di proprietà o di interesse (ubicazione, caratteristiche tipologiche, superficie, stime economiche);</li>
              <li>Dati di navigazione e tecnici (indirizzo IP in forma anonimizzata, orario delle richieste).</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--color-dark-800)', marginBottom: '0.75rem' }}>
              3. Finalità del Trattamento e Base Giuridica
            </h2>
            <p>
              Il trattamento è finalizzato esclusivamente a:
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
              <li>Rispondere alle richieste di informazione e prenotazione visite (Base giuridica: esecuzione di misure precontrattuali ex art. 6.1.b GDPR);</li>
              <li>Elaborazione di stime e perizie orientative su richiesta dell’interessato;</li>
              <li>Adempimento di obblighi di legge previsti in materia antiriciclaggio e mediazione creditizia/notarile;</li>
              <li>Tutela dei diritti del Titolare in sede giudiziaria (Base giuridica: legittimo interesse ex art. 6.1.f GDPR).</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--color-dark-800)', marginBottom: '0.75rem' }}>
              4. Modalità di Trattamento e Conservazione
            </h2>
            <p>
              I dati sono trattati con strumenti informatici e cartacei con idonee misure di sicurezza atte a prevenire la perdita, l’uso illecito o l’accesso non autorizzato. I dati saranno conservati per il tempo strettamente necessario all’evasione della richiesta o per la durata imposta dalle normative civilistiche e fiscali.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--color-dark-800)', marginBottom: '0.75rem' }}>
              5. Diritti dell’Interessato
            </h2>
            <p>
              Ai sensi degli artt. 15-22 del GDPR, l’utente ha il diritto di accedere ai propri dati personali, chiederne la rettifica, la cancellazione, la limitazione del trattamento o la portabilità, nonché di opporsi al loro trattamento. Per esercitare i propri diritti è possibile inviare una comunicazione scritta a: <code>camin@venetocase.it</code>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
