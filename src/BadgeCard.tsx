'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Badge, Language } from '../types';

interface BadgeCardProps {
  badge: Badge;
  language: Language;
  earned: boolean;
}

const BadgeCard: React.FC<BadgeCardProps> = ({ badge, language, earned }) => {
  const { t } = useTranslation();
  
  return (
    <div className={`relative rounded-lg overflow-hidden shadow-md ${earned ? 'bg-white' : 'bg-gray-200'}`}>
      <div className="p-4 flex flex-col items-center">
        {earned ? (
          <img 
            src={badge.imageUrl} 
            alt={badge.names[language]} 
            className="w-24 h-24 mb-3"
          />
        ) : (
          <div className="w-24 h-24 mb-3 bg-gray-300 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
        )}
        
        <h3 className="text-lg font-semibold text-center">
          {earned ? badge.names[language] : '???'}
        </h3>
        
        <p className="text-sm text-gray-600 text-center mt-2">
          {earned ? badge.descriptions[language] : language === 'en' ? 'Visit this location and complete the quiz to unlock' : 'Besuche diesen Ort und absolviere das Quiz, um freizuschalten'}
        </p>
      </div>
      
      {earned && (
        <div className="absolute top-2 right-2 bg-green-500 text-white rounded-full p-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default BadgeCard;
