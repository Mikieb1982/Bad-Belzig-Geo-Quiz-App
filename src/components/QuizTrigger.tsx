'use client';

import React, { useState, useEffect } from 'react';
import { POI } from '../types';
import { useProximityDetection } from './ProximityDetector';

interface QuizTriggerProps {
  onQuizTrigger: (poi: POI) => void;
  children: React.ReactNode;
}

export const QuizTrigger: React.FC<QuizTriggerProps> = ({
  onQuizTrigger,
  children
}) => {
  const { poisInRange } = useProximityDetection();
  const [triggeredQuizzes, setTriggeredQuizzes] = useState<Set<string>>(new Set());
  
  // Check for new POIs in range to trigger quizzes
  useEffect(() => {
    if (poisInRange.length === 0) return;
    
    // Find POIs that are in range but haven't triggered a quiz yet
    const newPoisInRange = poisInRange.filter(poi => !triggeredQuizzes.has(poi.id));
    
    if (newPoisInRange.length > 0) {
      // Trigger quiz for the first new POI in range
      onQuizTrigger(newPoisInRange[0]);
      
      // Update triggered quizzes
      setTriggeredQuizzes(prev => {
        const updated = new Set(prev);
        updated.add(newPoisInRange[0].id);
        return updated;
      });
    }
  }, [poisInRange, onQuizTrigger, triggeredQuizzes]);

  return <>{children}</>;
};

// Hook for managing quiz triggers based on proximity
export const useQuizTrigger = () => {
  const { poisInRange } = useProximityDetection();
  const [availableQuizzes, setAvailableQuizzes] = useState<POI[]>([]);
  const [completedQuizzes, setCompletedQuizzes] = useState<Set<string>>(new Set());
  
  // Update available quizzes whenever POIs in range change
  useEffect(() => {
    // Filter out POIs with completed quizzes
    const newAvailableQuizzes = poisInRange.filter(poi => !completedQuizzes.has(poi.id));
    setAvailableQuizzes(newAvailableQuizzes);
  }, [poisInRange, completedQuizzes]);
  
  // Mark a quiz as completed
  const markQuizCompleted = (poiId: string) => {
    setCompletedQuizzes(prev => {
      const updated = new Set(prev);
      updated.add(poiId);
      return updated;
    });
  };
  
  return {
    availableQuizzes,
    hasAvailableQuizzes: availableQuizzes.length > 0,
    markQuizCompleted
  };
};
