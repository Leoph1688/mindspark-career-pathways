
export type MBTIType = 'INTJ' | 'INTP' | 'ENTJ' | 'ENTP' | 'INFJ' | 'INFP' | 'ENFJ' | 'ENFP' | 
  'ISTJ' | 'ISFJ' | 'ESTJ' | 'ESFJ' | 'ISTP' | 'ISFP' | 'ESTP' | 'ESFP' | null;

export type Trait = {
  name: string;
  value: number; // 0-100
  description: string;
};

export type Career = {
  id: number;
  title: string;
  description: string;
  personalityFit: number; // 0-100
  salarySatisfaction: number; // 0-100
  growthPotential: number; // 0-100
  overallScore: number; // 0-100
  dailyActivities: string[];
  salaryRange: {
    min: number;
    max: number;
  };
  outlook: string;
  aiRisk: 'Low' | 'Medium' | 'High';
};

export interface PersonalityContextType {
  currentQuestionIndex: number;
  setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  responses: Record<number, number>;
  setResponses: React.Dispatch<React.SetStateAction<Record<number, number>>>;
  mbtiType: MBTIType;
  setMbtiType: React.Dispatch<React.SetStateAction<MBTIType>>;
  traits: Trait[];
  setTraits: React.Dispatch<React.SetStateAction<Trait[]>>;
  birthdate: string;
  setBirthdate: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  zodiacSign: string;
  setZodiacSign: React.Dispatch<React.SetStateAction<string>>;
  suggestedCareers: Career[];
  setSuggestedCareers: React.Dispatch<React.SetStateAction<Career[]>>;
  quizCompleted: boolean;
  setQuizCompleted: React.Dispatch<React.SetStateAction<boolean>>;
  calculateMBTI: () => void;
  calculateSuggestedCareers: () => void;
  isPremiumUser: boolean;
  setIsPremiumUser: React.Dispatch<React.SetStateAction<boolean>>;
  totalQuestions: number;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}
