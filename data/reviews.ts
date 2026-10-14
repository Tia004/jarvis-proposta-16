export interface Review {
  id: string;
  author: string;
  period: string;
  branch: string;
  text: string;
  rating: number;
  source: string;
}

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Donatella S.',
    period: '2 mesi fa',
    branch: 'Veneto Case - Forcellini',
    text: 'Ottima esperienza, siamo stati seguiti dall’inizio alla fine con estrema cura nei dettagli. Foto tra l’altro di ottima qualità. Super consigliati.',
    rating: 5,
    source: 'Google Reviews'
  },
  {
    id: 'rev-2',
    author: 'Stefano V.',
    period: '3 mesi fa',
    branch: 'Veneto Case - Noventa Padovana',
    text: 'Alberto di veneto case è stato gentile, disponibile e professionale. Era la nostra prima esperienza nel comprare casa ed è andato tutto benissimo.',
    rating: 5,
    source: 'Google Reviews'
  },
  {
    id: 'rev-3',
    author: 'Giulia Z.',
    period: '5 mesi fa',
    branch: 'Veneto Case - Noventa Padovana',
    text: 'Consiglio questa agenzia molto seria e precisa. Soprattutto Alberto come agente immobiliare è il Top! Risolve ogni problema e ti porta velocemente alla stipula in maniera sicura controllando la documentazione dalla a alla z.',
    rating: 5,
    source: 'Google Reviews'
  },
  {
    id: 'rev-4',
    author: 'Marzia B.',
    period: '7 mesi fa',
    branch: 'Veneto Case - Forcellini',
    text: 'Esperienza assolutamente positiva: Stefano ha saputo individuare fin da subito le nostre esigenze e ci ha seguiti con grande disponibilità e competenza fino all’acquisto della nostra prima casa, supportandoci in tempo reale anche durante gli incontri con banca e notaio. Abbiamo avuto il piacere di conoscere anche Mattia, altrettanto disponibile e competente, che ha seguito i venditori. Professionisti non solo capaci ma anche umani e simpatici, è stato un piacere conoscerli.',
    rating: 5,
    source: 'Google Reviews'
  },
  {
    id: 'rev-5',
    author: 'Cesare B.',
    period: '8 mesi fa',
    branch: 'Veneto Case - Noventa Padovana',
    text: 'Consiglio vivamente questa agenzia immobiliare a chiunque sia alla ricerca di un servizio professionale, trasparente e affidabile. Sono stato seguito da Alberto in cui si è dimostrato un vero esperto del settore!',
    rating: 5,
    source: 'Google Reviews'
  },
  {
    id: 'rev-6',
    author: 'Marco P.',
    period: '8 mesi fa',
    branch: 'Veneto Case - Roncaglia',
    text: 'Consiglio vivamente la filiale di Roncaglia, dove si trovano professionisti competenti e sempre disponibili. Pur avendo una situazione con delle piccole complicanze sono riusciti ad organizzare al meglio tutto per arrivare al miglior risultato. Una nota di merito speciale a Caterina e Alfredo.',
    rating: 5,
    source: 'Google Reviews'
  },
  {
    id: 'rev-7',
    author: 'Slavica Z.',
    period: '9 mesi fa',
    branch: 'Veneto Case - Forcellini',
    text: 'Ho venduto casa con l’aiuto di Mattia ed è stata un’esperienza decisamente positiva. Mi ha anche aiutato a trovare la casa nuova. Sempre disponibile, chiaro nelle spiegazioni, gentile e super professionale. Ci ha seguiti passo dopo passo con pazienza e senza pressioni. Un servizio davvero umano e competente!',
    rating: 5,
    source: 'Google Reviews'
  },
  {
    id: 'rev-8',
    author: 'Antonella P.',
    period: '9 mesi fa',
    branch: 'Veneto Case - Forcellini',
    text: 'Seguita da Veneto Case Forcellini per ben due volte in pochi anni per prima acquisto e poi vendita di appartamento causa trasferimento. In entrambi i casi professionalità, disponibilità e problem solving eccellenti. In particolare un ringraziamento a Stefano, sempre sul pezzo con eleganza e simpatia. Grazie di cuore per tutto.',
    rating: 5,
    source: 'Google Reviews'
  },
  {
    id: 'rev-9',
    author: 'Federico P.',
    period: '10 mesi fa',
    branch: 'Veneto Case - Forcellini',
    text: 'Conoscevo già Mattia per una ricerca purtroppo non andata a buon fine anni fa ed avevo avuto una buona impressione. Questa volta con Stefano e Maia abbiamo concluso. Confermo in pieno la prima impressione, ottima collaborazione e con un po’ di pazienza e perseveranza alla fine abbiamo raggiunto il risultato sperato! Grazie per l’impegno.',
    rating: 5,
    source: 'Google Reviews'
  }
];
