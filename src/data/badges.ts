import { Badge } from '../types';

/**
 * Badge data for each Point of Interest (POI) in Bad Belzig
 * Each badge is awarded when a user completes the corresponding quiz with a perfect score
 */

export const badges: Badge[] = [
  {
    id: 'badge-burg-eisenhardt',
    poiId: 'burg-eisenhardt',
    names: {
      en: 'Castle Explorer',
      de: 'Burgentdecker'
    },
    descriptions: {
      en: 'Awarded for mastering knowledge about Burg Eisenhardt, the medieval castle of Bad Belzig.',
      de: 'Verliehen für die Beherrschung des Wissens über die Burg Eisenhardt, die mittelalterliche Burg von Bad Belzig.'
    },
    imageUrl: '/badges/burg-eisenhardt.svg'
  },
  {
    id: 'badge-steintherme',
    poiId: 'steintherme',
    names: {
      en: 'Thermal Expert',
      de: 'Thermalexperte'
    },
    descriptions: {
      en: 'Awarded for mastering knowledge about SteinTherme, the thermal bath complex of Bad Belzig.',
      de: 'Verliehen für die Beherrschung des Wissens über die SteinTherme, den Thermalbadkomplex von Bad Belzig.'
    },
    imageUrl: '/badges/steintherme.svg'
  },
  {
    id: 'badge-marktplatz',
    poiId: 'marktplatz',
    names: {
      en: 'Market Connoisseur',
      de: 'Marktkenner'
    },
    descriptions: {
      en: 'Awarded for mastering knowledge about the historic Market Square of Bad Belzig.',
      de: 'Verliehen für die Beherrschung des Wissens über den historischen Marktplatz von Bad Belzig.'
    },
    imageUrl: '/badges/marktplatz.svg'
  },
  {
    id: 'badge-rathaus',
    poiId: 'rathaus',
    names: {
      en: 'Town Hall Scholar',
      de: 'Rathausgelehrter'
    },
    descriptions: {
      en: 'Awarded for mastering knowledge about the Town Hall of Bad Belzig.',
      de: 'Verliehen für die Beherrschung des Wissens über das Rathaus von Bad Belzig.'
    },
    imageUrl: '/badges/rathaus.svg'
  },
  {
    id: 'badge-st-marienkirche',
    poiId: 'st-marienkirche',
    names: {
      en: 'Church Historian',
      de: 'Kirchenhistoriker'
    },
    descriptions: {
      en: 'Awarded for mastering knowledge about St. Mary\'s Church in Bad Belzig.',
      de: 'Verliehen für die Beherrschung des Wissens über die St. Marienkirche in Bad Belzig.'
    },
    imageUrl: '/badges/st-marienkirche.svg'
  },
  {
    id: 'badge-bricciuskapelle',
    poiId: 'bricciuskapelle',
    names: {
      en: 'Chapel Guardian',
      de: 'Kapellenhüter'
    },
    descriptions: {
      en: 'Awarded for mastering knowledge about the Briccius Chapel on the castle grounds.',
      de: 'Verliehen für die Beherrschung des Wissens über die Bricciuskapelle auf dem Burggelände.'
    },
    imageUrl: '/badges/bricciuskapelle.svg'
  },
  {
    id: 'badge-heimatmuseum',
    poiId: 'heimatmuseum',
    names: {
      en: 'Museum Curator',
      de: 'Museumskurator'
    },
    descriptions: {
      en: 'Awarded for mastering knowledge about the local history museum of Bad Belzig.',
      de: 'Verliehen für die Beherrschung des Wissens über das Heimatmuseum von Bad Belzig.'
    },
    imageUrl: '/badges/heimatmuseum.svg'
  },
  {
    id: 'badge-postmeilensaule',
    poiId: 'postmeilensaule',
    names: {
      en: 'Postal Historian',
      de: 'Posthistoriker'
    },
    descriptions: {
      en: 'Awarded for mastering knowledge about the Saxon Post Milestone in Bad Belzig.',
      de: 'Verliehen für die Beherrschung des Wissens über die Sächsische Postmeilensäule in Bad Belzig.'
    },
    imageUrl: '/badges/postmeilensaule.svg'
  },
  {
    id: 'badge-flaming-bahnhof',
    poiId: 'flaming-bahnhof',
    names: {
      en: 'Railway Master',
      de: 'Bahnhofsmeister'
    },
    descriptions: {
      en: 'Awarded for mastering knowledge about the Fläming-Bahnhof railway station of Bad Belzig.',
      de: 'Verliehen für die Beherrschung des Wissens über den Fläming-Bahnhof von Bad Belzig.'
    },
    imageUrl: '/badges/flaming-bahnhof.svg'
  },
  {
    id: 'badge-reissiger-haus',
    poiId: 'reissiger-haus',
    names: {
      en: 'Music Historian',
      de: 'Musikhistoriker'
    },
    descriptions: {
      en: 'Awarded for mastering knowledge about the Reißiger-Haus, named after the composer Carl Gottlieb Reißiger.',
      de: 'Verliehen für die Beherrschung des Wissens über das Reißiger-Haus, benannt nach dem Komponisten Carl Gottlieb Reißiger.'
    },
    imageUrl: '/badges/reissiger-haus.svg'
  }
];
