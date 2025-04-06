'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Badge, Language } from '../types';
import BadgeCard from './BadgeCard';
import { badges } from '../data/badges';

interface BadgeCollectionProps {
  language: Language;
  earnedBadges: string[];
  onClose: () => void;
}

const BadgeCollection: React.FC<BadgeCollectionProps> = ({
  language,
  earnedBadges,
  onClose
}) => {
  const { t } = useTranslation();
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-green-800">
          {t('badgeCollection')}
        </h2>
        <button
          className="text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      {earnedBadges.length === 0 ? (
        <div className="text-center py-8">
          <div className="mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <p className="text-gray-600">
            {t('noBadges')}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {badges.map(badge => (
            <BadgeCard
              key={badge.id}
              badge={badge}
              language={language}
              earned={earnedBadges.includes(badge.id)}
            />
          ))}
        </div>
      )}
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          {language === 'en' 
            ? `${earnedBadges.length} of ${badges.length} badges earned` 
            : `${earnedBadges.length} von ${badges.length} Abzeichen verdient`}
        </p>
      </div>
    </div>
  );
};

export default BadgeCollection;
