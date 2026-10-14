export interface Property {
  id: string;
  rif: string;
  title: string;
  price: number;
  priceLabel: string;
  location: string;
  province: string;
  comune: string;
  zone: string;
  category: 'appartamento' | 'villa' | 'attico' | 'bifamiliare' | 'rustico';
  energyClass: 'A4' | 'A3' | 'A' | 'B' | 'C' | 'D' | 'F' | 'G';
  rooms: number;
  bathrooms: number;
  sqm: number;
  image: string;
  description: string;
  features: string[];
  isFeatured: boolean;
  status: 'Disponibile' | 'Trattativa Riservata' | 'Nuovo Inserimento';
}

export const PROPERTIES: Property[] = [
  {
    id: 'per305',
    rif: 'PER305',
    title: 'Peraga Di Vigonza - Nuovo 3 Camere Con Terrazzo',
    price: 360000,
    priceLabel: '€ 360.000',
    location: 'Italia, Padova, Vigonza, Peraga',
    province: 'Padova',
    comune: 'Vigonza',
    zone: 'Peraga',
    category: 'attico',
    energyClass: 'A4',
    rooms: 3,
    bathrooms: 2,
    sqm: 125,
    image: '/images/prop_vigonzaterrazzo.jpg',
    description: 'Nuovo appartamento all’ultimo piano ad altissima efficienza energetica Classe A4. Ampia zona giorno open-space di 45 mq con vetrata scorrevole che si affaccia su un profondo terrazzo abitabile ideale per pranzi e cene all’aperto. Tre camere da letto, doppi servizi finestrati, garage doppio e riscaldamento a pavimento con pompa di calore.',
    features: [
      'Classe Energetica A4',
      'Terrazzo abitabile panoramico',
      'Riscaldamento a pavimento e fotovoltaico',
      'Doppi servizi con finiture di pregio',
      'Garage doppio motorizzato'
    ],
    isFeatured: true,
    status: 'Nuovo Inserimento'
  },
  {
    id: 'per304',
    rif: 'PER304',
    title: 'Peraga Di Vigonza - Nuovo 3 Camere Con Terrazzo',
    price: 350000,
    priceLabel: '€ 350.000',
    location: 'Italia, Padova, Vigonza, Peraga',
    province: 'Padova',
    comune: 'Vigonza',
    zone: 'Peraga',
    category: 'appartamento',
    energyClass: 'A4',
    rooms: 3,
    bathrooms: 2,
    sqm: 120,
    image: '/images/prop_vigonzaterrazzo.jpg',
    description: 'Elegante soluzione di nuova costruzione in contesto residenziale signorile. Zona living luminosa, terrazzo coperto vivibile, 3 camere spaziose, doppi servizi con sanitari sospesi. Impiantistica d’avanguardia con pannelli solari dedicati e predisposizione VMC (ventilazione meccanica controllata).',
    features: [
      'Classe Energetica A4',
      'Zona residenziale tranquilla e servita',
      'Finiture personalizzabili',
      'Isolamento acustico certificato',
      'Posto auto di proprietà'
    ],
    isFeatured: true,
    status: 'Disponibile'
  },
  {
    id: 'per303',
    rif: 'PER303',
    title: 'Peraga Di Vigonza - Nuovo 3 Camere Con Giardino',
    price: 340000,
    priceLabel: '€ 340.000',
    location: 'Italia, Padova, Vigonza, Peraga',
    province: 'Padova',
    comune: 'Vigonza',
    zone: 'Peraga',
    category: 'appartamento',
    energyClass: 'A4',
    rooms: 3,
    bathrooms: 2,
    sqm: 95,
    image: '/images/hero_villa.jpg',
    description: 'Appartamento esclusivo al piano terra con ampio giardino privato recintato. Ingresso indipendente, soggiorno luminoso con cucina a vista, accesso diretto al porticato esterno. Tre camere, 2 bagni, cantina e garage collegato direttamente.',
    features: [
      'Classe Energetica A4',
      'Giardino privato esclusivo',
      'Ingresso pedonale indipendente',
      'Portico per cene all’aperto',
      'Impianto fotovoltaico 4.5 kW'
    ],
    isFeatured: true,
    status: 'Disponibile'
  },
  {
    id: 'p-091',
    rif: 'P-091',
    title: 'Polverara – Recentissimo 3 Camere Su Unico Livello',
    price: 234000,
    priceLabel: '€ 234.000',
    location: 'Italia, Padova, Polverara, Polverara - Centro',
    province: 'Padova',
    comune: 'Polverara',
    zone: 'Centro',
    category: 'appartamento',
    energyClass: 'A4',
    rooms: 3,
    bathrooms: 2,
    sqm: 115,
    image: '/images/prop_saonara.jpg',
    description: 'Recente costruzione situata nel centro di Polverara, comoda a tutti i servizi. Disposta interamente su un unico livello con finiture moderne extra-capitolato. Tre camere da letto, due bagni, terrazzo vivibile e garage compreso.',
    features: [
      'Classe Energetica A4',
      'Tutto su unico livello al primo piano con ascensore',
      'Centro paese servito',
      'Climatizzazione canalizzata',
      'Spese condominiali minime'
    ],
    isFeatured: true,
    status: 'Disponibile'
  },
  {
    id: 'p-090',
    rif: 'P-090',
    title: 'Polverara – Splendida E Recente Bifamiliare Con 2350 Mq Di Parco',
    price: 349000,
    priceLabel: '€ 349.000',
    location: 'Italia, Padova, Polverara, Polverara - Centro',
    province: 'Padova',
    comune: 'Polverara',
    zone: 'Centro',
    category: 'bifamiliare',
    energyClass: 'A4',
    rooms: 2,
    bathrooms: 2,
    sqm: 270,
    image: '/images/prop_polverarabifamiliare.jpg',
    description: 'Immobile di straordinario pregio e privacy: porzione di bifamiliare immersa in un parco alberato esclusivo di 2.350 mq. Salone con camino termico, cucina abitabile, ampie vetrate sul verde, finiture in pietra e legno naturale. Ampio portico perimetrale, dependance/garage doppio.',
    features: [
      'Parco privato piantumato di 2.350 mq',
      'Classe Energetica A4 certificata',
      'Finiture architettoniche di design',
      'Privacy totale a 2 passi dai servizi',
      'Impianto d’irrigazione automatico con pozzo'
    ],
    isFeatured: true,
    status: 'Nuovo Inserimento'
  },
  {
    id: 'csao351',
    rif: 'CSAO351',
    title: 'Grande Piano Terra Con Tre Camere Da Letto - Saonara',
    price: 340000,
    priceLabel: '€ 340.000',
    location: 'Italia, Padova, Saonara',
    province: 'Padova',
    comune: 'Saonara',
    zone: 'Residenziale',
    category: 'appartamento',
    energyClass: 'A4',
    rooms: 3,
    bathrooms: 2,
    sqm: 140,
    image: '/images/prop_saonara.jpg',
    description: 'Soluzione abitativa di ampia metratura al piano terra con giardino privato curato. Soggiorno di oltre 50 mq, 3 camere matrimoniali, 2 ampi bagni e locale lavanderia separato. Garage doppio in larghezza e posto auto interno recintato.',
    features: [
      'Classe Energetica A4',
      'Ampia metratura calpestabile (140 m²)',
      'Giardino perimetrale privato',
      'Lavanderia dedicata',
      'Serramenti triplo vetro ad alto abbattimento'
    ],
    isFeatured: true,
    status: 'Disponibile'
  },
  {
    id: '436-dmir',
    rif: '436-DMIR',
    title: 'Porzione Accostata Ristrutturata - Mira Riviera del Brenta',
    price: 169000,
    priceLabel: '€ 169.000',
    location: 'Italia, Venezia, Mira',
    province: 'Venezia',
    comune: 'Mira',
    zone: 'Riviera del Brenta',
    category: 'villa',
    energyClass: 'D',
    rooms: 2,
    bathrooms: 1,
    sqm: 85,
    image: '/images/prop_mira.jpg',
    description: 'Caratteristica porzione indipendente completamente ristrutturata a nuovo, situata a Mira nel cuore della splendida Riviera del Brenta. Travi in legno a vista, muratura originale trattata, scoperto privato pavimentato e posto auto coperto.',
    features: [
      'Ristrutturazione completa a nuovo',
      'Travi in legno a vista sbiancate',
      'Nessuna spesa condominiale',
      'Comoda alla stazione e ai vaporetti per Venezia',
      'Impianti certificati a norma'
    ],
    isFeatured: false,
    status: 'Disponibile'
  },
  {
    id: 'con-009',
    rif: 'CON-009',
    title: 'Cantarana: Spaziosa Bifamiliare con Giardino',
    price: 179000,
    priceLabel: '€ 179.000',
    location: 'Italia, Venezia, Cona, Cantarana',
    province: 'Venezia',
    comune: 'Cona',
    zone: 'Cantarana',
    category: 'bifamiliare',
    energyClass: 'G',
    rooms: 7,
    bathrooms: 2,
    sqm: 370,
    image: '/images/prop_cantarana.jpg',
    description: 'Generosa porzione di bifamiliare ideale per famiglie numerose o per chi necessita di spazi per attività artigianali/studio professionale. Ampio giardino privato, 7 vani distribuiti su due livelli, garage triplo e magazzino.',
    features: [
      'Metratura eccezionale di 370 m²',
      'Ideale anche per 2 nuclei familiari',
      'Giardino privato e corte esclusiva',
      'Magazzino annesso di 60 m²',
      'Possibilità di personalizzazione'
    ],
    isFeatured: false,
    status: 'Disponibile'
  },
  {
    id: 'ad-004',
    rif: 'AD - 004',
    title: 'Adria: Bilocale Al Piano Terra - Opportunità di Investimento',
    price: 45000,
    priceLabel: '€ 45.000',
    location: 'Italia, Rovigo, Adria, Adria - Centro',
    province: 'Rovigo',
    comune: 'Adria',
    zone: 'Centro',
    category: 'appartamento',
    energyClass: 'F',
    rooms: 1,
    bathrooms: 1,
    sqm: 42,
    image: '/images/prop_adria.jpg',
    description: 'Ottimo bilocale già arredato al piano terra in pieno centro storico ad Adria. Ingresso su soggiorno con angolo cottura, camera da letto matrimoniale, bagno finestrato. Ottima redditività locativa dimostrabile.',
    features: [
      'Piano terra senza barriere architettoniche',
      'Basse spese di gestione',
      'Posizione centralissima a tutti i servizi',
      'Rendita da locazione elevata',
      'Riscaldamento autonomo'
    ],
    isFeatured: false,
    status: 'Disponibile'
  }
];
