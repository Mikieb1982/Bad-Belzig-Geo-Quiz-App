# Bad Belzig Abenteuer Geo Quiz

A location-based quiz game designed to encourage exploration and learning about the town of Bad Belzig, Brandenburg, Germany.

## Overview

Bad Belzig Abenteuer Geo Quiz is a mobile-friendly web application that guides users to explore 10 significant Points of Interest (POIs) in Bad Belzig. When users physically visit these locations, they can answer quiz questions about each site and earn digital badges for their achievements.

## Features

- **Interactive Map**: OpenStreetMap integration showing all POIs and user's current location
- **Geolocation**: Real-time tracking with proximity detection to unlock quizzes
- **Quiz System**: 5 multiple-choice questions for each POI with immediate feedback
- **Badge Collection**: Earn unique badges for each POI when completing quizzes with perfect scores
- **Multilingual**: Full support for both English and German languages
- **Offline Support**: Map caching and local data storage for offline use
- **Responsive Design**: Works on both mobile and desktop devices

## Points of Interest

The app includes the following 10 locations in Bad Belzig:

1. Burg Eisenhardt (Castle)
2. SteinTherme (Thermal Bath)
3. Marktplatz (Market Square)
4. Rathaus (Town Hall)
5. St. Marienkirche (St. Mary's Church)
6. Bricciuskapelle (Briccius Chapel)
7. Heimatmuseum (Museum)
8. Sächsische Postmeilensäule (Saxon Post Milestone)
9. Fläming-Bahnhof Bad Belzig (Railway Station)
10. Reißiger-Haus (Historic building)

## Technology Stack

- **Framework**: Next.js (React)
- **Mapping**: Leaflet with OpenStreetMap
- **Styling**: Tailwind CSS
- **Localization**: i18next
- **UI Components**: Custom components with Bad Belzig's green and white colors
- **Storage**: Local browser storage for user progress

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/bad-belzig-quiz.git
cd bad-belzig-quiz
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Deployment

The application can be deployed to any static hosting service:

```bash
npm run build
# or
pnpm build
```

The build output in the `out` directory can be deployed to any static hosting service.

## Project Structure

- `/src/app`: Next.js pages and routes
- `/src/components`: React components for UI elements
- `/src/data`: Data files for POIs, quizzes, and badges
- `/src/types`: TypeScript type definitions
- `/src/i18n`: Internationalization configuration
- `/public`: Static assets including badge SVGs

## Usage

1. Allow location access when prompted
2. Navigate to any of the 10 POIs in Bad Belzig
3. When within range (approximately 50 meters), a quiz will be unlocked
4. Answer all 5 questions correctly to earn a badge
5. Collect all 10 badges by visiting all locations

## Testing

For testing purposes, the app includes a location simulator that allows you to virtually visit each POI without physically being there. This is accessible in development mode only.

## License

This project is open source and available under the MIT License.

## Credits

- Developed as a zero-cost solution for promoting tourism and education in Bad Belzig
- Uses OpenStreetMap data which is © OpenStreetMap contributors
- All quiz content and badge designs are original creations for this project
