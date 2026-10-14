'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = ['home', 'immobili', 'processo', 'servizi', 'filiali', 'recensioni', 'calcolatore', 'contatti'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard trap and ESC handling for mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Immobili Selezionati', href: '#immobili', id: 'immobili' },
    { label: 'Metodo & Processo', href: '#processo', id: 'processo' },
    { label: 'Servizi Boutique', href: '#servizi', id: 'servizi' },
    { label: 'Filiali Veneto', href: '#filiali', id: 'filiali' },
    { label: 'Recensioni Verificate', href: '#recensioni', id: 'recensioni' },
    { label: 'Team Referenti', href: '#team', id: 'team' },
    { label: 'Calcola Mutuo', href: '#calcolatore', id: 'calcolatore' },
    { label: 'Contatti', href: '#contatti', id: 'contatti' },
  ];

  return (
    <>
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`} role="banner">
        <div className="container">
          <div className="navbar-container">
            {/* Brand Logo */}
            <Link href="/" className="brand-link" aria-label="Veneto Case Home">
              <div className="brand-icon" aria-hidden="true">
                <i className="bi bi-buildings"></i>
              </div>
              <div className="brand-text-block">
                <span className="brand-name">
                  Veneto <span>Case</span>
                </span>
                <span className="brand-tagline">Immobili selezionati in Veneto</span>
              </div>
            </Link>

            {/* Desktop Navigation Menu */}
            <nav className="nav-menu-wrapper" role="navigation" aria-label="Navigazione principale">
              <ul className="nav-menu">
                {navLinks.map((item) => (
                  <li key={item.id} className="nav-item">
                    <a
                      href={item.href}
                      className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Actions & WhatsApp Direct CTA */}
            <div className="nav-actions">
              <a
                href="https://wa.me/393279474598?text=Buongiorno%20Veneto%20Case,%20desidero%20informazioni%20sugli%20immobili%20selezionati"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
                aria-label="Contatta su WhatsApp al 3279474598"
              >
                <i className="bi bi-whatsapp" aria-hidden="true"></i>
                <span>WhatsApp</span>
              </a>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                className="mobile-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? 'Chiudi menu' : 'Apri menu di navigazione'}
              >
                <i className={mobileMenuOpen ? 'bi bi-x-lg' : 'bi bi-list'} aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu di navigazione mobile"
      >
        <div className="container">
          <ul className="mobile-nav-list">
            {navLinks.map((item) => (
              <li key={item.id} className="mobile-nav-item">
                <a
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{item.label}</span>
                  <i className="bi bi-chevron-right" aria-hidden="true"></i>
                </a>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <a
              href="tel:+393279474598"
              className="btn btn-secondary btn-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              <i className="bi bi-telephone" aria-hidden="true"></i>
              <span>Chiama Filiale (+39 327 9474598)</span>
            </a>
            <a
              href="#contatti"
              className="btn btn-primary btn-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              <i className="bi bi-envelope" aria-hidden="true"></i>
              <span>Richiedi Valutazione Gratuita</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
