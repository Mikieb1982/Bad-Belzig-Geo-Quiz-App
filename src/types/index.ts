/**
 * Types for the Bad Belzig Abenteuer Geo Quiz app
 */

// Language type
export type Language = 'en' | 'de';

// Point of Interest (POI) type
export interface POI {
  id: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  geofenceRadius: number; // in meters
  names: {
    en: string;
    de: string;
  };
  descriptions: {
    en: string;
    de: string;
  };
  quizId: string;
  badgeId: string;
}

// Quiz question type
export interface QuizQuestion {
  id: string;
  questions: {
    en: string;
    de: string;
  };
  options: {
    en: string[];
    de: string[];
  };
  correctOptionIndex: number;
}

// Quiz type
export interface Quiz {
  id: string;
  poiId: string;
  questions: QuizQuestion[];
}

// Badge type
export interface Badge {
  id: string;
  poiId: string;
  names: {
    en: string;
    de: string;
  };
  descriptions: {
    en: string;
    de: string;
  };
  imageUrl: string;
}

// User progress type
export interface UserProgress {
  completedQuizzes: string[]; // Array of quiz IDs
  earnedBadges: string[]; // Array of badge IDs
  lastVisitedPOI?: string; // POI ID
}

// App settings type
export interface AppSettings {
  language: Language;
  mapZoomLevel: number;
  notificationsEnabled: boolean;
}
