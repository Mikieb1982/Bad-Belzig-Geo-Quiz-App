'use client';

import React from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Initialize i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // General
          appName: 'Bad Belzig Adventure Geo Quiz',
          loading: 'Loading...',
          error: 'Error',
          close: 'Close',
          back: 'Back',
          next: 'Next',
          finish: 'Finish',
          
          // Map
          yourLocation: 'Your location',
          getCloser: 'Get closer to unlock the quiz!',
          inRange: 'You are in range!',
          centerMap: 'Center map on your location',
          
          // Quiz
          question: 'Question',
          of: 'of',
          correct: 'Correct!',
          incorrect: 'Incorrect!',
          quizCompleted: 'Quiz Completed!',
          yourScore: 'Your score:',
          perfectScore: 'Perfect score! You earned a badge!',
          tryAgain: 'Try again',
          
          // Badges
          badgeEarned: 'Badge Earned!',
          viewBadges: 'View Badges',
          badgeCollection: 'Badge Collection',
          noBadges: 'You haven\'t earned any badges yet. Visit locations and complete quizzes to earn badges!',
          
          // Settings
          settings: 'Settings',
          language: 'Language',
          notifications: 'Notifications',
          enable: 'Enable',
          disable: 'Disable',
          resetProgress: 'Reset Progress',
          resetConfirm: 'Are you sure you want to reset all progress?',
          yes: 'Yes',
          no: 'No',
          
          // About
          about: 'About',
          version: 'Version',
          developedBy: 'Developed by',
          poweredBy: 'Powered by',
        }
      },
      de: {
        translation: {
          // General
          appName: 'Bad Belzig Abenteuer Geo Quiz',
          loading: 'Wird geladen...',
          error: 'Fehler',
          close: 'Schließen',
          back: 'Zurück',
          next: 'Weiter',
          finish: 'Beenden',
          
          // Map
          yourLocation: 'Dein Standort',
          getCloser: 'Komm näher, um das Quiz freizuschalten!',
          inRange: 'Du bist in Reichweite!',
          centerMap: 'Karte auf deinen Standort zentrieren',
          
          // Quiz
          question: 'Frage',
          of: 'von',
          correct: 'Richtig!',
          incorrect: 'Falsch!',
          quizCompleted: 'Quiz abgeschlossen!',
          yourScore: 'Dein Ergebnis:',
          perfectScore: 'Perfekte Punktzahl! Du hast ein Abzeichen verdient!',
          tryAgain: 'Erneut versuchen',
          
          // Badges
          badgeEarned: 'Abzeichen verdient!',
          viewBadges: 'Abzeichen anzeigen',
          badgeCollection: 'Abzeichensammlung',
          noBadges: 'Du hast noch keine Abzeichen verdient. Besuche Orte und absolviere Quizze, um Abzeichen zu verdienen!',
          
          // Settings
          settings: 'Einstellungen',
          language: 'Sprache',
          notifications: 'Benachrichtigungen',
          enable: 'Aktivieren',
          disable: 'Deaktivieren',
          resetProgress: 'Fortschritt zurücksetzen',
          resetConfirm: 'Bist du sicher, dass du den gesamten Fortschritt zurücksetzen möchtest?',
          yes: 'Ja',
          no: 'Nein',
          
          // About
          about: 'Über',
          version: 'Version',
          developedBy: 'Entwickelt von',
          poweredBy: 'Unterstützt von',
        }
      }
    },
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React already escapes values
    }
  });

export default i18n;
