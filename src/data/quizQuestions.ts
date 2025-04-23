
export interface QuizQuestion {
  id: number;
  text: string;
  dimension: 'E-I' | 'S-N' | 'T-F' | 'J-P'; // The MBTI dimension this question relates to
  leftOption: string; // Option for 1 on the scale
  rightOption: string; // Option for 7 on the scale
}

export const quizQuestions: QuizQuestion[] = [
  // E-I Questions (Extraversion vs Introversion)
  {
    id: 1,
    text: "At parties, I usually...",
    dimension: 'E-I',
    leftOption: "Talk to many different people",
    rightOption: "Stick with a few people I know"
  },
  {
    id: 2,
    text: "After a long day, I prefer to...",
    dimension: 'E-I',
    leftOption: "Go out with friends",
    rightOption: "Spend time alone"
  },
  {
    id: 3,
    text: "When meeting new people, I tend to...",
    dimension: 'E-I',
    leftOption: "Initiate conversations",
    rightOption: "Wait for others to approach me"
  },
  {
    id: 4,
    text: "In group projects, I'm more likely to...",
    dimension: 'E-I',
    leftOption: "Take charge and speak up",
    rightOption: "Listen and share ideas when asked"
  },
  {
    id: 5,
    text: "My ideal weekend includes...",
    dimension: 'E-I',
    leftOption: "Social activities with friends",
    rightOption: "Quiet time for my personal interests"
  },
  
  // S-N Questions (Sensing vs Intuition)
  {
    id: 6,
    text: "When solving problems, I rely more on...",
    dimension: 'S-N',
    leftOption: "Past experiences and facts",
    rightOption: "Hunches and possibilities"
  },
  {
    id: 7,
    text: "I pay more attention to...",
    dimension: 'S-N',
    leftOption: "Concrete details and specifics",
    rightOption: "The big picture and connections"
  },
  {
    id: 8,
    text: "I prefer instructions that...",
    dimension: 'S-N',
    leftOption: "Give step-by-step details",
    rightOption: "Explain the general concept"
  },
  {
    id: 9,
    text: "When reading, I enjoy...",
    dimension: 'S-N',
    leftOption: "Realistic stories with clear descriptions",
    rightOption: "Metaphorical stories with hidden meanings"
  },
  {
    id: 10,
    text: "I tend to trust...",
    dimension: 'S-N',
    leftOption: "My direct observations",
    rightOption: "My gut feelings"
  },
  
  // T-F Questions (Thinking vs Feeling)
  {
    id: 11,
    text: "When making decisions, I prioritize...",
    dimension: 'T-F',
    leftOption: "Logic and consistency",
    rightOption: "People's feelings and harmony"
  },
  {
    id: 12,
    text: "In disagreements, I focus on...",
    dimension: 'T-F',
    leftOption: "Finding the objective truth",
    rightOption: "Maintaining good relationships"
  },
  {
    id: 13,
    text: "I'm more comfortable giving...",
    dimension: 'T-F',
    leftOption: "Honest critique",
    rightOption: "Supportive encouragement"
  },
  {
    id: 14,
    text: "I value...",
    dimension: 'T-F',
    leftOption: "Justice and fair treatment",
    rightOption: "Mercy and compassion"
  },
  {
    id: 15,
    text: "In group decisions, I prefer...",
    dimension: 'T-F',
    leftOption: "Analyzing pros and cons",
    rightOption: "Considering everyone's values"
  },
  
  // J-P Questions (Judging vs Perceiving)
  {
    id: 16,
    text: "I prefer to...",
    dimension: 'J-P',
    leftOption: "Make plans and stick to them",
    rightOption: "Be spontaneous and flexible"
  },
  {
    id: 17,
    text: "My workspace tends to be...",
    dimension: 'J-P',
    leftOption: "Organized and structured",
    rightOption: "Creative and adaptable"
  },
  {
    id: 18,
    text: "I feel better when things are...",
    dimension: 'J-P',
    leftOption: "Decided and finalized",
    rightOption: "Open to change"
  },
  {
    id: 19,
    text: "I prefer projects that...",
    dimension: 'J-P',
    leftOption: "Have clear guidelines",
    rightOption: "Allow for exploration"
  },
  {
    id: 20,
    text: "Deadlines for me are...",
    dimension: 'J-P',
    leftOption: "Serious commitments to meet",
    rightOption: "Flexible suggestions"
  },
];

// Continuing with more questions to reach 70
// This is a simplified version with just 20 questions for the prototype
// In production, we'd expand to the full 70 questions as specified
