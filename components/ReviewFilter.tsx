'use client';

import React, { useState } from 'react';
import { REVIEWS } from '@/data/reviews';

export default function ReviewFilter() {
  const [selectedBranch, setSelectedBranch] = useState<string>('tutte');

  const filteredReviews = REVIEWS.filter((rev) => {
    if (selectedBranch === 'forcellini') return rev.branch.toLowerCase().includes('forcellini');
    if (selectedBranch === 'noventa') return rev.branch.toLowerCase().includes('noventa');
    if (selectedBranch === 'roncaglia') return rev.branch.toLowerCase().includes('roncaglia');
    return true;
  });

  return (
    <section id="recensioni" className="section-wrapper" aria-labelledby="reviews-heading">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">
            <i className="bi bi-star-fill" aria-hidden="true"></i>
            Esperienze Verificate
          </span>
          <h2 id="reviews-heading" className="section-title">
            Cosa Dicono di Noi i Nostri Clienti
          </h2>
          <p className="section-subtitle">
            Recensioni pubbliche rilasciate da acquirenti e venditori che hanno concluso con successo la loro compravendita con i consulenti di Veneto Case.
          </p>

          {/* Filter Pills */}
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.5rem' }}>
            <button
              type="button"
              className={`filter-tab-btn ${selectedBranch === 'tutte' ? 'active' : ''}`}
              onClick={() => setSelectedBranch('tutte')}
            >
              Tutte le Recensioni ({REVIEWS.length})
            </button>
            <button
              type="button"
              className={`filter-tab-btn ${selectedBranch === 'forcellini' ? 'active' : ''}`}
              onClick={() => setSelectedBranch('forcellini')}
            >
              Filiale Forcellini (Padova)
            </button>
            <button
              type="button"
              className={`filter-tab-btn ${selectedBranch === 'noventa' ? 'active' : ''}`}
              onClick={() => setSelectedBranch('noventa')}
            >
              Filiale Noventa Padovana
            </button>
            <button
              type="button"
              className={`filter-tab-btn ${selectedBranch === 'roncaglia' ? 'active' : ''}`}
              onClick={() => setSelectedBranch('roncaglia')}
            >
              Filiale Roncaglia
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="reviews-grid">
          {filteredReviews.map((item) => (
            <article key={item.id} className="review-card" aria-label={`Recensione di ${item.author}`}>
              <div className="review-header">
                <div className="review-author-info">
                  <div className="review-avatar" aria-hidden="true">
                    <span>{item.author.slice(0, 2)}</span>
                  </div>
                  <div>
                    <h3 className="review-author-name">
                      {item.author}
                    </h3>
                    <span className="review-branch">
                      {item.branch}
                    </span>
                  </div>
                </div>

                <div className="review-stars" aria-label={`Valutazione ${item.rating} su 5 stelle`}>
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <i key={i} className="bi bi-star-fill" aria-hidden="true"></i>
                  ))}
                </div>
              </div>

              <blockquote className="review-text">
                &ldquo;{item.text}&rdquo;
              </blockquote>

              <div className="review-footer">
                <span>{item.period}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <i className="bi bi-google" aria-hidden="true"></i>
                  <span>Fonte: {item.source}</span>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
