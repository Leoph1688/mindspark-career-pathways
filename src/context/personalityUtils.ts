
import { MBTIType, Trait, Career } from '@/types/personality';
import { careerTraitsMap } from '@/data/careerTraits';
import { CareerMatchScore } from '@/types/careerMatch';

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

// Calculate MBTI match score between user traits and career requirements
function calculateMBTIMatchScore(mbtiType: MBTIType, careerName: string): number {
  // Get career traits data
  const careerData = careerTraitsMap[careerName];
  
  if (!careerData || !mbtiType) return 50; // Default value if data not found
  
  // Direct MBTI compatibility score if available
  if (careerData.mbtiCompatibility[mbtiType]) {
    return careerData.mbtiCompatibility[mbtiType] * 100;
  }
  
  // Fallback to average score if specific type not found
  return 60; // Default compatibility score
}

// Calculate horoscope match score
function calculateHoroscopeMatchScore(zodiacSign: string, careerName: string): number {
  const careerData = careerTraitsMap[careerName];
  
  if (!careerData || !zodiacSign) return 50; // Default value if data not found
  
  // Get zodiac compatibility score if available
  if (careerData.zodiacCompatibility[zodiacSign]) {
    return careerData.zodiacCompatibility[zodiacSign] * 100;
  }
  
  // Fallback to average score if specific zodiac not found
  return 60; // Default compatibility score
}

// Calculate reinforcement score (similarity between user traits and career key traits)
function calculateReinforcementScore(userTraits: Trait[], careerName: string): number {
  const career = careerTraitsMap[careerName];
  
  if (!career) return 50; // Default if career not found
  
  // For demonstration, we'll convert user trait names to a standardized list
  const standardTraitNames = {
    'Extraversion': 'Extraverted',
    'Introversion': 'Introverted',
    'Sensing': 'Practical',
    'Intuition': 'Creative',
    'Thinking': 'Analytical',
    'Feeling': 'Empathetic',
    'Judging': 'Organized',
    'Perceiving': 'Adaptable'
  };
  
  // Extract top user traits (those over 70%)
  const userTopTraits = userTraits
    .filter(trait => trait.value > 70)
    .map(trait => standardTraitNames[trait.name as keyof typeof standardTraitNames] || trait.name);
  
  // Count matches between user's top traits and career key traits
  let matchCount = 0;
  career.keyTraits.forEach(careerTrait => {
    if (userTopTraits.includes(careerTrait)) {
      matchCount++;
    }
  });
  
  // Calculate percentage match
  const matchScore = career.keyTraits.length > 0 
    ? (matchCount / career.keyTraits.length) * 100 
    : 50;
  
  return matchScore;
}

// Calculate career match scores using the weighting algorithm
function calculateCareerMatchScores(
  mbtiType: MBTIType,
  traits: Trait[],
  zodiacSign: string,
  careers: Career[]
): Career[] {
  return careers.map(career => {
    // Calculate component scores
    const mbtiMatchScore = calculateMBTIMatchScore(mbtiType, career.title);
    const horoscopeMatchScore = calculateHoroscopeMatchScore(zodiacSign, career.title);
    const reinforcementScore = calculateReinforcementScore(traits, career.title);
    const userModifierScore = 75; // Default modifier score for now
    
    // Apply the weighting algorithm:
    // CareerScore = (MBTI_Match_Score * 0.5) + (Horoscope_Match_Score * 0.3) + 
    //               (Reinforcement_Score * 0.1) + (User_Modifier_Score * 0.1)
    const weightedScore = Math.round(
      (mbtiMatchScore * 0.5) +
      (horoscopeMatchScore * 0.3) +
      (reinforcementScore * 0.1) +
      (userModifierScore * 0.1)
    );
    
    // Personality Fit is primarily based on MBTI match
    const personalityFit = Math.round((mbtiMatchScore * 0.7) + (horoscopeMatchScore * 0.3));
    
    // Update career scores
    return {
      ...career,
      personalityFit,
      overallScore: weightedScore
    };
  });
}

// Filter/sort and return career suggestions
export function calculateSuggestedCareers(
  isPremiumUser: boolean,
  setSuggestedCareers: (careers: Career[]) => void,
  mockCareers: Career[],
  mbtiType: MBTIType,
  traits: Trait[],
  zodiacSign: string
) {
  // Calculate scores for each career
  const scoredCareers = calculateCareerMatchScores(mbtiType, traits, zodiacSign, mockCareers);
  
  // Sort careers by overall score
  scoredCareers.sort((a, b) => b.overallScore - a.overallScore);
  
  if (!isPremiumUser) {
    // For free users, return only the top match
    setSuggestedCareers([scoredCareers[0]]);
  } else {
    // For premium users, return all scored careers
    setSuggestedCareers(scoredCareers);
  }
}
