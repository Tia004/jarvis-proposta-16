'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  branch: string;
  requestType: string;
  message: string;
  privacyConsent: boolean;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  branch?: string;
  message?: string;
  privacyConsent?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    branch: 'forcellini',
    requestType: 'valutazione',
    message: '',
    privacyConsent: false
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedSuccess, setSubmittedSuccess] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.firstName.trim() || formData.firstName.trim().length < 2) {
      errs.firstName = 'Inserisci un nome valido (almeno 2 caratteri)';
    }

    if (!formData.lastName.trim() || formData.lastName.trim().length < 2) {
      errs.lastName = 'Inserisci un cognome valido (almeno 2 caratteri)';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Inserisci un indirizzo email valido (es. nome@dominio.it)';
    }

    const phoneClean = formData.phone.replace(/[\s\-\+\(\)]/g, '');
    if (!phoneClean || phoneClean.length < 8) {
      errs.phone = 'Inserisci un numero di telefono valido (almeno 8 cifre)';
    }

    if (!formData.branch) {
      errs.branch = 'Seleziona una delle 7 filiali del Veneto';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Inserisci un messaggio descrittivo (almeno 10 caratteri)';
    }

    if (!formData.privacyConsent) {
      errs.privacyConsent = 'È obbligatorio accettare l’informativa privacy per procedere';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    // Client-side simulation without transmitting data to external servers
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        branch: 'forcellini',
        requestType: 'valutazione',
        message: '',
        privacyConsent: false
      });
      setErrors({});
    }, 450);
  };

  return (
    <section id="contatti" className="section-wrapper section-muted" aria-labelledby="contact-heading">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">
            <i className="bi bi-envelope-paper" aria-hidden="true"></i>
            Canali di Contatto
          </span>
          <h2 id="contact-heading" className="section-title">
            Richiedi Informazioni o una Stima Gratuita
          </h2>
          <p className="section-subtitle">
            Mettiti in contatto con una delle nostre 7 filiali. I nostri consulenti dedicati risponderanno con puntualità e riservatezza.
          </p>
        </div>

        {/* Demo Mode Notice */}
        <div className="form-feedback-alert form-feedback-info" style={{ maxWidth: '820px', margin: '0 auto 2.5rem' }}>
          <i className="bi bi-shield-lock" style={{ marginRight: '0.5rem', color: 'var(--color-primary)' }} aria-hidden="true"></i>
          <strong>Ambiente Dimostrativo di Proposta:</strong> Questo modulo include validazione interattiva completa lato client. In ossequio ai requisiti del progetto, nessun dato personale viene inviato a terzi né inoltrato all’azienda.
        </div>

        <div className="contact-section-grid">
          {/* Left Info Panel */}
          <div className="contact-info-panel">
            <div className="contact-info-card">
              <div className="contact-icon-bubble" aria-hidden="true">
                <i className="bi bi-whatsapp"></i>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--color-dark-800)', marginBottom: '0.25rem' }}>
                  Canale Diretto WhatsApp
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-dark-500)', marginBottom: '0.5rem' }}>
                  Risposta rapida per richieste urgenti o chiarimenti veloci sugli immobili.
                </p>
                <a
                  href="https://wa.me/393279474598?text=Buongiorno%20Veneto%20Case,%20desidero%20informazioni"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontWeight: 700, fontSize: '0.95rem' }}
                >
                  +39 327 9474598 (Attivo dal Lunedì al Sabato)
                </a>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon-bubble" aria-hidden="true">
                <i className="bi bi-telephone"></i>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--color-dark-800)', marginBottom: '0.25rem' }}>
                  Centralini Telefonici
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-dark-500)', marginBottom: '0.5rem' }}>
                  Contatti diretti per filiali di Padova e Riviera del Brenta:
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', fontSize: '0.925rem', fontWeight: 600 }}>
                  <a href="tel:0490990593">Padova e cintura: 049 0990593</a>
                  <a href="tel:0419690091">Riviera del Brenta / Venezia: 041 9690091</a>
                </div>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon-bubble" aria-hidden="true">
                <i className="bi bi-envelope"></i>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--color-dark-800)', marginBottom: '0.25rem' }}>
                  Posta Elettronica
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-dark-500)', marginBottom: '0.5rem' }}>
                  Invio documentazione catastale, planimetrie e perizie:
                </p>
                <a href="mailto:camin@venetocase.it" style={{ fontWeight: 700, fontSize: '0.95rem' }}>
                  camin@venetocase.it
                </a>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon-bubble" aria-hidden="true">
                <i className="bi bi-clock-history"></i>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--color-dark-800)', marginBottom: '0.25rem' }}>
                  Orari di Ricevimento
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-dark-500)', margin: 0, lineHeight: 1.5 }}>
                  Lunedì – Venerdì: 09:00 – 12:30 | 15:00 – 19:30<br />
                  Sabato: 09:00 – 12:30 (pomeriggio su appuntamento)
                </p>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="contact-form-card">
            {submittedSuccess && (
              <div className="form-feedback-alert form-feedback-success" role="alert">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                  <i className="bi bi-check-circle-fill" style={{ fontSize: '1.2rem' }} aria-hidden="true"></i>
                  <strong>Simulazione di invio completata con successo!</strong>
                </div>
                <p style={{ margin: 0, fontSize: '0.85rem' }}>
                  I campi inseriti sono stati validati regolarmente. Come previsto dalla proposta dimostrativa, nessun messaggio è stato inoltrato a server reali.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate aria-label="Modulo di contatto e richiesta stima">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
                <div className={`form-group ${errors.firstName ? 'error' : ''}`}>
                  <label htmlFor="form-first-name">Nome *</label>
                  <input
                    id="form-first-name"
                    type="text"
                    placeholder="Mario"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    aria-required="true"
                    aria-invalid={!!errors.firstName}
                  />
                  {errors.firstName && <span className="form-error-msg">{errors.firstName}</span>}
                </div>

                <div className={`form-group ${errors.lastName ? 'error' : ''}`}>
                  <label htmlFor="form-last-name">Cognome *</label>
                  <input
                    id="form-last-name"
                    type="text"
                    placeholder="Rossi"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    aria-required="true"
                    aria-invalid={!!errors.lastName}
                  />
                  {errors.lastName && <span className="form-error-msg">{errors.lastName}</span>}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
                <div className={`form-group ${errors.email ? 'error' : ''}`}>
                  <label htmlFor="form-email">Email *</label>
                  <input
                    id="form-email"
                    type="email"
                    placeholder="mario.rossi@email.it"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    aria-required="true"
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <span className="form-error-msg">{errors.email}</span>}
                </div>

                <div className={`form-group ${errors.phone ? 'error' : ''}`}>
                  <label htmlFor="form-phone">Telefono / Cellulare *</label>
                  <input
                    id="form-phone"
                    type="tel"
                    placeholder="+39 340 1234567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    aria-required="true"
                    aria-invalid={!!errors.phone}
                  />
                  {errors.phone && <span className="form-error-msg">{errors.phone}</span>}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
                <div className={`form-group ${errors.branch ? 'error' : ''}`}>
                  <label htmlFor="form-branch">Filiale di Riferimento *</label>
                  <select
                    id="form-branch"
                    value={formData.branch}
                    onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                  >
                    <option value="forcellini">Filiale Forcellini (Padova)</option>
                    <option value="noventa">Filiale Noventa Padovana</option>
                    <option value="camin">Filiale Camin (Padova Est)</option>
                    <option value="roncaglia">Filiale Roncaglia (Ponte San Nicolò)</option>
                    <option value="dolo">Filiale Dolo (Riviera del Brenta)</option>
                    <option value="fosso">Filiale Fossò (Venezia)</option>
                    <option value="piove">Filiale Piove di Sacco</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="form-type">Tipo di Richiesta</label>
                  <select
                    id="form-type"
                    value={formData.requestType}
                    onChange={(e) => setFormData({ ...formData, requestType: e.target.value })}
                  >
                    <option value="valutazione">Stima e Valutazione Gratuita</option>
                    <option value="visita">Prenotazione Visita Immobile</option>
                    <option value="vendita">Incarico di Vendita Strategica</option>
                    <option value="mutuo">Consulenza Finanziamento / Mutuo</option>
                    <option value="informazioni">Informazioni Generiche</option>
                  </select>
                </div>
              </div>

              <div className={`form-group ${errors.message ? 'error' : ''}`}>
                <label htmlFor="form-message">Dettagli della Richiesta *</label>
                <textarea
                  id="form-message"
                  rows={4}
                  placeholder="Descrivi brevemente l'immobile di interesse o l'immobile che desideri vendere..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  aria-required="true"
                  aria-invalid={!!errors.message}
                ></textarea>
                {errors.message && <span className="form-error-msg">{errors.message}</span>}
              </div>

              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', cursor: 'pointer', fontWeight: 400, fontSize: '0.825rem' }}>
                  <input
                    type="checkbox"
                    checked={formData.privacyConsent}
                    onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
                    style={{ width: 'auto', marginTop: '0.2rem' }}
                    aria-required="true"
                  />
                  <span>
                    Ho letto la <Link href="/privacy" style={{ textDecoration: 'underline' }}>Privacy Policy</Link> e acconsento al trattamento dei miei dati per la gestione della richiesta.
                  </span>
                </label>
                {errors.privacyConsent && <span className="form-error-msg">{errors.privacyConsent}</span>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary btn-lg"
                style={{ width: '100%' }}
              >
                {isSubmitting ? (
                  <span>Elaborazione in corso...</span>
                ) : (
                  <>
                    <i className="bi bi-send" aria-hidden="true"></i>
                    <span>Invia Richiesta di Consulenza</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
