'use client';

import React from 'react';

export default function StudioServices() {
  const pillars = [
    {
      icon: 'bi-gem',
      title: 'Approccio Boutique',
      desc: 'Pochi immobili, ma gestiti alla perfezione: rifiutiamo la logica dei cataloghi dispersivi da centinaia di annunci non verificati. Dedichiamo a ogni cliente tempo, strategia e cura sartoriale.'
    },
    {
      icon: 'bi-camera-reels',
      title: 'Foto Professionali & Virtual Tour',
      desc: 'Presentazione visiva d’eccellenza con attrezzatura fotografica dedicata e rendering virtual tour 3D. Ogni immobile viene valorizzato nei punti di forza reali prima di qualsiasi appuntamento.'
    },
    {
      icon: 'bi-bullseye',
      title: 'Valore Reale di Mercato',
      desc: 'Nessuna stima compiacente o illusoria: lavoriamo sul valore effettivo di scambio del mercato veneto, riducendo i tempi di permanenza media e massimizzando il rendimento reale del venditore.'
    },
    {
      icon: 'bi-clock-history',
      title: 'Processo Guidato & Tempi Certi',
      desc: 'Dalla raccolta documenti catastali fino al rogito notarile definitivo, pianifichiamo ogni scadenza con precisione. Conosci in ogni istante lo stato di avanzamento delle visite e della trattativa.'
    },
    {
      icon: 'bi-file-earmark-lock2',
      title: 'Tutela Contrattuale e Notarile',
      desc: 'Supporto continuo nell’interazione con geometri, periti bancari e notai. Raccogliamo e certifichiamo conformità urbanistica e agibilità per azzerare ogni rischio di contestazione futura.'
    },
    {
      icon: 'bi-geo-alt-fill',
      title: 'Radicamento su 7 Filiali Locali',
      desc: 'Presenza diretta nei nodi strategici di Padova, Venezia e Riviera del Brenta: Camin, Dolo, Forcellini, Fossò, Noventa Padovana, Piove di Sacco e Roncaglia.'
    }
  ];

  return (
    <section id="servizi" className="section-wrapper" aria-labelledby="services-heading">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">
            <i className="bi bi-briefcase" aria-hidden="true"></i>
            Studio & Servizi
          </span>
          <h2 id="services-heading" className="section-title">
            I Pilastri del Nostro Modello Boutique
          </h2>
          <p className="section-subtitle">
            Cosa distingue Veneto Case dalle tradizionali reti immobiliari generaliste. Un servizio sartoriale incentrato sulla persona e sulla sicurezza economica.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {pillars.map((item, index) => (
            <article key={index} className="service-card" aria-label={item.title}>
              <div className="service-icon-box" aria-hidden="true">
                <i className={`bi ${item.icon}`}></i>
              </div>
              <h3 className="service-title">
                {item.title}
              </h3>
              <p className="service-desc">
                {item.desc}
              </p>
            </article>
          ))}
        </div>

        {/* Valuation Banner Box */}
        <div
          style={{
            marginTop: '3.5rem',
            background: 'linear-gradient(135deg, var(--color-dark-900) 0%, var(--color-dark-800) 100%)',
            borderRadius: 'var(--border-radius-lg)',
            padding: 'clamp(2rem, 4vw, 3.5rem)',
            color: 'var(--color-white)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2rem',
            boxShadow: 'var(--shadow-lg)'
          }}
        >
          <div style={{ maxWidth: '640px' }}>
            <span
              style={{
                color: '#84D5C6',
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                display: 'block',
                marginBottom: '0.5rem',
                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace'
              }}
            >
              Sei proprietario di un immobile in Veneto?
            </span>
            <h3 style={{ fontSize: 'clamp(1.5rem, 2.2vw, 2.1rem)', color: 'var(--color-white)', marginBottom: '0.75rem' }}>
              Richiedi una Valutazione Gratuita e una Strategia di Vendita su Misura
            </h3>
            <p style={{ color: 'var(--color-gray-300)', fontSize: '0.95rem', margin: 0 }}>
              Senza impegno: un nostro consulente di filiale analizzerà la tua documentazione ed effettuerà un sopralluogo per stimare il reale valore di mercato.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#contatti" className="btn btn-primary btn-lg">
              <i className="bi bi-clipboard-data" aria-hidden="true"></i>
              <span>Richiedi Valutazione</span>
            </a>
            <a
              href="https://wa.me/393279474598?text=Buongiorno,%20desidero%20una%20valutazione%20gratuita%20del%20mio%20immobile"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-lg"
              style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.2)' }}
            >
              <i className="bi bi-whatsapp" aria-hidden="true"></i>
              <span>Parla con Noi</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
