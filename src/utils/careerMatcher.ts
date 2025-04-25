
import { MBTIType, Trait, Career } from '@/types/personality';
import { careerTraitsMap } from '@/data/careerTraits';

// Calculate MBTI match score between user traits and career requirements
function calculateMBTIMatchScore(mbtiType: MBTIType, careerName: string): number {
  const careerData = careerTraitsMap[careerName];
  
  if (!careerData || !mbtiType) return 50;
  
  return careerData.mbtiCompatibility[mbtiType] 
    ? careerData.mbtiCompatibility[mbtiType] * 100
    : 60;
}

// Calculate horoscope match score
function calculateHoroscopeMatchScore(zodiacSign: string, careerName: string): number {
  const careerData = careerTraitsMap[careerName];
  
  if (!careerData || !zodiacSign) return 50;
  
  return careerData.zodiacCompatibility[zodiacSign]
    ? careerData.zodiacCompatibility[zodiacSign] * 100
    : 60;
}

// Calculate reinforcement score
function calculateReinforcementScore(userTraits: Trait[], careerName: string): number {
  const career = careerTraitsMap[careerName];
  
  if (!career) return 50;
  
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
  
  const userTopTraits = userTraits
    .filter(trait => trait.value > 70)
    .map(trait => standardTraitNames[trait.name as keyof typeof standardTraitNames] || trait.name);
  
  const matchCount = career.keyTraits.filter(trait => userTopTraits.includes(trait)).length;
  
  return career.keyTraits.length > 0 
    ? (matchCount / career.keyTraits.length) * 100 
    : 50;
}

// Calculate career match scores
function calculateCareerMatchScores(
  mbtiType: MBTIType,
  traits: Trait[],
  zodiacSign: string,
  careers: Career[]
): Career[] {
  return careers.map(career => {
    const mbtiMatchScore = calculateMBTIMatchScore(mbtiType, career.title);
    const horoscopeMatchScore = calculateHoroscopeMatchScore(zodiacSign, career.title);
    const reinforcementScore = calculateReinforcementScore(traits, career.title);
    const userModifierScore = 75;
    
    const weightedScore = Math.round(
      (mbtiMatchScore * 0.5) +
      (horoscopeMatchScore * 0.3) +
      (reinforcementScore * 0.1) +
      (userModifierScore * 0.1)
    );
    
    const personalityFit = Math.round((mbtiMatchScore * 0.7) + (horoscopeMatchScore * 0.3));
    
    return {
      ...career,
      personalityFit,
      overallScore: weightedScore
    };
  });
}

export function calculateSuggestedCareers(
  isPremiumUser: boolean,
  setSuggestedCareers: (careers: Career[]) => void,
  mockCareers: Career[],
  mbtiType: MBTIType,
  traits: Trait[],
  zodiacSign: string
) {
  const scoredCareers = calculateCareerMatchScores(mbtiType, traits, zodiacSign, mockCareers);
  scoredCareers.sort((a, b) => b.overallScore - a.overallScore);
  
  if (!isPremiumUser) {
    setSuggestedCareers([scoredCareers[0]]);
  } else {
    setSuggestedCareers(scoredCareers);
  }
}
