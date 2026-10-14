'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="site-footer" role="contentinfo" aria-label="Piè di pagina istituzionale">
      <div className="container">
        {/* Top Grid */}
        <div className="footer-top-grid">
          {/* Col 1: Brand & Identity */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  background: 'var(--color-primary)',
                  borderRadius: 'var(--border-radius-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  fontSize: '1.2rem'
                }}
              >
                <i className="bi bi-buildings" aria-hidden="true"></i>
              </div>
              <span style={{ fontSize: '1.3rem', fontWeight: 800, color: '#FFFFFF' }}>
                Veneto <span style={{ color: 'var(--color-primary)' }}>Case</span>
              </span>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-gray-400)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Boutique immobiliare specializzata nella selezione, valorizzazione e compravendita di immobili residenziali di pregio nelle province di Padova, Venezia e lungo la Riviera del Brenta.
            </p>
            <div style={{ fontSize: '0.8rem', color: 'var(--color-gray-400)' }}>
              <div><strong style={{ color: '#FFFFFF' }}>Sede Amministrativa:</strong> Padova (PD)</div>
              <div><strong style={{ color: '#FFFFFF' }}>Email:</strong> camin@venetocase.it</div>
              <div><strong style={{ color: '#FFFFFF' }}>Assistenza WhatsApp:</strong> +39 327 9474598</div>
            </div>
          </div>

          {/* Col 2: Le 7 Filiali */}
          <div>
            <h3 className="footer-title">Rete delle 7 Filiali</h3>
            <ul className="footer-links">
              <li><a href="#filiali" className="footer-link">Filiale Camin (Padova Est) - 049 0990593</a></li>
              <li><a href="#filiali" className="footer-link">Filiale Forcellini (Padova Centro) - 049 0990593</a></li>
              <li><a href="#filiali" className="footer-link">Filiale Noventa Padovana - 049 0990593</a></li>
              <li><a href="#filiali" className="footer-link">Filiale Roncaglia (Ponte San Nicolò) - 049 0990593</a></li>
              <li><a href="#filiali" className="footer-link">Filiale Piove di Sacco (Saccisica) - 049 0990593</a></li>
              <li><a href="#filiali" className="footer-link">Filiale Dolo (Riviera del Brenta) - 041 9690091</a></li>
              <li><a href="#filiali" className="footer-link">Filiale Fossò (Venezia) - 041 9690091</a></li>
            </ul>
          </div>

          {/* Col 3: Navigazione & Servizi */}
          <div>
            <h3 className="footer-title">Navigazione & Servizi</h3>
            <ul className="footer-links">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#immobili" className="footer-link">Immobili in Evidenza</a></li>
              <li><a href="#processo" className="footer-link">Metodo di Vendita in 5 Fasi</a></li>
              <li><a href="#servizi" className="footer-link">Approccio Boutique</a></li>
              <li><a href="#recensioni" className="footer-link">Recensioni Verificate Clienti</a></li>
              <li><a href="#calcolatore" className="footer-link">Simulatore Rata Mutuo</a></li>
              <li><a href="#contatti" className="footer-link">Richiesta Stima Gratuita</a></li>
            </ul>
          </div>

          {/* Col 4: Note Legali & Canali Social */}
          <div>
            <h3 className="footer-title">Informazioni Legali</h3>
            <ul className="footer-links">
              <li><Link href="/privacy" className="footer-link">Informativa sulla Privacy</Link></li>
              <li><Link href="/cookie" className="footer-link">Gestione e Cookie Policy</Link></li>
              <li><Link href="/termini" className="footer-link">Termini e Condizioni di Servizio</Link></li>
            </ul>

            <div style={{ marginTop: '1.5rem', padding: '0.85rem', background: 'rgba(255,255,255,0.04)', borderRadius: 'var(--border-radius-sm)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-primary-subtle)', display: 'block', marginBottom: '0.35rem' }}>
                Canali Social
              </span>
              <p style={{ fontSize: '0.75rem', color: 'var(--color-gray-400)', margin: 0, lineHeight: 1.4 }}>
                I canali social ufficiali (Facebook, Instagram, LinkedIn) sono in corso di allineamento e verifica. Nessun link promozionale non verificato è inserito.
              </p>
            </div>
          </div>
        </div>

        {/* Corporate Legal Identifiers Panel */}
        <div className="footer-legal-panel">
          <p style={{ marginBottom: '0.4rem', color: '#FFFFFF', fontWeight: 600 }}>
            Dati Societari Ufficiali (Fonte Verificabile):
          </p>
          <p style={{ margin: 0 }}>
            Veneto case srl • C/F e P.IVA: 04497920282 • Capitale sociale: € 15.000,00 i.v. • REA n. 394571 Reg. Imprese di Padova n. 04497920282
          </p>
          <p style={{ marginTop: '0.5rem', color: 'var(--color-primary-subtle)', fontSize: '0.75rem', margin: 0 }}>
            Avvertenza di Progetto: Questa interfaccia rappresenta una proposta concettuale e dimostrativa indipendente e non sostituisce il portale ufficiale di Veneto Case. Non raccoglie dati personali reali a fini commerciali.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div>
            © {currentYear} Veneto Case srl. Tutti i diritti riservati.
          </div>
          <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
            <Link href="/privacy" className="footer-link" style={{ fontSize: '0.8rem' }}>Privacy</Link>
            <Link href="/cookie" className="footer-link" style={{ fontSize: '0.8rem' }}>Cookie</Link>
            <Link href="/termini" className="footer-link" style={{ fontSize: '0.8rem' }}>Termini</Link>
            <span style={{ color: 'var(--color-gray-500)', fontSize: '0.8rem' }}>Codice Riferimento Proposta #16</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
