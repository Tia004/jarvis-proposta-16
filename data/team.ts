export interface TeamMember {
  id: string;
  name: string;
  role: string;
  branch: string;
  specialization: string;
  sourceVerification: string;
  bio: string;
}

export const VERIFIED_TEAM: TeamMember[] = [
  {
    id: 'alberto',
    name: 'Alberto',
    role: 'Consulente Senior & Property Specialist',
    branch: 'Filiale Noventa Padovana',
    specialization: 'Compravendite residenziali e gestione contrattuale sicura',
    sourceVerification: 'Menzione verificata in recensioni pubbliche Google (clienti Stefano V., Giulia Z., Cesare B.)',
    bio: 'Punto di riferimento per le famiglie a Noventa Padovana e cintura est. Riconosciuto per precisione, controllo documentale e accompagnamento sicuro alla stipula notarile.'
  },
  {
    id: 'stefano',
    name: 'Stefano',
    role: 'Consulente Immobiliare Senior',
    branch: 'Filiale Forcellini (Padova)',
    specialization: 'Acquisto prima casa, intermediazione di pregio e assistenza mutui',
    sourceVerification: 'Menzione verificata in recensioni pubbliche Google (clienti Marzia B., Antonella P., Federico P.)',
    bio: 'Specialista nel mercato residenziale di Padova. Segue acquirenti e venditori con disponibilità costante, supportando ogni passaggio con notaio e banche.'
  },
  {
    id: 'mattia',
    name: 'Mattia',
    role: 'Advisor Vendite & Acquisizioni',
    branch: 'Filiale Forcellini (Padova)',
    specialization: 'Stime analitiche, gestione compravendite contestuali vendita/acquisto',
    sourceVerification: 'Menzione verificata in recensioni pubbliche Google (clienti Marzia B., Slavica Z., Federico P.)',
    bio: 'Consulente empatico e meticoloso, affianca i venditori nella corretta valorizzazione dell’immobile e nella transizione serena verso la nuova abitazione.'
  },
  {
    id: 'caterina',
    name: 'Caterina',
    role: 'Consulente Immobiliare & Relazioni Clienti',
    branch: 'Filiale Roncaglia (Ponte San Nicolò)',
    specialization: 'Gestione pratiche complesse e compravendite territoriali',
    sourceVerification: 'Menzione verificata in recensioni pubbliche Google (cliente Marco P.)',
    bio: 'Competenza e ascolto attivo per valorizzare immobili e risolvere criticità tecniche ed amministrative con tempestività e trasparenza.'
  },
  {
    id: 'alfredo',
    name: 'Alfredo',
    role: 'Consulente Tecnico & Negoziazione',
    branch: 'Filiale Roncaglia (Ponte San Nicolò)',
    specialization: 'Verifiche catastali, conformità urbanistica e negoziazione',
    sourceVerification: 'Menzione verificata in recensioni pubbliche Google (cliente Marco P.)',
    bio: 'Profondo conoscitore delle normative edilizie venete e della negoziazione tra le parti, garantisce transazioni protette ed equilibrate.'
  },
  {
    id: 'maia',
    name: 'Maia',
    role: 'Assistente di Filiale & Coordinamento Operativo',
    branch: 'Filiale Forcellini (Padova)',
    specialization: 'Coordinamento documentale e customer care',
    sourceVerification: 'Menzione verificata in recensioni pubbliche Google (cliente Federico P.)',
    bio: 'Coordina l’iter amministrativo e la comunicazione tra agenzia, clienti e professionisti con attenzione costante ai dettagli.'
  }
];
