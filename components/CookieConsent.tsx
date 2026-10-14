'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analyticsConsent, setAnalyticsConsent] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('veneto_case_cookie_consent');
    if (!saved) {
      // Delay slightly for smooth entrance
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem(
      'veneto_case_cookie_consent',
      JSON.stringify({ necessary: true, analytics: true, date: new Date().toISOString() })
    );
    setIsVisible(false);
  };

  const handleNecessaryOnly = () => {
    localStorage.setItem(
      'veneto_case_cookie_consent',
      JSON.stringify({ necessary: true, analytics: false, date: new Date().toISOString() })
    );
    setIsVisible(false);
  };

  const handleSaveCustom = () => {
    localStorage.setItem(
      'veneto_case_cookie_consent',
      JSON.stringify({ necessary: true, analytics: analyticsConsent, date: new Date().toISOString() })
    );
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      className="cookie-banner-wrapper"
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-desc"
    >
      <div className="cookie-banner-title" id="cookie-title">
        <i className="bi bi-shield-lock-fill" style={{ color: 'var(--color-primary)' }} aria-hidden="true"></i>
        <span>Informativa sui Cookie & Riservatezza</span>
      </div>

      <p className="cookie-banner-text" id="cookie-desc">
        Utilizziamo cookie tecnici essenziali per assicurare la navigazione sicura del sito. Puoi scegliere se acconsentire all’attivazione di eventuali preferenze analitiche aggregate.
      </p>

      {showDetails && (
        <div
          style={{
            backgroundColor: 'var(--color-gray-100)',
            padding: '0.85rem',
            borderRadius: 'var(--border-radius-sm)',
            fontSize: '0.8rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}
        >
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-dark-800)' }}>
            <input type="checkbox" checked disabled />
            <span><strong>Cookie Tecnici / Necessari:</strong> sempre attivi per sicurezza e sessione.</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-dark-800)' }}>
            <input
              type="checkbox"
              checked={analyticsConsent}
              onChange={(e) => setAnalyticsConsent(e.target.checked)}
            />
            <span><strong>Misurazione Statistica Aggregata:</strong> metriche di navigazione anonime.</span>
          </label>
        </div>
      )}

      <div style={{ fontSize: '0.775rem', color: 'var(--color-gray-400)' }}>
        Consulta la nostra <Link href="/cookie" style={{ textDecoration: 'underline' }}>Cookie Policy</Link> e la <Link href="/privacy" style={{ textDecoration: 'underline' }}>Privacy Policy</Link>.
      </div>

      <div className="cookie-banner-actions">
        {showDetails ? (
          <button type="button" className="btn btn-primary btn-sm" onClick={handleSaveCustom}>
            Salva Preferenze
          </button>
        ) : (
          <>
            <button type="button" className="btn btn-primary btn-sm" onClick={handleAcceptAll}>
              Accetta Tutti
            </button>
            <button type="button" className="btn btn-secondary btn-sm" onClick={handleNecessaryOnly}>
              Solo Necessari
            </button>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={() => setShowDetails(true)}
              style={{ fontSize: '0.8rem' }}
            >
              Personalizza
            </button>
          </>
        )}
      </div>
    </aside>
  );
}
