
import { MBTIType, Trait, Career } from '@/types/personality';

// Calculates MBTI type and traits from responses
export function calculateMBTI(
  responses: Record<number, number>,
  setMbtiType: (type: MBTIType) => void,
  setTraits: (traits: Trait[]) => void
) {
  const dimensions = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  Object.entries(responses).forEach(([questionId, answer]) => {
    const qId = parseInt(questionId);
    if (qId % 8 === 0 || qId % 8 === 1) {
      answer > 3 ? (dimensions.E += answer - 3) : (dimensions.I += 4 - answer);
    } else if (qId % 8 === 2 || qId % 8 === 3) {
      answer > 3 ? (dimensions.S += answer - 3) : (dimensions.N += 4 - answer);
    } else if (qId % 8 === 4 || qId % 8 === 5) {
      answer > 3 ? (dimensions.T += answer - 3) : (dimensions.F += 4 - answer);
    } else {
      answer > 3 ? (dimensions.J += answer - 3) : (dimensions.P += 4 - answer);
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
}

// Filter/sort and return career suggestions
export function calculateSuggestedCareers(
  isPremiumUser: boolean,
  setSuggestedCareers: (careers: Career[]) => void,
  mockCareers: Career[]
) {
  const sortedCareers = [...mockCareers];
  sortedCareers.sort((a, b) => b.overallScore - a.overallScore);
  if (!isPremiumUser) {
    sortedCareers.sort((a, b) => a.overallScore - b.overallScore);
    setSuggestedCareers([sortedCareers[0]]);
  } else {
    sortedCareers.sort((a, b) => b.overallScore - a.overallScore);
    setSuggestedCareers(sortedCareers);
  }
}
