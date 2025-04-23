import React, { useState } from 'react';
import PersonalityContext from './PersonalityContext';
import { MBTIType, Trait, Career, PersonalityContextType } from '@/types/personality';

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

  const calculateMBTI = () => {
    const dimensions = {
      E: 0, I: 0,
      S: 0, N: 0,
      T: 0, F: 0,
      J: 0, P: 0
    };
    Object.entries(responses).forEach(([questionId, answer]) => {
      const qId = parseInt(questionId);
      if (qId % 8 === 0 || qId % 8 === 1) {
        answer > 3 ? dimensions.E += answer - 3 : dimensions.I += 4 - answer;
      } else if (qId % 8 === 2 || qId % 8 === 3) {
        answer > 3 ? dimensions.S += answer - 3 : dimensions.N += 4 - answer;
      } else if (qId % 8 === 4 || qId % 8 === 5) {
        answer > 3 ? dimensions.T += answer - 3 : dimensions.F += 4 - answer;
      } else {
        answer > 3 ? dimensions.J += answer - 3 : dimensions.P += 4 - answer;
      }
    });
    const type = `${dimensions.E > dimensions.I ? 'E' : 'I'}${dimensions.S > dimensions.N ? 'S' : 'N'}${dimensions.T > dimensions.F ? 'T' : 'F'}${dimensions.J > dimensions.P ? 'J' : 'P'}` as MBTIType;
    setMbtiType(type);
    const newTraits: Trait[] = [
      {
        name: 'Extraversion',
        value: Math.round((dimensions.E / (dimensions.E + dimensions.I)) * 100),
        description: 'How energized you are by social interaction'
      },
      {
        name: 'Sensing',
        value: Math.round((dimensions.S / (dimensions.S + dimensions.N)) * 100),
        description: 'How you gather information from the world'
      },
      {
        name: 'Thinking',
        value: Math.round((dimensions.T / (dimensions.T + dimensions.F)) * 100),
        description: 'How you make decisions'
      },
      {
        name: 'Judging',
        value: Math.round((dimensions.J / (dimensions.J + dimensions.P)) * 100),
        description: 'How you approach structure and planning'
      },
      {
        name: 'Introversion',
        value: Math.round((dimensions.I / (dimensions.E + dimensions.I)) * 100),
        description: 'How you recharge your energy'
      },
      {
        name: 'Intuition',
        value: Math.round((dimensions.N / (dimensions.S + dimensions.N)) * 100),
        description: 'How you process information'
      },
      {
        name: 'Feeling',
        value: Math.round((dimensions.F / (dimensions.T + dimensions.F)) * 100),
        description: 'How you consider emotions in decisions'
      },
      {
        name: 'Perceiving',
        value: Math.round((dimensions.P / (dimensions.J + dimensions.P)) * 100),
        description: 'How flexible you are with plans'
      }
    ];    
    setTraits(newTraits);
  };

  const calculateSuggestedCareers = () => {
    const mockCareers: Career[] = [
      {
        id: 1,
        title: 'UX Designer',
        description: 'Design digital user experiences that are intuitive and enjoyable.',
        personalityFit: 92,
        salarySatisfaction: 85,
        growthPotential: 90,
        overallScore: 90,
        dailyActivities: [
          'Creating wireframes and prototypes',
          'Conducting user research',
          'Collaborating with developers',
          'Presenting designs to stakeholders'
        ],
        salaryRange: { min: 65000, max: 120000 },
        outlook: 'Growing demand as digital products continue to expand',
        aiRisk: 'Low'
      },
      {
        id: 2,
        title: 'Data Scientist',
        description: 'Analyze complex data to help organizations make better decisions.',
        personalityFit: 88,
        salarySatisfaction: 95,
        growthPotential: 95,
        overallScore: 91,
        dailyActivities: [
          'Building predictive models',
          'Cleaning and preprocessing data',
          'Visualizing insights',
          'Presenting findings to business teams'
        ],
        salaryRange: { min: 85000, max: 150000 },
        outlook: 'High demand across all industries',
        aiRisk: 'Medium'
      },
      {
        id: 3,
        title: 'Clinical Psychologist',
        description: 'Help people overcome challenges and improve mental health.',
        personalityFit: 95,
        salarySatisfaction: 75,
        growthPotential: 80,
        overallScore: 87,
        dailyActivities: [
          'Conducting therapy sessions',
          'Diagnosing mental health conditions',
          'Developing treatment plans',
          'Keeping detailed session notes'
        ],
        salaryRange: { min: 60000, max: 130000 },
        outlook: 'Growing need for mental health professionals',
        aiRisk: 'Low'
      },
      {
        id: 4,
        title: 'Environmental Scientist',
        description: 'Study environmental problems and develop solutions to protect the earth.',
        personalityFit: 85,
        salarySatisfaction: 70,
        growthPotential: 85,
        overallScore: 81,
        dailyActivities: [
          'Collecting field samples',
          'Analyzing environmental data',
          'Writing research reports',
          'Advising on environmental policies'
        ],
        salaryRange: { min: 50000, max: 110000 },
        outlook: 'Increasing importance with climate change concerns',
        aiRisk: 'Low'
      },
      {
        id: 5,
        title: 'Software Developer',
        description: 'Create applications and systems that power our digital world.',
        personalityFit: 80,
        salarySatisfaction: 90,
        growthPotential: 90,
        overallScore: 85,
        dailyActivities: [
          'Writing and testing code',
          'Fixing bugs and optimizing performance',
          'Collaborating in development teams',
          'Learning new technologies'
        ],
        salaryRange: { min: 70000, max: 150000 },
        outlook: 'Strong demand across industries',
        aiRisk: 'Medium'
      }
    ];
    mockCareers.sort((a, b) => b.overallScore - a.overallScore);
    if (!isPremiumUser) {
      mockCareers.sort((a, b) => a.overallScore - b.overallScore);
      setSuggestedCareers([mockCareers[0]]);
    } else {
      mockCareers.sort((a, b) => b.overallScore - a.overallScore);
      setSuggestedCareers(mockCareers);
    }
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
        calculateMBTI, calculateSuggestedCareers,
        isPremiumUser, setIsPremiumUser,
        totalQuestions
      }}
    >
      {children}
    </PersonalityContext.Provider>
  );
};
