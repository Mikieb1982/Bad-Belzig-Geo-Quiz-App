import { POI } from '../types';

/**
 * Points of Interest (POIs) for Bad Belzig
 * 
 * This file contains the data for the 10 POIs in Bad Belzig:
 * 1. Burg Eisenhardt (Castle)
 * 2. SteinTherme (Thermal Bath)
 * 3. Marktplatz (Market Square)
 * 4. Rathaus (Town Hall)
 * 5. St. Marienkirche (St. Mary's Church)
 * 6. Bricciuskapelle (Briccius Chapel)
 * 7. Heimatmuseum (Museum)
 * 8. Sächsische Postmeilensäule (Saxon Post Milestone)
 * 9. Fläming-Bahnhof Bad Belzig (Railway Station)
 * 10. Reißiger-Haus (Historic building)
 */

export const pois: POI[] = [
  {
    id: 'burg-eisenhardt',
    coordinates: {
      latitude: 52.1416,
      longitude: 12.5917
    },
    geofenceRadius: 50, // in meters
    names: {
      en: 'Burg Eisenhardt (Castle)',
      de: 'Burg Eisenhardt'
    },
    descriptions: {
      en: 'A medieval castle dating back to the 12th century, offering panoramic views of Bad Belzig and the surrounding area.',
      de: 'Eine mittelalterliche Burg aus dem 12. Jahrhundert, die einen Panoramablick auf Bad Belzig und die Umgebung bietet.'
    },
    quizId: 'quiz-burg-eisenhardt',
    badgeId: 'badge-burg-eisenhardt'
  },
  {
    id: 'steintherme',
    coordinates: {
      latitude: 52.1372,
      longitude: 12.5967
    },
    geofenceRadius: 50,
    names: {
      en: 'SteinTherme (Thermal Bath)',
      de: 'SteinTherme'
    },
    descriptions: {
      en: 'A modern thermal bath complex offering relaxation and wellness facilities with natural thermal water.',
      de: 'Ein moderner Thermalbadkomplex, der Entspannungs- und Wellnesseinrichtungen mit natürlichem Thermalwasser bietet.'
    },
    quizId: 'quiz-steintherme',
    badgeId: 'badge-steintherme'
  },
  {
    id: 'marktplatz',
    coordinates: {
      latitude: 52.1394,
      longitude: 12.5928
    },
    geofenceRadius: 40,
    names: {
      en: 'Marktplatz (Market Square)',
      de: 'Marktplatz'
    },
    descriptions: {
      en: 'The historic market square in the heart of Bad Belzig, surrounded by colorful buildings and cafes.',
      de: 'Der historische Marktplatz im Herzen von Bad Belzig, umgeben von bunten Gebäuden und Cafés.'
    },
    quizId: 'quiz-marktplatz',
    badgeId: 'badge-marktplatz'
  },
  {
    id: 'rathaus',
    coordinates: {
      latitude: 52.1395,
      longitude: 12.5930
    },
    geofenceRadius: 30,
    names: {
      en: 'Rathaus (Town Hall)',
      de: 'Rathaus'
    },
    descriptions: {
      en: 'The historic town hall of Bad Belzig, an important administrative building with architectural significance.',
      de: 'Das historische Rathaus von Bad Belzig, ein wichtiges Verwaltungsgebäude mit architektonischer Bedeutung.'
    },
    quizId: 'quiz-rathaus',
    badgeId: 'badge-rathaus'
  },
  {
    id: 'st-marienkirche',
    coordinates: {
      latitude: 52.1399,
      longitude: 12.5925
    },
    geofenceRadius: 40,
    names: {
      en: "St. Mary's Church",
      de: 'St. Marienkirche'
    },
    descriptions: {
      en: 'A beautiful church with a rich history, featuring impressive architecture and religious artifacts.',
      de: 'Eine wunderschöne Kirche mit einer reichen Geschichte, die durch beeindruckende Architektur und religiöse Artefakte besticht.'
    },
    quizId: 'quiz-st-marienkirche',
    badgeId: 'badge-st-marienkirche'
  },
  {
    id: 'bricciuskapelle',
    coordinates: {
      latitude: 52.1418,
      longitude: 12.5915
    },
    geofenceRadius: 30,
    names: {
      en: 'Briccius Chapel',
      de: 'Bricciuskapelle'
    },
    descriptions: {
      en: 'A historic chapel located on the castle grounds, named after Saint Briccius.',
      de: 'Eine historische Kapelle auf dem Burggelände, benannt nach dem Heiligen Briccius.'
    },
    quizId: 'quiz-bricciuskapelle',
    badgeId: 'badge-bricciuskapelle'
  },
  {
    id: 'heimatmuseum',
    coordinates: {
      latitude: 52.1415,
      longitude: 12.5920
    },
    geofenceRadius: 30,
    names: {
      en: 'Heimatmuseum (Museum)',
      de: 'Heimatmuseum'
    },
    descriptions: {
      en: 'A local history museum located in the castle gatehouse, showcasing the cultural heritage of Bad Belzig.',
      de: 'Ein Heimatmuseum im Torhaus der Burg, das das kulturelle Erbe von Bad Belzig präsentiert.'
    },
    quizId: 'quiz-heimatmuseum',
    badgeId: 'badge-heimatmuseum'
  },
  {
    id: 'postmeilensaule',
    coordinates: {
      latitude: 52.1390,
      longitude: 12.5935
    },
    geofenceRadius: 20,
    names: {
      en: 'Saxon Post Milestone',
      de: 'Sächsische Postmeilensäule'
    },
    descriptions: {
      en: 'A historic milestone from the Saxon postal system, marking distances to other cities.',
      de: 'Ein historischer Meilenstein aus dem sächsischen Postsystem, der die Entfernungen zu anderen Städten markiert.'
    },
    quizId: 'quiz-postmeilensaule',
    badgeId: 'badge-postmeilensaule'
  },
  {
    id: 'flaming-bahnhof',
    coordinates: {
      latitude: 52.1342,
      longitude: 12.5868
    },
    geofenceRadius: 50,
    names: {
      en: 'Fläming-Bahnhof Bad Belzig (Railway Station)',
      de: 'Fläming-Bahnhof Bad Belzig'
    },
    descriptions: {
      en: 'The railway station of Bad Belzig, connecting the town to Berlin and other destinations.',
      de: 'Der Bahnhof von Bad Belzig, der die Stadt mit Berlin und anderen Zielen verbindet.'
    },
    quizId: 'quiz-flaming-bahnhof',
    badgeId: 'badge-flaming-bahnhof'
  },
  {
    id: 'reissiger-haus',
    coordinates: {
      latitude: 52.1397,
      longitude: 12.5940
    },
    geofenceRadius: 30,
    names: {
      en: 'Reißiger-Haus (Historic building)',
      de: 'Reißiger-Haus'
    },
    descriptions: {
      en: 'A historic building named after Carl Gottlieb Reißiger, a notable composer from the region.',
      de: 'Ein historisches Gebäude, benannt nach Carl Gottlieb Reißiger, einem bedeutenden Komponisten aus der Region.'
    },
    quizId: 'quiz-reissiger-haus',
    badgeId: 'badge-reissiger-haus'
  }
];
