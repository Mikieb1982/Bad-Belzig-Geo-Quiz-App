'use client';

import React from 'react';
import { Language } from '../types';
import { useTranslation } from 'react-i18next';

interface LanguageSwitcherProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  currentLanguage,
  onLanguageChange
}) => {
  const { i18n } = useTranslation();
  
  const handleLanguageChange = (language: Language) => {
    onLanguageChange(language);
    i18n.changeLanguage(language);
  };
  
  return (
    <div className="flex items-center space-x-2">
      <button
        className={`px-3 py-1 rounded ${
          currentLanguage === 'en'
            ? 'bg-green-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
        onClick={() => handleLanguageChange('en')}
      >
        EN
      </button>
      <button
        className={`px-3 py-1 rounded ${
          currentLanguage === 'de'
            ? 'bg-green-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
        onClick={() => handleLanguageChange('de')}
      >
        DE
      </button>
    </div>
  );
};

export default LanguageSwitcher;
