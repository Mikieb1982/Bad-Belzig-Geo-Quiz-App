'use client';

import React, { useState } from 'react';
import { Quiz, QuizQuestion, Language } from '../types';

interface QuizComponentProps {
  quiz: Quiz;
  language: Language;
  onComplete: (score: number, perfect: boolean) => void;
  onClose: () => void;
}

const QuizComponent: React.FC<QuizComponentProps> = ({
  quiz,
  language,
  onComplete,
  onClose
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const totalQuestions = quiz.questions.length;
  
  // Handle option selection
  const handleOptionSelect = (optionIndex: number) => {
    if (isAnswered) return;
    
    setSelectedOption(optionIndex);
    setIsAnswered(true);
    
    // Check if answer is correct
    if (optionIndex === currentQuestion.correctOptionIndex) {
      setScore(prevScore => prevScore + 1);
    }
  };
  
  // Move to next question or complete quiz
  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setCompleted(true);
      const finalScore = score + (selectedOption === currentQuestion.correctOptionIndex ? 1 : 0);
      const isPerfect = finalScore === totalQuestions;
      onComplete(finalScore, isPerfect);
    }
  };
  
  // Translations
  const translations = {
    question: language === 'en' ? 'Question' : 'Frage',
    of: language === 'en' ? 'of' : 'von',
    next: language === 'en' ? 'Next' : 'Weiter',
    finish: language === 'en' ? 'Finish' : 'Beenden',
    correct: language === 'en' ? 'Correct!' : 'Richtig!',
    incorrect: language === 'en' ? 'Incorrect!' : 'Falsch!',
    close: language === 'en' ? 'Close' : 'Schließen'
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
      {!completed ? (
        <>
          <div className="mb-4 flex justify-between items-center">
            <h2 className="text-xl font-bold text-green-800">
              {translations.question} {currentQuestionIndex + 1} {translations.of} {totalQuestions}
            </h2>
            <div className="text-sm font-medium bg-green-100 text-green-800 px-2 py-1 rounded">
              {score}/{currentQuestionIndex}
            </div>
          </div>
          
          <div className="mb-6">
            <p className="text-lg font-medium mb-4">{currentQuestion.questions[language]}</p>
            
            <div className="space-y-3">
              {currentQuestion.options[language].map((option, index) => (
                <button
                  key={index}
                  className={`w-full text-left p-3 rounded border ${
                    selectedOption === index
                      ? index === currentQuestion.correctOptionIndex
                        ? 'bg-green-100 border-green-500'
                        : 'bg-red-100 border-red-500'
                      : 'border-gray-300 hover:border-green-500'
                  }`}
                  onClick={() => handleOptionSelect(index)}
                  disabled={isAnswered}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          
          {isAnswered && (
            <div className={`mb-4 p-3 rounded ${
              selectedOption === currentQuestion.correctOptionIndex
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
            }`}>
              {selectedOption === currentQuestion.correctOptionIndex
                ? translations.correct
                : translations.incorrect}
            </div>
          )}
          
          <div className="flex justify-end">
            <button
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:bg-gray-400"
              onClick={handleNext}
              disabled={!isAnswered}
            >
              {currentQuestionIndex < totalQuestions - 1 ? translations.next : translations.finish}
            </button>
          </div>
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">
            {language === 'en' ? 'Quiz Completed!' : 'Quiz abgeschlossen!'}
          </h2>
          <p className="text-lg mb-6">
            {language === 'en' 
              ? `Your score: ${score}/${totalQuestions}` 
              : `Dein Ergebnis: ${score}/${totalQuestions}`}
          </p>
          <button
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            onClick={onClose}
          >
            {translations.close}
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizComponent;
