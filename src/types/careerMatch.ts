
export type CareerTraits = {
  name: string;
  keyTraits: string[];
  mbtiCompatibility: Record<string, number>;
  zodiacCompatibility: Record<string, number>;
};

export type CareerMatchScore = {
  mbtiMatchScore: number;
  horoscopeMatchScore: number;
  reinforcementScore: number;
  userModifierScore: number;
  totalScore: number;
};
