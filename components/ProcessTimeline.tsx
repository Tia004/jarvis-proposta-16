'use client';

import React, { useState } from 'react';

interface ProcessStep {
  step: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  icon: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 'Fase 01',
    number: '1',
    title: 'Stima e Valutazione Analitica',
    subtitle: 'Valore reale di mercato, non stime speculative',
    description: 'Partiamo da un’analisi dettagliata dei rogiti effettivamente stipulati nella tua zona negli ultimi 6 mesi. Niente stime gonfiate per accaparrarsi l’incarico: forniamo un range di prezzo scientifico e difendibile.',
    details: [
      'Analisi comparativa del mercato locale (CMA)',
      'Verifica dei prezzi reali al metro quadro registrati',
      'Definizione del target ideale di acquirenti',
      'Report di valutazione scritto e motivato'
    ],
    icon: 'bi-graph-up-arrow'
  },
  {
    step: 'Fase 02',
    number: '2',
    title: 'Verifiche Tecniche e Catastali',
    subtitle: 'Controllo della conformità urbanistica ed edilizia',
    description: 'La maggior parte dei problemi insorge durante le verifiche per il mutuo o davanti al notaio. Noi controlliamo ogni documento prima di pubblicare l’immobile, prevenendo ritardi e contestazioni legali.',
    details: [
      'Visura e planimetria catastale aggiornata',
      'Verifica della conformità urbanistico-edilizia in comune',
      'Attestato di Prestazione Energetica (APE) certificato',
      'Accertamento provenienza e regolarità ipotecaria'
    ],
    icon: 'bi-file-earmark-check'
  },
  {
    step: 'Fase 03',
    number: '3',
    title: 'Strategia Visiva & Virtual Tour',
    subtitle: 'Presentazione di pregio che valorizza ogni spazio',
    description: 'Puntiamo sulla qualità dei contenuti. Un servizio fotografico professionale unito a virtual tour immersivi consente agli acquirenti di vivere gli spazi prima della visita fisica, riducendo le visite improduttive.',
    details: [
      'Servizio fotografico grandangolare ad alta definizione',
      'Virtual Tour interattivo per pre-qualifica visitatori',
      'Schede descrittive editoriali e planimetrie quotate',
      'Promozione mirata sui canali proprietari e sui maggiori portali'
    ],
    icon: 'bi-camera'
  },
  {
    step: 'Fase 04',
    number: '4',
    title: 'Negoziazione & Qualificazione',
    subtitle: 'Gestione professionale di proposte e solvibilità',
    description: 'Filtriamo i visitatori verificando preventivamente le reali motivazioni e la pre-fattibilità creditizia con gli istituti bancari. Conduciamo la trattativa con fermezza ed equilibrio a tutela delle parti.',
    details: [
      'Pre-qualifica finanziaria e creditizia dei proponenti',
      'Gestione trasparente delle offerte d’acquisto vincolate',
      'Negoziazione attenta senza svalutazione dell’immobile',
      'Stesura della proposta d’acquisto conforme alle normative'
    ],
    icon: 'bi-shield-shaded'
  },
  {
    step: 'Fase 05',
    number: '5',
    title: 'Assistenza Fino al Rogito',
    subtitle: 'Accompagnamento presente fino alla consegna chiavi',
    description: 'La nostra consulenza non si conclude al preliminare. Ti seguiamo di persona durante i sopralluoghi dei periti bancari, nella raccolta dei conteggi di estinzione e fisicamente al tavolo del notaio per il rogito.',
    details: [
      'Supporto diretto ai periti per erogazione mutuo',
      'Coordinamento documentale completo con lo studio notarile',
      'Presenza fisica al rogito notarile definitivo',
      'Assistenza nel verbale di consegna e volture utenze'
    ],
    icon: 'bi-pen'
  }
];

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="processo" className="section-wrapper section-muted" aria-labelledby="process-heading">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">
            <i className="bi bi-diagram-3" aria-hidden="true"></i>
            Metodo Operativo
          </span>
          <h2 id="process-heading" className="section-title">
            Un Processo Guidato in 5 Fasi, dalla Stima al Rogito
          </h2>
          <p className="section-subtitle">
            Nel settore immobiliare, l’improvvisazione genera contenziosi e perdite economiche. Il nostro metodo rigoroso protegge il tuo patrimonio in ogni fase della compravendita.
          </p>
        </div>

        {/* 5-Step Stepper Grid */}
        <div className="timeline-stepper" role="list">
          {PROCESS_STEPS.map((stepItem, idx) => (
            <div
              key={stepItem.number}
              role="listitem"
              className={`timeline-step-card ${activeStep === idx ? 'active-step' : ''}`}
              style={{
                cursor: 'pointer',
                borderColor: activeStep === idx ? 'var(--color-primary)' : 'var(--color-gray-200)',
                backgroundColor: activeStep === idx ? 'var(--color-primary-light)' : 'var(--color-white)'
              }}
              onClick={() => setActiveStep(idx)}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setActiveStep(idx);
                }
              }}
              aria-label={`Fase ${stepItem.number}: ${stepItem.title}`}
            >
              <div className="step-number-chip">
                <span>{stepItem.number}</span>
              </div>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                {stepItem.step}
              </span>
              <h3 className="step-title" style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>
                {stepItem.title}
              </h3>
              <p className="step-desc" style={{ fontSize: '0.85rem' }}>
                {stepItem.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Active Step Deep-Dive Showcase */}
        <div
          style={{
            marginTop: '2.5rem',
            backgroundColor: 'var(--color-white)',
            border: '1px solid var(--color-gray-200)',
            borderRadius: 'var(--border-radius-lg)',
            padding: 'clamp(1.75rem, 3vw, 2.75rem)',
            boxShadow: 'var(--shadow-md)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: 'var(--border-radius-sm)',
                  backgroundColor: 'var(--color-primary)',
                  color: 'var(--color-white)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.4rem'
                }}
              >
                <i className={`bi ${PROCESS_STEPS[activeStep].icon}`} aria-hidden="true"></i>
              </div>
              <div>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase' }}>
                  Approfondimento {PROCESS_STEPS[activeStep].step}
                </span>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--color-dark-800)' }}>
                  {PROCESS_STEPS[activeStep].title}
                </h3>
              </div>
            </div>

            <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--color-dark-600)', marginBottom: '1.5rem' }}>
              {PROCESS_STEPS[activeStep].description}
            </p>

            <a href="#contatti" className="btn btn-primary btn-sm">
              <i className="bi bi-chat-text" aria-hidden="true"></i>
              <span>Parla con un Nostro Consulente</span>
            </a>
          </div>

          <div
            style={{
              backgroundColor: 'var(--color-gray-50)',
              borderRadius: 'var(--border-radius-md)',
              padding: '1.75rem',
              border: '1px solid var(--color-gray-200)'
            }}
          >
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-dark-800)', marginBottom: '1rem' }}>
              Attività Incluse in Questa Fase:
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {PROCESS_STEPS[activeStep].details.map((detail, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--color-dark-700)' }}>
                  <i className="bi bi-check-circle-fill" style={{ color: 'var(--color-primary)', marginTop: '0.2rem' }} aria-hidden="true"></i>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
