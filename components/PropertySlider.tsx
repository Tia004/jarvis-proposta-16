'use client';

import React, { useState, useRef, useMemo } from 'react';
import Image from 'next/image';
import { Property, PROPERTIES } from '@/data/properties';
import PropertyModal from './PropertyModal';

interface PropertySliderProps {
  externalFilter?: {
    typology: string;
    location: string;
    maxPrice: number;
  } | null;
}

export default function PropertySlider({ externalFilter }: PropertySliderProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('tutti');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const sliderRef = useRef<HTMLDivElement>(null);

  // Filter computation
  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter((prop) => {
      // External search filter from hero if present
      if (externalFilter) {
        if (externalFilter.typology !== 'tutti' && prop.category !== externalFilter.typology) {
          return false;
        }
        if (externalFilter.location !== 'tutti' && !prop.location.toLowerCase().includes(externalFilter.location.toLowerCase())) {
          return false;
        }
        if (prop.price > externalFilter.maxPrice) {
          return false;
        }
      }

      // Local Tab Category
      if (selectedCategory === 'classe-a4' && prop.energyClass !== 'A4') {
        return false;
      }
      if (selectedCategory === 'padova' && prop.province !== 'Padova') {
        return false;
      }
      if (selectedCategory === 'venezia' && prop.province !== 'Venezia') {
        return false;
      }
      if (selectedCategory === 'bifamiliari' && prop.category !== 'bifamiliare' && prop.category !== 'villa') {
        return false;
      }

      // Local Search Query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesTitle = prop.title.toLowerCase().includes(q);
        const matchesLoc = prop.location.toLowerCase().includes(q);
        const matchesRif = prop.rif.toLowerCase().includes(q);
        const matchesDesc = prop.description.toLowerCase().includes(q);
        if (!matchesTitle && !matchesLoc && !matchesRif && !matchesDesc) {
          return false;
        }
      }

      return true;
    });
  }, [externalFilter, selectedCategory, searchQuery]);

  // Controllable slider handlers
  const scrollSlider = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = 380;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleKeyDownSlider = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      scrollSlider('left');
    } else if (e.key === 'ArrowRight') {
      scrollSlider('right');
    }
  };

  return (
    <section id="immobili" className="section-wrapper" aria-labelledby="portfolio-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <i className="bi bi-patch-check" aria-hidden="true"></i>
            Portfolio Immobili
          </span>
          <h2 id="portfolio-heading" className="section-title">
            Opportunità Selezionate, Aggiornate e Verificate
          </h2>
          <p className="section-subtitle">
            Non accumuliamo centinaia di annunci generici. Selezioniamo solo residenze con verifiche di conformità catastale già eseguite o in corso avanzato.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="portfolio-controls">
          <div className="filter-tabs" role="tablist" aria-label="Categorie portfolio">
            {[
              { id: 'tutti', label: 'Tutti gli Immobili' },
              { id: 'classe-a4', label: 'Nuove Costruzioni (A4)' },
              { id: 'padova', label: 'Provincia di Padova' },
              { id: 'venezia', label: 'Venezia & Riviera' },
              { id: 'bifamiliari', label: 'Bifamiliari & Ville' }
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={selectedCategory === tab.id}
                className={`filter-tab-btn ${selectedCategory === tab.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            {/* Search Input */}
            <div style={{ position: 'relative', minWidth: '220px' }}>
              <input
                type="text"
                placeholder="Cerca per RIF, comune o zona..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  padding: '0.55rem 0.85rem 0.55rem 2.2rem',
                  fontSize: '0.875rem',
                  border: '1px solid var(--color-gray-300)',
                  borderRadius: 'var(--border-radius-full)',
                  width: '100%',
                  outline: 'none'
                }}
                aria-label="Cerca immobile"
              />
              <i
                className="bi bi-search"
                style={{
                  position: 'absolute',
                  left: '0.8rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--color-gray-400)',
                  fontSize: '0.85rem'
                }}
                aria-hidden="true"
              ></i>
            </div>

            {/* Slider Navigation Buttons */}
            <div className="slider-navigation-btns">
              <button
                type="button"
                className="slider-nav-btn"
                onClick={() => scrollSlider('left')}
                aria-label="Scorri indietro immobili"
              >
                <i className="bi bi-arrow-left" aria-hidden="true"></i>
              </button>
              <button
                type="button"
                className="slider-nav-btn"
                onClick={() => scrollSlider('right')}
                aria-label="Scorri avanti immobili"
              >
                <i className="bi bi-arrow-right" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Property Carousel Track */}
        {filteredProperties.length > 0 ? (
          <div
            ref={sliderRef}
            className="property-slider-track"
            tabIndex={0}
            onKeyDown={handleKeyDownSlider}
            role="region"
            aria-label="Slider carosello immobili selezionati"
          >
            {filteredProperties.map((prop) => (
              <article key={prop.id} className="property-card" aria-label={prop.title}>
                {/* Media Container */}
                <div className="property-card-media">
                  <Image
                    src={prop.image}
                    alt={prop.title}
                    fill
                    className="property-card-img"
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 400px"
                  />
                  <div className="property-card-badge-energy">
                    Classe {prop.energyClass}
                  </div>
                  <div className="property-card-badge-status">
                    {prop.status}
                  </div>
                </div>

                {/* Card Content */}
                <div className="property-card-body">
                  <div className="property-card-rif">
                    <span>RIF: {prop.rif}</span>
                  </div>

                  <h3 className="property-card-title">
                    {prop.title}
                  </h3>

                  <div className="property-card-location">
                    <i className="bi bi-geo-alt" style={{ color: 'var(--color-primary)' }} aria-hidden="true"></i>
                    <span>{prop.location}</span>
                  </div>

                  {/* Property Specs Metric Grid */}
                  <div className="property-card-metrics">
                    <div className="metric-item">
                      <i className="bi bi-door-closed" aria-hidden="true"></i>
                      <span className="metric-value">{prop.rooms}</span>
                      <span className="metric-label">Camere</span>
                    </div>
                    <div className="metric-item">
                      <i className="bi bi-droplet" aria-hidden="true"></i>
                      <span className="metric-value">{prop.bathrooms}</span>
                      <span className="metric-label">Bagni</span>
                    </div>
                    <div className="metric-item">
                      <i className="bi bi-aspect-ratio" aria-hidden="true"></i>
                      <span className="metric-value">{prop.sqm} m²</span>
                      <span className="metric-label">Superficie</span>
                    </div>
                  </div>

                  {/* Footer & Actions */}
                  <div className="property-card-footer">
                    <span className="property-card-price">
                      {prop.priceLabel}
                    </span>

                    <button
                      type="button"
                      className="btn btn-secondary btn-sm"
                      onClick={() => setSelectedProperty(prop)}
                      aria-label={`Visualizza dettagli per ${prop.title}`}
                    >
                      <span>Dettagli</span>
                      <i className="bi bi-arrow-up-right" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div
            style={{
              padding: '4rem 2rem',
              textAlign: 'center',
              backgroundColor: 'var(--color-gray-50)',
              borderRadius: 'var(--border-radius-lg)',
              border: '1px dashed var(--color-gray-300)'
            }}
          >
            <i className="bi bi-search" style={{ fontSize: '2.5rem', color: 'var(--color-gray-400)', display: 'block', marginBottom: '1rem' }} aria-hidden="true"></i>
            <h3 style={{ marginBottom: '0.5rem', color: 'var(--color-dark-800)' }}>
              Nessun immobile corrisponde ai criteri impostati
            </h3>
            <p style={{ color: 'var(--color-dark-500)', maxWidth: '480px', margin: '0 auto 1.5rem' }}>
              Prova a reimpostare i filtri di ricerca oppure contattaci direttamente: potremmo avere in acquisizione soluzioni riservate non ancora pubblicate.
            </p>
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={() => {
                setSelectedCategory('tutti');
                setSearchQuery('');
              }}
            >
              <i className="bi bi-arrow-counterclockwise" aria-hidden="true"></i>
              <span>Reimposta Tutti i Filtri</span>
            </button>
          </div>
        )}
      </div>

      {/* Property Quick View Modal */}
      <PropertyModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
      />
    </section>
  );
}
