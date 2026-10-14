export interface Branch {
  id: string;
  name: string;
  city: string;
  province: string;
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  hours: string;
  zone: string;
}

export const BRANCHES: Branch[] = [
  {
    id: 'camin',
    name: 'Filiale Camin',
    city: 'Padova',
    province: 'PD',
    address: 'Via Vigonovese, Camin (Padova Est)',
    phone: '049 0990593',
    whatsapp: '+393279474598',
    email: 'camin@venetocase.it',
    hours: 'Lun - Ven: 09:00 - 12:30, 15:00 - 19:30 | Sab: su appuntamento',
    zone: 'Padova Est e cintura urbana'
  },
  {
    id: 'dolo',
    name: 'Filiale Dolo',
    city: 'Dolo',
    province: 'VE',
    address: 'Riviera del Brenta, Dolo',
    phone: '041 9690091',
    whatsapp: '+393279474598',
    email: 'camin@venetocase.it',
    hours: 'Lun - Ven: 09:00 - 12:30, 15:00 - 19:30 | Sab: su appuntamento',
    zone: 'Riviera del Brenta e Venezia terraferma'
  },
  {
    id: 'forcellini',
    name: 'Filiale Forcellini',
    city: 'Padova',
    province: 'PD',
    address: 'Quartiere Forcellini, Padova',
    phone: '049 0990593',
    whatsapp: '+393279474598',
    email: 'camin@venetocase.it',
    hours: 'Lun - Ven: 09:00 - 12:30, 15:00 - 19:30 | Sab: su appuntamento',
    zone: 'Padova Centro, Ospedali e zona Universitaria'
  },
  {
    id: 'fosso',
    name: 'Filiale Fossò',
    city: 'Fossò',
    province: 'VE',
    address: 'Centro, Fossò',
    phone: '041 9690091',
    whatsapp: '+393279474598',
    email: 'camin@venetocase.it',
    hours: 'Lun - Ven: 09:00 - 12:30, 15:00 - 19:30 | Sab: su appuntamento',
    zone: 'Area Veneziana, Camponogara e Vigonovo'
  },
  {
    id: 'noventa',
    name: 'Filiale Noventa Padovana',
    city: 'Noventa Padovana',
    province: 'PD',
    address: 'Piazza Europa / Centro, Noventa Padovana',
    phone: '049 0990593',
    whatsapp: '+393279474598',
    email: 'camin@venetocase.it',
    hours: 'Lun - Ven: 09:00 - 12:30, 15:00 - 19:30 | Sab: su appuntamento',
    zone: 'Noventa Padovana, Stra, Vigonza'
  },
  {
    id: 'piove',
    name: 'Filiale Piove di Sacco',
    city: 'Piove di Sacco',
    province: 'PD',
    address: 'Saccisica Centro, Piove di Sacco',
    phone: '049 0990593',
    whatsapp: '+393279474598',
    email: 'camin@venetocase.it',
    hours: 'Lun - Ven: 09:00 - 12:30, 15:00 - 19:30 | Sab: su appuntamento',
    zone: 'Piovese, Arzergrande, Brugine, Legnaro'
  },
  {
    id: 'roncaglia',
    name: 'Filiale Roncaglia',
    city: 'Ponte San Nicolò',
    province: 'PD',
    address: 'Via Marconi, Roncaglia',
    phone: '049 0990593',
    whatsapp: '+393279474598',
    email: 'camin@venetocase.it',
    hours: 'Lun - Ven: 09:00 - 12:30, 15:00 - 19:30 | Sab: su appuntamento',
    zone: 'Roncaglia, Ponte San Nicolò, Albignasego'
  }
];
