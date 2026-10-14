'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { Property } from '@/data/properties';

interface PropertyModalProps {
  property: Property | null;
  onClose: () => void;
}

export default function PropertyModal({ property, onClose }: PropertyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (property) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [property, onClose]);

  if (!property) return null;

  const whatsappMessage = encodeURIComponent(
    `Buongiorno Veneto Case, desidero ricevere maggiori informazioni sull'immobile ${property.title} (RIF ${property.rif}) dal prezzo di ${property.priceLabel}.`
  );

  return (
    <div
      className={`modal-overlay ${property ? 'open' : ''}`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-property-title"
      aria-describedby="modal-property-desc"
    >
      <div
        className="modal-dialog"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Chiudi scheda immobile"
        >
          <i className="bi bi-x-lg" aria-hidden="true"></i>
        </button>

        {/* Media Header */}
        <div className="modal-media-header">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="property-card-img"
            sizes="(max-width: 900px) 100vw, 900px"
          />
        </div>

        {/* Body */}
        <div className="modal-content-body">
          <div className="modal-tags">
            <span className="section-tag" style={{ margin: 0 }}>
              RIF: {property.rif}
            </span>
            <span
              className="property-card-badge-energy"
              style={{ position: 'static' }}
            >
              Classe Energetica: {property.energyClass}
            </span>
            <span
              style={{
                background: 'var(--color-gray-100)',
                color: 'var(--color-dark-700)',
                padding: '0.3rem 0.65rem',
                borderRadius: 'var(--border-radius-sm)',
                fontSize: '0.775rem',
                fontWeight: 700
              }}
            >
              Stato: {property.status}
            </span>
          </div>

          <h3 id="modal-property-title" style={{ marginBottom: '0.5rem', color: 'var(--color-dark-800)' }}>
            {property.title}
          </h3>

          <div className="property-card-location" style={{ marginBottom: '1.5rem' }}>
            <i className="bi bi-geo-alt-fill" style={{ color: 'var(--color-primary)' }} aria-hidden="true"></i>
            <span>{property.location}</span>
          </div>

          <div className="property-card-metrics" style={{ marginBottom: '1.5rem' }}>
            <div className="metric-item">
              <i className="bi bi-door-closed" aria-hidden="true"></i>
              <span className="metric-value">{property.rooms}</span>
              <span className="metric-label">Camere da Letto</span>
            </div>
            <div className="metric-item">
              <i className="bi bi-droplet" aria-hidden="true"></i>
              <span className="metric-value">{property.bathrooms}</span>
              <span className="metric-label">Bagni</span>
            </div>
            <div className="metric-item">
              <i className="bi bi-aspect-ratio" aria-hidden="true"></i>
              <span className="metric-value">{property.sqm} m²</span>
              <span className="metric-label">Superficie Commerciale</span>
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Descrizione dell’Immobile</h4>
            <p id="modal-property-desc" style={{ lineHeight: 1.7, color: 'var(--color-dark-600)' }}>
              {property.description}
            </p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ marginBottom: '0.75rem', fontSize: '1.1rem' }}>Caratteristiche e Dotazioni</h4>
            <ul className="modal-feature-list">
              {property.features.map((feat, idx) => (
                <li key={idx} className="modal-feature-item">
                  <i className="bi bi-check-circle-fill" aria-hidden="true"></i>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              borderTop: '1px solid var(--color-gray-200)',
              paddingTop: '1.5rem'
            }}
          >
            <div>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-gray-400)', textTransform: 'uppercase', display: 'block' }}>
                Prezzo Richiesto
              </span>
              <span style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--color-primary)' }}>
                {property.priceLabel}
              </span>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a
                href={`https://wa.me/393279474598?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <i className="bi bi-whatsapp" aria-hidden="true"></i>
                <span>Chiedi su WhatsApp</span>
              </a>
              <a
                href="#contatti"
                onClick={onClose}
                className="btn btn-secondary"
              >
                <i className="bi bi-calendar-event" aria-hidden="true"></i>
                <span>Prenota Visita</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
