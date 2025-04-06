'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Quiz, QuizQuestion, Language } from '../types';
import QuizComponent from './QuizComponent';

interface QuizModalProps {
  quiz: Quiz | null;
  language: Language;
  isOpen: boolean;
  onClose: () => void;
  onComplete: (poiId: string, score: number, perfect: boolean) => void;
}

const QuizModal: React.FC<QuizModalProps> = ({
  quiz,
  language,
  isOpen,
  onClose,
  onComplete
}) => {
  const { t } = useTranslation();
  
  if (!isOpen || !quiz) return null;
  
  const handleQuizComplete = (score: number, perfect: boolean) => {
    onComplete(quiz.poiId, score, perfect);
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-4">
          <QuizComponent
            quiz={quiz}
            language={language}
            onComplete={handleQuizComplete}
            onClose={onClose}
          />
        </div>
      </div>
    </div>
  );
};

export default QuizModal;
