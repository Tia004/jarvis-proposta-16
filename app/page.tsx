'use client';

import React, { useState } from 'react';
import Hero from '@/components/Hero';
import PartnerStrip from '@/components/PartnerStrip';
import PropertySlider from '@/components/PropertySlider';
import ProcessTimeline from '@/components/ProcessTimeline';
import StudioServices from '@/components/StudioServices';
import BranchSelector from '@/components/BranchSelector';
import ReviewFilter from '@/components/ReviewFilter';
import TeamSection from '@/components/TeamSection';
import MortgageCalculator from '@/components/MortgageCalculator';
import ContactForm from '@/components/ContactForm';

export default function HomePage() {
  const [heroSearchFilters, setHeroSearchFilters] = useState<{
    typology: string;
    location: string;
    maxPrice: number;
  } | null>(null);

  const handleHeroSearch = (filters: { typology: string; location: string; maxPrice: number }) => {
    setHeroSearchFilters(filters);
  };

  return (
    <>
      {/* 1. Hero Section with Live Search */}
      <Hero onSearch={handleHeroSearch} />

      {/* 2. KPI Highlights Strip */}
      <section className="kpi-strip" aria-label="Numeri e punti di forza">
        <div className="container">
          <div className="kpi-grid">
            <div className="kpi-card">
              <div className="kpi-icon-wrap" aria-hidden="true">
                <i className="bi bi-geo-alt"></i>
              </div>
              <div>
                <div className="kpi-number">7</div>
                <div className="kpi-label">Filiali Radicate nel Veneto</div>
              </div>
            </div>

            <div className="kpi-card">
              <div className="kpi-icon-wrap" aria-hidden="true">
                <i className="bi bi-patch-check"></i>
              </div>
              <div>
                <div className="kpi-number">A4</div>
                <div className="kpi-label">Nuove Costruzioni Certificate</div>
              </div>
            </div>

            <div className="kpi-card">
              <div className="kpi-icon-wrap" aria-hidden="true">
                <i className="bi bi-shield-check"></i>
              </div>
              <div>
                <div className="kpi-number">100%</div>
                <div className="kpi-label">Conformità Catastale Preventiva</div>
              </div>
            </div>

            <div className="kpi-card">
              <div className="kpi-icon-wrap" aria-hidden="true">
                <i className="bi bi-star"></i>
              </div>
              <div>
                <div className="kpi-number">5.0</div>
                <div className="kpi-label">Valutazione Media Google Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Partner & Portals Strip */}
      <PartnerStrip />

      {/* 4. Portfolio Immobili Selezionati & Controllable Slider */}
      <PropertySlider externalFilter={heroSearchFilters} />

      {/* 5. Processo in 5 Fasi (Metodo Operativo) */}
      <ProcessTimeline />

      {/* 6. Studio & Servizi Boutique */}
      <StudioServices />

      {/* 7. Le 7 Filiali in Veneto */}
      <BranchSelector />

      {/* 8. Recensioni Verificate Google */}
      <ReviewFilter />

      {/* 9. Professionisti del Territorio (Team Verificato) */}
      <TeamSection />

      {/* 10. Calcolatore Interattivo Mutuo */}
      <MortgageCalculator />

      {/* 11. Form di Contatto e Stima con Validazione Client-Side */}
      <ContactForm />
    </>
  );
}
