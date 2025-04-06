'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Badge, Language } from '../types';

interface BadgeModalProps {
  badge: Badge | null;
  language: Language;
  isOpen: boolean;
  onClose: () => void;
}

const BadgeModal: React.FC<BadgeModalProps> = ({
  badge,
  language,
  isOpen,
  onClose
}) => {
  const { t } = useTranslation();
  
  if (!isOpen || !badge) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-sm w-full overflow-hidden">
        <div className="bg-green-600 text-white p-4 text-center">
          <h2 className="text-xl font-bold">{t('badgeEarned')}</h2>
        </div>
        
        <div className="p-6 flex flex-col items-center">
          <img 
            src={badge.imageUrl} 
            alt={badge.names[language]} 
            className="w-32 h-32 mb-4"
          />
          
          <h3 className="text-xl font-bold text-center mb-2">
            {badge.names[language]}
          </h3>
          
          <p className="text-gray-600 text-center mb-6">
            {badge.descriptions[language]}
          </p>
          
          <button
            className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700"
            onClick={onClose}
          >
            {t('close')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BadgeModal;
