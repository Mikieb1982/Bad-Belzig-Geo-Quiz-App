'use client';

import React, { useState, useEffect } from 'react';
import { Quiz, POI, Language } from '../types';
import { quizzes } from '../data/quizzes';

interface QuizManagerProps {
  language: Language;
  activePoi: POI | null;
  onQuizComplete: (poiId: string, score: number, perfect: boolean) => void;
  onClose: () => void;
  children: React.ReactNode;
}

export const QuizManager: React.FC<QuizManagerProps> = ({
  language,
  activePoi,
  onQuizComplete,
  onClose,
  children
}) => {
  const [activeQuiz, setActiveQuiz] = useState<Quiz | null>(null);
  
  // Find and set the active quiz when POI changes
  useEffect(() => {
    if (!activePoi) {
      setActiveQuiz(null);
      return;
    }
    
    const quiz = quizzes.find(q => q.poiId === activePoi.id);
    setActiveQuiz(quiz || null);
  }, [activePoi]);
  
  // Handle quiz completion
  const handleQuizComplete = (score: number, perfect: boolean) => {
    if (activePoi) {
      onQuizComplete(activePoi.id, score, perfect);
    }
  };
  
  return (
    <>
      {children}
      {/* Quiz modal or overlay would be rendered here */}
    </>
  );
};

// Hook for managing quizzes
export const useQuizManager = () => {
  const [completedQuizzes, setCompletedQuizzes] = useState<Map<string, number>>(new Map());
  const [perfectQuizzes, setPerfectQuizzes] = useState<Set<string>>(new Set());
  const [activePoi, setActivePoi] = useState<POI | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);
  
  // Activate a quiz for a POI
  const activateQuiz = (poi: POI) => {
    setActivePoi(poi);
    setShowQuiz(true);
  };
  
  // Close the active quiz
  const closeQuiz = () => {
    setShowQuiz(false);
    setActivePoi(null);
  };
  
  // Handle quiz completion
  const handleQuizComplete = (poiId: string, score: number, perfect: boolean) => {
    // Update completed quizzes with score
    setCompletedQuizzes(prev => {
      const updated = new Map(prev);
      updated.set(poiId, score);
      return updated;
    });
    
    // Update perfect quizzes if applicable
    if (perfect) {
      setPerfectQuizzes(prev => {
        const updated = new Set(prev);
        updated.add(poiId);
        return updated;
      });
    }
    
    // Close the quiz
    closeQuiz();
  };
  
  // Check if a quiz has been completed
  const isQuizCompleted = (poiId: string): boolean => {
    return completedQuizzes.has(poiId);
  };
  
  // Check if a quiz has been completed with a perfect score
  const isQuizPerfect = (poiId: string): boolean => {
    return perfectQuizzes.has(poiId);
  };
  
  // Get the score for a completed quiz
  const getQuizScore = (poiId: string): number | null => {
    return completedQuizzes.has(poiId) ? completedQuizzes.get(poiId)! : null;
  };
  
  return {
    activePoi,
    showQuiz,
    activateQuiz,
    closeQuiz,
    handleQuizComplete,
    isQuizCompleted,
    isQuizPerfect,
    getQuizScore,
    completedQuizzes: Array.from(completedQuizzes.keys()),
    perfectQuizzes: Array.from(perfectQuizzes)
  };
};
