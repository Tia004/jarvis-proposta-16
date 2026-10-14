'use client';

import React, { useState, useMemo } from 'react';

export default function MortgageCalculator() {
  const [propertyPrice, setPropertyPrice] = useState<number>(340000);
  const [downPaymentPct, setDownPaymentPct] = useState<number>(20);
  const [years, setYears] = useState<number>(25);
  const [interestRate, setInterestRate] = useState<number>(3.2);

  const calculation = useMemo(() => {
    const downPaymentAmount = (propertyPrice * downPaymentPct) / 100;
    const loanAmount = propertyPrice - downPaymentAmount;
    const months = years * 12;
    const monthlyRate = interestRate / 100 / 12;

    if (loanAmount <= 0) {
      return { downPaymentAmount: Math.round(downPaymentAmount), monthlyPayment: 0, loanAmount: 0, totalInterest: 0, totalPaid: 0 };
    }

    // French amortization formula
    let monthlyPayment = 0;
    if (monthlyRate === 0) {
      monthlyPayment = loanAmount / months;
    } else {
      monthlyPayment =
        (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, months))) /
        (Math.pow(1 + monthlyRate, months) - 1);
    }

    const totalPaid = monthlyPayment * months;
    const totalInterest = totalPaid - loanAmount;

    return {
      downPaymentAmount: Math.round(downPaymentAmount),
      loanAmount: Math.round(loanAmount),
      monthlyPayment: Math.round(monthlyPayment),
      totalInterest: Math.round(totalInterest),
      totalPaid: Math.round(totalPaid)
    };
  }, [propertyPrice, downPaymentPct, years, interestRate]);

  return (
    <section id="calcolatore" className="section-wrapper" aria-labelledby="calc-heading">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">
            <i className="bi bi-calculator" aria-hidden="true"></i>
            Strumento Finanziario
          </span>
          <h2 id="calc-heading" className="section-title">
            Simula la Rata del Tuo Mutuo
          </h2>
          <p className="section-subtitle">
            Pianifica l’acquisto della tua nuova casa con chiarezza. Calcola in tempo reale la rata mensile orientativa e confrontati con i nostri consulenti convenzionati.
          </p>
        </div>

        {/* Calculator Component Box */}
        <div className="mortgage-box">
          <div className="mortgage-grid">
            {/* Input Sliders & Controls */}
            <div className="calc-inputs">
              {/* Field 1: Prezzo immobile */}
              <div className="calc-field">
                <label htmlFor="price-slider">
                  <span>Prezzo Immobile</span>
                  <span style={{ color: 'var(--color-primary)' }}>€ {propertyPrice.toLocaleString('it-IT')}</span>
                </label>
                <input
                  id="price-slider"
                  type="range"
                  min="50000"
                  max="800000"
                  step="5000"
                  value={propertyPrice}
                  onChange={(e) => setPropertyPrice(Number(e.target.value))}
                  className="calc-slider"
                />
              </div>

              {/* Field 2: Anticipo versato */}
              <div className="calc-field">
                <label htmlFor="downpayment-slider">
                  <span>Anticipo Iniziale ({downPaymentPct}%)</span>
                  <span style={{ color: 'var(--color-primary)' }}>€ {calculation.downPaymentAmount.toLocaleString('it-IT')}</span>
                </label>
                <input
                  id="downpayment-slider"
                  type="range"
                  min="10"
                  max="60"
                  step="5"
                  value={downPaymentPct}
                  onChange={(e) => setDownPaymentPct(Number(e.target.value))}
                  className="calc-slider"
                />
              </div>

              {/* Field 3: Durata anni */}
              <div className="calc-field">
                <label htmlFor="years-slider">
                  <span>Durata del Finanziamento</span>
                  <span style={{ color: 'var(--color-primary)' }}>{years} Anni ({years * 12} rate)</span>
                </label>
                <input
                  id="years-slider"
                  type="range"
                  min="10"
                  max="30"
                  step="5"
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="calc-slider"
                />
              </div>

              {/* Field 4: Tasso interesse annuo fisso */}
              <div className="calc-field">
                <label htmlFor="interest-slider">
                  <span>Tasso di Interesse Annuo Stimato (TAN)</span>
                  <span style={{ color: 'var(--color-primary)' }}>{interestRate.toFixed(1)}%</span>
                </label>
                <input
                  id="interest-slider"
                  type="range"
                  min="1.0"
                  max="6.0"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="calc-slider"
                />
              </div>
            </div>

            {/* Results Panel */}
            <div className="calc-result-card">
              <span className="calc-result-title">
                Rata Mensile Stimata
              </span>
              <div className="calc-result-monthly">
                € {calculation.monthlyPayment.toLocaleString('it-IT')}
                <span style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--color-gray-300)' }}>/mese</span>
              </div>

              <div className="calc-result-summary">
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.4rem 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <span>Importo Mutuo Richiesto:</span>
                  <strong style={{ color: '#FFFFFF' }}>€ {calculation.loanAmount.toLocaleString('it-IT')}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.4rem 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <span>Anticipo a tuo carico:</span>
                  <strong style={{ color: '#FFFFFF' }}>€ {calculation.downPaymentAmount.toLocaleString('it-IT')}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.4rem 0' }}>
                  <span>Totale Interessi Stimati:</span>
                  <strong style={{ color: '#84D5C6' }}>€ {calculation.totalInterest.toLocaleString('it-IT')}</strong>
                </div>
              </div>

              <a
                href={`https://wa.me/393279474598?text=Buongiorno%20Veneto%20Case,%20ho%20simulato%20una%20rata%20per%20un%20immobile%20da%20€%20${propertyPrice}%20e%20vorrei%20una%20consulenza%20creditizia.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
                style={{ width: '100%', marginBottom: '0.75rem' }}
              >
                <i className="bi bi-whatsapp" aria-hidden="true"></i>
                <span>Verifica Fattibilità con Advisor</span>
              </a>

              <p style={{ fontSize: '0.725rem', color: 'var(--color-gray-400)', margin: 0, lineHeight: 1.4 }}>
                * La simulazione ha finalità puramente orientativa e non rappresenta impegno contrattuale o offerta al pubblico ex art. 1336 c.c.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
