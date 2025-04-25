
import React, { useState } from 'react';
import PersonalityContext from './PersonalityContext';
import { MBTIType, Trait, Career, PersonalityContextType } from '@/types/personality';
import { calculateMBTI, calculateSuggestedCareers } from './personalityUtils';
import { mockCareers } from './mockCareers';

export const PersonalityProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<Record<number, number>>({});
  const [mbtiType, setMbtiType] = useState<MBTIType>(null);
  const [traits, setTraits] = useState<Trait[]>([]);
  const [birthdate, setBirthdate] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [zodiacSign, setZodiacSign] = useState('');
  const [suggestedCareers, setSuggestedCareers] = useState<Career[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [isPremiumUser, setIsPremiumUser] = useState(false);
  const totalQuestions = 70;

  const handleCalculateMBTI = () => {
    calculateMBTI(responses, setMbtiType, setTraits);
  };

  const handleCalculateSuggestedCareers = () => {
    calculateSuggestedCareers(
      isPremiumUser, 
      setSuggestedCareers, 
      mockCareers, 
      mbtiType,
      traits,
      zodiacSign
    );
  };

  return (
    <PersonalityContext.Provider
      value={{
        currentQuestionIndex, setCurrentQuestionIndex,
        responses, setResponses,
        mbtiType, setMbtiType,
        traits, setTraits,
        birthdate, setBirthdate,
        email, setEmail,
        name, setName,
        zodiacSign, setZodiacSign,
        suggestedCareers, setSuggestedCareers,
        quizCompleted, setQuizCompleted,
        calculateMBTI: handleCalculateMBTI,
        calculateSuggestedCareers: handleCalculateSuggestedCareers,
        isPremiumUser, setIsPremiumUser,
        totalQuestions
      }}
    >
      {children}
    </PersonalityContext.Provider>
  );
};
