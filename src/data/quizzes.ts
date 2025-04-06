import { Quiz } from '../types';

/**
 * Quiz data for each Point of Interest (POI) in Bad Belzig
 * Each quiz contains 5 multiple-choice questions with 4 options each
 */

export const quizzes: Quiz[] = [
  {
    id: 'quiz-burg-eisenhardt',
    poiId: 'burg-eisenhardt',
    questions: [
      {
        id: 'burg-eisenhardt-q1',
        questions: {
          en: 'In which century was Burg Eisenhardt originally built?',
          de: 'In welchem Jahrhundert wurde die Burg Eisenhardt ursprünglich erbaut?'
        },
        options: {
          en: ['10th century', '12th century', '14th century', '16th century'],
          de: ['10. Jahrhundert', '12. Jahrhundert', '14. Jahrhundert', '16. Jahrhundert']
        },
        correctOptionIndex: 1
      },
      {
        id: 'burg-eisenhardt-q2',
        questions: {
          en: 'What was the original purpose of Burg Eisenhardt?',
          de: 'Was war der ursprüngliche Zweck der Burg Eisenhardt?'
        },
        options: {
          en: ['Royal residence', 'Military fortress', 'Religious monastery', 'Trading post'],
          de: ['Königliche Residenz', 'Militärische Festung', 'Religiöses Kloster', 'Handelsposten']
        },
        correctOptionIndex: 1
      },
      {
        id: 'burg-eisenhardt-q3',
        questions: {
          en: 'Which architectural style is predominantly featured in Burg Eisenhardt?',
          de: 'Welcher architektonische Stil ist in der Burg Eisenhardt vorherrschend?'
        },
        options: {
          en: ['Baroque', 'Renaissance', 'Gothic', 'Romanesque'],
          de: ['Barock', 'Renaissance', 'Gotik', 'Romanik']
        },
        correctOptionIndex: 3
      },
      {
        id: 'burg-eisenhardt-q4',
        questions: {
          en: 'What is housed in the castle today?',
          de: 'Was befindet sich heute in der Burg?'
        },
        options: {
          en: ['A hotel', 'A museum', 'Government offices', 'Private residences'],
          de: ['Ein Hotel', 'Ein Museum', 'Regierungsbüros', 'Privatwohnungen']
        },
        correctOptionIndex: 0
      },
      {
        id: 'burg-eisenhardt-q5',
        questions: {
          en: 'What is the name of the chapel located on the castle grounds?',
          de: 'Wie heißt die Kapelle auf dem Burggelände?'
        },
        options: {
          en: ['St. Peter Chapel', 'Briccius Chapel', 'Maria Chapel', 'Castle Chapel'],
          de: ['St. Peter Kapelle', 'Bricciuskapelle', 'Marienkapelle', 'Burgkapelle']
        },
        correctOptionIndex: 1
      }
    ]
  },
  {
    id: 'quiz-steintherme',
    poiId: 'steintherme',
    questions: [
      {
        id: 'steintherme-q1',
        questions: {
          en: 'What is the main attraction of SteinTherme?',
          de: 'Was ist die Hauptattraktion der SteinTherme?'
        },
        options: {
          en: ['Natural thermal water', 'Water slides', 'Olympic swimming pool', 'Artificial wave pool'],
          de: ['Natürliches Thermalwasser', 'Wasserrutschen', 'Olympisches Schwimmbecken', 'Künstliches Wellenbecken']
        },
        correctOptionIndex: 0
      },
      {
        id: 'steintherme-q2',
        questions: {
          en: 'When was SteinTherme first opened to the public?',
          de: 'Wann wurde die SteinTherme erstmals für die Öffentlichkeit geöffnet?'
        },
        options: {
          en: ['1994', '2002', '2008', '2015'],
          de: ['1994', '2002', '2008', '2015']
        },
        correctOptionIndex: 1
      },
      {
        id: 'steintherme-q3',
        questions: {
          en: 'What health benefit is the thermal water known for?',
          de: 'Für welchen gesundheitlichen Nutzen ist das Thermalwasser bekannt?'
        },
        options: {
          en: ['Improving skin conditions', 'Curing common colds', 'Enhancing eyesight', 'Preventing hair loss'],
          de: ['Verbesserung von Hautkrankheiten', 'Heilung von Erkältungen', 'Verbesserung der Sehkraft', 'Vorbeugung von Haarausfall']
        },
        correctOptionIndex: 0
      },
      {
        id: 'steintherme-q4',
        questions: {
          en: 'What is the approximate temperature of the thermal water?',
          de: 'Wie hoch ist die ungefähre Temperatur des Thermalwassers?'
        },
        options: {
          en: ['25°C', '32°C', '38°C', '45°C'],
          de: ['25°C', '32°C', '38°C', '45°C']
        },
        correctOptionIndex: 2
      },
      {
        id: 'steintherme-q5',
        questions: {
          en: 'Which special facility is NOT available at SteinTherme?',
          de: 'Welche besondere Einrichtung ist in der SteinTherme NICHT verfügbar?'
        },
        options: {
          en: ['Sauna area', 'Massage service', 'Ice skating rink', 'Wellness treatments'],
          de: ['Saunabereich', 'Massageservice', 'Eislaufbahn', 'Wellnessbehandlungen']
        },
        correctOptionIndex: 2
      }
    ]
  },
  {
    id: 'quiz-marktplatz',
    poiId: 'marktplatz',
    questions: [
      {
        id: 'marktplatz-q1',
        questions: {
          en: 'What traditional event is regularly held at the Marktplatz?',
          de: 'Welche traditionelle Veranstaltung findet regelmäßig auf dem Marktplatz statt?'
        },
        options: {
          en: ['Weekly farmers market', 'Annual film festival', 'Summer music concerts', 'Winter ice skating'],
          de: ['Wöchentlicher Bauernmarkt', 'Jährliches Filmfestival', 'Sommerliche Musikkonzerte', 'Winterliches Eislaufen']
        },
        correctOptionIndex: 0
      },
      {
        id: 'marktplatz-q2',
        questions: {
          en: 'What is the distinctive feature of buildings around the Marktplatz?',
          de: 'Was ist das charakteristische Merkmal der Gebäude rund um den Marktplatz?'
        },
        options: {
          en: ['Colorful facades', 'Thatched roofs', 'Glass fronts', 'Wooden balconies'],
          de: ['Bunte Fassaden', 'Reetdächer', 'Glasfronten', 'Holzbalkone']
        },
        correctOptionIndex: 0
      },
      {
        id: 'marktplatz-q3',
        questions: {
          en: 'Which important building is located at the Marktplatz?',
          de: 'Welches wichtige Gebäude befindet sich am Marktplatz?'
        },
        options: {
          en: ['Town Hall', 'Main Library', 'Central Bank', 'Post Office'],
          de: ['Rathaus', 'Hauptbibliothek', 'Zentralbank', 'Postamt']
        },
        correctOptionIndex: 0
      },
      {
        id: 'marktplatz-q4',
        questions: {
          en: 'What historical event significantly shaped the current appearance of the Marktplatz?',
          de: 'Welches historische Ereignis hat das heutige Erscheinungsbild des Marktplatzes maßgeblich geprägt?'
        },
        options: {
          en: ['The Great Fire of 1636', 'World War II bombing', 'Flood of 1845', 'Renovation in 1990s'],
          de: ['Der Große Brand von 1636', 'Bombardierung im Zweiten Weltkrieg', 'Überschwemmung von 1845', 'Renovierung in den 1990er Jahren']
        },
        correctOptionIndex: 0
      },
      {
        id: 'marktplatz-q5',
        questions: {
          en: 'What type of pavement covers the Marktplatz?',
          de: 'Mit welcher Art von Pflaster ist der Marktplatz bedeckt?'
        },
        options: {
          en: ['Cobblestone', 'Asphalt', 'Brick', 'Concrete slabs'],
          de: ['Kopfsteinpflaster', 'Asphalt', 'Ziegelstein', 'Betonplatten']
        },
        correctOptionIndex: 0
      }
    ]
  },
  {
    id: 'quiz-rathaus',
    poiId: 'rathaus',
    questions: [
      {
        id: 'rathaus-q1',
        questions: {
          en: 'In which century was the Town Hall (Rathaus) built?',
          de: 'In welchem Jahrhundert wurde das Rathaus erbaut?'
        },
        options: {
          en: ['15th century', '16th century', '17th century', '18th century'],
          de: ['15. Jahrhundert', '16. Jahrhundert', '17. Jahrhundert', '18. Jahrhundert']
        },
        correctOptionIndex: 1
      },
      {
        id: 'rathaus-q2',
        questions: {
          en: 'What architectural style is the Town Hall built in?',
          de: 'In welchem architektonischen Stil wurde das Rathaus erbaut?'
        },
        options: {
          en: ['Gothic', 'Renaissance', 'Baroque', 'Neoclassical'],
          de: ['Gotik', 'Renaissance', 'Barock', 'Neoklassizismus']
        },
        correctOptionIndex: 1
      },
      {
        id: 'rathaus-q3',
        questions: {
          en: 'What color is the facade of the Town Hall?',
          de: 'Welche Farbe hat die Fassade des Rathauses?'
        },
        options: {
          en: ['Red', 'Yellow', 'White', 'Blue'],
          de: ['Rot', 'Gelb', 'Weiß', 'Blau']
        },
        correctOptionIndex: 2
      },
      {
        id: 'rathaus-q4',
        questions: {
          en: 'What important civic function takes place in the Town Hall?',
          de: 'Welche wichtige bürgerliche Funktion findet im Rathaus statt?'
        },
        options: {
          en: ['City council meetings', 'Theater performances', 'Art exhibitions', 'Religious services'],
          de: ['Stadtratssitzungen', 'Theateraufführungen', 'Kunstausstellungen', 'Gottesdienste']
        },
        correctOptionIndex: 0
      },
      {
        id: 'rathaus-q5',
        questions: {
          en: 'What decorative feature is on top of the Town Hall?',
          de: 'Welches dekorative Element befindet sich auf dem Dach des Rathauses?'
        },
        options: {
          en: ['Clock tower', 'Weather vane', 'Bell tower', 'Statue'],
          de: ['Uhrturm', 'Wetterfahne', 'Glockenturm', 'Statue']
        },
        correctOptionIndex: 0
      }
    ]
  },
  {
    id: 'quiz-st-marienkirche',
    poiId: 'st-marienkirche',
    questions: [
      {
        id: 'st-marienkirche-q1',
        questions: {
          en: 'When was St. Mary\'s Church (St. Marienkirche) built?',
          de: 'Wann wurde die St. Marienkirche erbaut?'
        },
        options: {
          en: ['12th century', '13th century', '14th century', '15th century'],
          de: ['12. Jahrhundert', '13. Jahrhundert', '14. Jahrhundert', '15. Jahrhundert']
        },
        correctOptionIndex: 1
      },
      {
        id: 'st-marienkirche-q2',
        questions: {
          en: 'What is the main building material of St. Mary\'s Church?',
          de: 'Was ist das Hauptbaumaterial der St. Marienkirche?'
        },
        options: {
          en: ['Sandstone', 'Brick', 'Marble', 'Granite'],
          de: ['Sandstein', 'Backstein', 'Marmor', 'Granit']
        },
        correctOptionIndex: 1
      },
      {
        id: 'st-marienkirche-q3',
        questions: {
          en: 'What architectural style is St. Mary\'s Church primarily built in?',
          de: 'In welchem architektonischen Stil wurde die St. Marienkirche hauptsächlich erbaut?'
        },
        options: {
          en: ['Romanesque', 'Gothic', 'Baroque', 'Renaissance'],
          de: ['Romanisch', 'Gotisch', 'Barock', 'Renaissance']
        },
        correctOptionIndex: 1
      },
      {
        id: 'st-marienkirche-q4',
        questions: {
          en: 'What notable feature can be found inside St. Mary\'s Church?',
          de: 'Welches bemerkenswerte Merkmal findet man in der St. Marienkirche?'
        },
        options: {
          en: ['Medieval altar', 'Ancient crypt', 'Painted ceiling', 'Pipe organ'],
          de: ['Mittelalterlicher Altar', 'Antike Krypta', 'Bemalte Decke', 'Pfeifenorgel']
        },
        correctOptionIndex: 0
      },
      {
        id: 'st-marienkirche-q5',
        questions: {
          en: 'What religious denomination does St. Mary\'s Church belong to?',
          de: 'Welcher Konfession gehört die St. Marienkirche an?'
        },
        options: {
          en: ['Roman Catholic', 'Protestant Lutheran', 'Orthodox', 'Anglican'],
          de: ['Römisch-Katholisch', 'Evangelisch-Lutherisch', 'Orthodox', 'Anglikanisch']
        },
        correctOptionIndex: 1
      }
    ]
  },
  {
    id: 'quiz-bricciuskapelle',
    poiId: 'bricciuskapelle',
    questions: [
      {
        id: 'bricciuskapelle-q1',
        questions: {
          en: 'Who was Briccius, after whom the chapel is named?',
          de: 'Wer war Briccius, nach dem die Kapelle benannt ist?'
        },
        options: {
          en: ['A local nobleman', 'A saint', 'The architect', 'A medieval mayor'],
          de: ['Ein lokaler Adliger', 'Ein Heiliger', 'Der Architekt', 'Ein mittelalterlicher Bürgermeister']
        },
        correctOptionIndex: 1
      },
      {
        id: 'bricciuskapelle-q2',
        questions: {
          en: 'In which century was the Briccius Chapel built?',
          de: 'In welchem Jahrhundert wurde die Bricciuskapelle erbaut?'
        },
        options: {
          en: ['12th century', '14th century', '16th century', '18th century'],
          de: ['12. Jahrhundert', '14. Jahrhundert', '16. Jahrhundert', '18. Jahrhundert']
        },
        correctOptionIndex: 0
      },
      {
        id: 'bricciuskapelle-q3',
        questions: {
          en: 'What is the Briccius Chapel primarily used for today?',
          de: 'Wofür wird die Bricciuskapelle heute hauptsächlich genutzt?'
        },
        options: {
          en: ['Regular church services', 'Weddings and baptisms', 'Museum', 'Tourist attraction'],
          de: ['Regelmäßige Gottesdienste', 'Hochzeiten und Taufen', 'Museum', 'Touristenattraktion']
        },
        correctOptionIndex: 1
      },
      {
        id: 'bricciuskapelle-q4',
        questions: {
          en: 'What architectural feature is characteristic of the Briccius Chapel?',
          de: 'Welches architektonische Merkmal ist charakteristisch für die Bricciuskapelle?'
        },
        options: {
          en: ['Round arches', 'Pointed arches', 'Dome', 'Spire'],
          de: ['Rundbögen', 'Spitzbögen', 'Kuppel', 'Turmspitze']
        },
        correctOptionIndex: 0
      },
      {
        id: 'bricciuskapelle-q5',
        questions: {
          en: 'What historical event significantly damaged the Briccius Chapel?',
          de: 'Welches historische Ereignis hat die Bricciuskapelle erheblich beschädigt?'
        },
        options: {
          en: ['Fire in 1636', 'Thirty Years\' War', 'World War II', 'Earthquake in 1755'],
          de: ['Brand im Jahr 1636', 'Dreißigjähriger Krieg', 'Zweiter Weltkrieg', 'Erdbeben im Jahr 1755']
        },
        correctOptionIndex: 1
      }
    ]
  },
  {
    id: 'quiz-heimatmuseum',
    poiId: 'heimatmuseum',
    questions: [
      {
        id: 'heimatmuseum-q1',
        questions: {
          en: 'Where is the Heimatmuseum (local history museum) located?',
          de: 'Wo befindet sich das Heimatmuseum?'
        },
        options: {
          en: ['In the town hall', 'In the castle gatehouse', 'In a former school', 'In a medieval merchant house'],
          de: ['Im Rathaus', 'Im Torhaus der Burg', 'In einer ehemaligen Schule', 'In einem mittelalterlichen Kaufmannshaus']
        },
        correctOptionIndex: 1
      },
      {
        id: 'heimatmuseum-q2',
        questions: {
          en: 'When was the Heimatmuseum established?',
          de: 'Wann wurde das Heimatmuseum gegründet?'
        },
        options: {
          en: ['1920s', '1950s', '1970s', '1990s'],
          de: ['1920er Jahre', '1950er Jahre', '1970er Jahre', '1990er Jahre']
        },
        correctOptionIndex: 2
      },
      {
        id: 'heimatmuseum-q3',
        questions: {
          en: 'What type of artifacts can be found in the Heimatmuseum?',
          de: 'Welche Art von Artefakten kann man im Heimatmuseum finden?'
        },
        options: {
          en: ['Only medieval weapons', 'Only religious items', 'Only farming tools', 'Various local historical items'],
          de: ['Nur mittelalterliche Waffen', 'Nur religiöse Gegenstände', 'Nur landwirtschaftliche Werkzeuge', 'Verschiedene lokale historische Gegenstände']
        
(Content truncated due to size limit. Use line ranges to read in chunks)