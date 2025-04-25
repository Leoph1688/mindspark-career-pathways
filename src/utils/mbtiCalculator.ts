
import { MBTIType, Trait } from '@/types/personality';

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
  
  const hasSufficientData = Object.values(dimensions).some(val => val > 0);
  
  const type = hasSufficientData
    ? `${dimensions.E > dimensions.I ? 'E' : 'I'}${dimensions.S > dimensions.N ? 'S' : 'N'}${dimensions.T > dimensions.F ? 'T' : 'F'}${dimensions.J > dimensions.P ? 'J' : 'P'}` as MBTIType
    : 'ENFP' as MBTIType;
  
  setMbtiType(type);
  setTraits(calculatePersonalityTraits(dimensions));
}

function calculatePersonalityTraits(dimensions: Record<string, number>): Trait[] {
  const calculatePercentage = (value: number, total: number): number => {
    return total > 0 ? Math.round((value / total) * 100) : 50;
  };

  return [
    {
      name: 'Extraversion',
      value: calculatePercentage(dimensions.E, dimensions.E + dimensions.I),
      description: 'How energized you are by social interaction'
    },
    {
      name: 'Sensing',
      value: calculatePercentage(dimensions.S, dimensions.S + dimensions.N),
      description: 'How you gather information from the world'
    },
    {
      name: 'Thinking',
      value: calculatePercentage(dimensions.T, dimensions.T + dimensions.F),
      description: 'How you make decisions'
    },
    {
      name: 'Judging',
      value: calculatePercentage(dimensions.J, dimensions.J + dimensions.P),
      description: 'How you approach structure and planning'
    },
    {
      name: 'Introversion',
      value: calculatePercentage(dimensions.I, dimensions.E + dimensions.I),
      description: 'How you recharge your energy'
    },
    {
      name: 'Intuition',
      value: calculatePercentage(dimensions.N, dimensions.S + dimensions.N),
      description: 'How you process information'
    },
    {
      name: 'Feeling',
      value: calculatePercentage(dimensions.F, dimensions.T + dimensions.F),
      description: 'How you consider emotions in decisions'
    },
    {
      name: 'Perceiving',
      value: calculatePercentage(dimensions.P, dimensions.J + dimensions.P),
      description: 'How flexible you are with plans'
    }
  ];
}
