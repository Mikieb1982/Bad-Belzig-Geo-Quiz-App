'use client';

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Language } from '../types';
import Header from './Header';
import Footer from './Footer';
import Map from './Map';
import QuizModal from './QuizModal';
import BadgeModal from './BadgeModal';
import BadgeCollection from './BadgeCollection';
import { useQuizManager } from './QuizManager';
import { useBadgeManager } from './BadgeManager';
import { useProximityDetection } from './ProximityDetector';
import { quizzes } from '../data/quizzes';
import '../i18n/i18n';

const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const { t, i18n } = useTranslation();
  
  // Initialize language
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);
  
  // Quiz management
  const { 
    activePoi, 
    showQuiz, 
    activateQuiz, 
    closeQuiz, 
    handleQuizComplete, 
    completedQuizzes 
  } = useQuizManager();
  
  // Badge management
  const {
    earnedBadges,
    awardBadge,
    newBadge,
    showBadgeModal,
    closeBadgeModal,
    showBadgeCollection,
    openBadgeCollection,
    closeBadgeCollection
  } = useBadgeManager();
  
  // Proximity detection
  const { poisInRange } = useProximityDetection();
  
  // Handle quiz completion
  const onQuizComplete = (poiId: string, score: number, perfect: boolean) => {
    handleQuizComplete(poiId, score, perfect);
    
    // Award badge if perfect score
    if (perfect) {
      awardBadge(poiId);
    }
  };
  
  // Get active quiz
  const activeQuiz = activePoi 
    ? quizzes.find(quiz => quiz.poiId === activePoi.id) || null
    : null;
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header onOpenBadges={openBadgeCollection} badgeCount={earnedBadges.length} />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-6">
          {/* Map Component */}
          <div className="mb-6 rounded-lg overflow-hidden shadow-lg">
            <Map 
              language={language} 
              onPoiClick={(poi) => {
                // Only activate quiz if user is in range
                const isInRange = poisInRange.some(p => p.id === poi.id);
                if (isInRange) {
                  activateQuiz(poi);
                }
              }} 
            />
          </div>
          
          {/* Main Content */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-heading font-bold text-belzig-green-700 mb-4">
              {t('appName')}
            </h2>
            <p className="text-belzig-gray-700 mb-4">
              {language === 'en' 
                ? 'Explore Bad Belzig and discover its fascinating locations! Visit points of interest, answer quiz questions, and collect badges.'
                : 'Erkunde Bad Belzig und entdecke seine faszinierenden Orte! Besuche Sehenswürdigkeiten, beantworte Quizfragen und sammle Abzeichen.'}
            </p>
            
            {/* Stats */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-belzig-green-50 p-4 rounded-lg border border-belzig-green-200">
                <h3 className="font-semibold text-belzig-green-700">
                  {language === 'en' ? 'Completed Quizzes' : 'Abgeschlossene Quizze'}
                </h3>
                <p className="text-2xl font-bold text-belzig-green-600">
                  {completedQuizzes.length} / 10
                </p>
              </div>
              <div className="bg-belzig-green-50 p-4 rounded-lg border border-belzig-green-200">
                <h3 className="font-semibold text-belzig-green-700">
                  {language === 'en' ? 'Earned Badges' : 'Verdiente Abzeichen'}
                </h3>
                <p className="text-2xl font-bold text-belzig-green-600">
                  {earnedBadges.length} / 10
                </p>
              </div>
            </div>
            
            {/* Badge Preview */}
            {earnedBadges.length > 0 && (
              <div className="mt-6">
                <h3 className="font-semibold text-belzig-green-700 mb-2">
                  {language === 'en' ? 'Recent Badges' : 'Neueste Abzeichen'}
                </h3>
                <div className="flex space-x-2 overflow-x-auto pb-2">
                  {/* Show last 3 earned badges */}
                  {earnedBadges.slice(-3).map(badgeId => (
                    <img 
                      key={badgeId}
                      src={`/badges/${badgeId.replace('badge-', '')}.svg`}
                      alt=""
                      className="w-16 h-16"
                    />
                  ))}
                </div>
              </div>
            )}
            
            {children}
          </div>
        </div>
      </main>
      
      <Footer 
        currentLanguage={language} 
        onLanguageChange={setLanguage} 
      />
      
      {/* Modals */}
      <QuizModal
        quiz={activeQuiz}
        language={language}
        isOpen={showQuiz}
        onClose={closeQuiz}
        onComplete={onQuizComplete}
      />
      
      <BadgeModal
        badge={newBadge}
        language={language}
        isOpen={showBadgeModal}
        onClose={closeBadgeModal}
      />
      
      {showBadgeCollection && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <BadgeCollection
            language={language}
            earnedBadges={earnedBadges}
            onClose={closeBadgeCollection}
          />
        </div>
      )}
    </div>
  );
};

export default Layout;
