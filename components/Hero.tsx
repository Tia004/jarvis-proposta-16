'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface HeroProps {
  onSearch: (filters: { typology: string; location: string; maxPrice: number }) => void;
}

export default function Hero({ onSearch }: HeroProps) {
  const [typology, setTypology] = useState('tutti');
  const [location, setLocation] = useState('tutti');
  const [maxPrice, setMaxPrice] = useState(500000);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ typology, location, maxPrice });
    const target = document.getElementById('immobili');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section" aria-label="Introduzione e ricerca immobili">
      {/* Background Media */}
      <div className="hero-background-media" aria-hidden="true">
        <Image
          src="/images/hero_villa.jpg"
          alt="Villa moderna di pregio in Veneto"
          fill
          priority
          className="hero-bg-img"
          sizes="100vw"
        />
        <div className="hero-gradient-overlay"></div>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        <div className="hero-content">
          {/* Eyebrow Pill */}
          <div className="hero-pill">
            <i className="bi bi-shield-check" aria-hidden="true"></i>
            <span>Approccio Boutique: Pochi Immobili, Qualità Certificata</span>
          </div>

          {/* Editorial Headline */}
          <h1 className="hero-title">
            Scegli dove vivere, al resto <em>pensiamo noi</em>.
          </h1>

          <p className="hero-description">
            Immobili residenziali e di pregio a Padova, Venezia e lungo la Riviera del Brenta.
            Consulenza tecnica, stima di mercato reale e assistenza contrattuale completa fino al rogito notarile.
          </p>

          {/* Hero CTAs */}
          <div className="hero-buttons">
            <a href="#immobili" className="btn btn-primary btn-lg">
              <i className="bi bi-search" aria-hidden="true"></i>
              <span>Esplora Immobili Selezionati</span>
            </a>
            <a href="#contatti" className="btn btn-secondary btn-lg" style={{ backgroundColor: 'rgba(255,255,255,0.92)' }}>
              <i className="bi bi-calculator" aria-hidden="true"></i>
              <span>Richiedi Valutazione Gratuita</span>
            </a>
          </div>

          {/* Quick Search Filtering Bar */}
          <form className="hero-search-bar" onSubmit={handleSubmit} role="search" aria-label="Cerca immobili per criteri">
            <div className="search-field">
              <label htmlFor="hero-typology">
                <i className="bi bi-house-door" aria-hidden="true"></i>
                <span>Tipologia</span>
              </label>
              <select
                id="hero-typology"
                value={typology}
                onChange={(e) => setTypology(e.target.value)}
              >
                <option value="tutti">Tutte le tipologie</option>
                <option value="appartamento">Appartamento</option>
                <option value="attico">Attico / Ultimo Piano</option>
                <option value="bifamiliare">Bifamiliare / Villa</option>
              </select>
            </div>

            <div className="search-field">
              <label htmlFor="hero-location">
                <i className="bi bi-geo-alt" aria-hidden="true"></i>
                <span>Comune / Area</span>
              </label>
              <select
                id="hero-location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="tutti">Tutte le zone</option>
                <option value="Padova">Padova (Forcellini, Camin)</option>
                <option value="Vigonza">Vigonza / Peraga</option>
                <option value="Noventa Padovana">Noventa Padovana</option>
                <option value="Polverara">Polverara (Saccisica)</option>
                <option value="Saonara">Saonara</option>
                <option value="Venezia">Venezia / Mira (Riviera)</option>
              </select>
            </div>

            <div className="search-field">
              <label htmlFor="hero-price">
                <i className="bi bi-currency-euro" aria-hidden="true"></i>
                <span>Prezzo Massimo</span>
              </label>
              <select
                id="hero-price"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
              >
                <option value={200000}>Fino a € 200.000</option>
                <option value={300000}>Fino a € 300.000</option>
                <option value={350000}>Fino a € 350.000</option>
                <option value={500000}>Fino a € 500.000</option>
                <option value={1000000}>Oltre € 500.000</option>
              </select>
            </div>

            <div className="search-field">
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                <i className="bi bi-funnel" aria-hidden="true"></i>
                <span>Filtra Risultati</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
