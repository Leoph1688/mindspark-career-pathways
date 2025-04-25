
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
    // Make sure we initialize traits with default values to prevent NaN
    if (Object.keys(responses).length === 0) {
      // If no responses, set a default MBTI type
      setMbtiType('ENFP');
      
      // Set default traits to prevent NaN values
      setTraits([
        {
          name: 'Extraversion',
          value: 50,
          description: 'How energized you are by social interaction'
        },
        {
          name: 'Sensing',
          value: 50,
          description: 'How you gather information from the world'
        },
        {
          name: 'Thinking',
          value: 50,
          description: 'How you make decisions'
        },
        {
          name: 'Judging',
          value: 50,
          description: 'How you approach structure and planning'
        },
        {
          name: 'Introversion',
          value: 50,
          description: 'How you recharge your energy'
        },
        {
          name: 'Intuition',
          value: 50,
          description: 'How you process information'
        },
        {
          name: 'Feeling',
          value: 50,
          description: 'How you consider emotions in decisions'
        },
        {
          name: 'Perceiving',
          value: 50,
          description: 'How flexible you are with plans'
        }
      ]);
    } else {
      // Calculate MBTI based on actual responses
      calculateMBTI(responses, setMbtiType, setTraits);
    }
  };

  const handleCalculateSuggestedCareers = () => {
    // Ensure we have valid values for calculation
    const validMbtiType = mbtiType || 'ENFP';
    const validTraits = traits.length > 0 ? traits : [
      { name: 'Extraversion', value: 50, description: 'How energized you are by social interaction' }
    ];
    const validZodiacSign = zodiacSign || 'Aries';

    calculateSuggestedCareers(
      isPremiumUser, 
      setSuggestedCareers, 
      mockCareers, 
      validMbtiType,
      validTraits,
      validZodiacSign
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
