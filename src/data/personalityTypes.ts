
export interface PersonalityType {
  type: string;
  name: string;
  description: string;
  strengths: string[];
  challenges: string[];
  careerThemes: string[];
  learningStyle: string;
}

export const personalityTypes: Record<string, PersonalityType> = {
  "INTJ": {
    type: "INTJ",
    name: "The Architect",
    description: "Strategic thinkers with a talent for planning and systems design. You have a unique ability to see the bigger picture while understanding how all the parts interconnect.",
    strengths: [
      "Strategic thinking",
      "Independent problem-solving",
      "Rational decision making",
      "Long-term planning"
    ],
    challenges: [
      "May appear overly critical",
      "Can seem aloof or detached",
      "Perfectionist tendencies",
      "May dismiss emotions in decision making"
    ],
    careerThemes: [
      "Strategic planning",
      "Systems architecture",
      "Scientific research",
      "Problem-solving roles"
    ],
    learningStyle: "You learn best through conceptual understanding and intellectual challenge. You prefer to work independently and appreciate clear, logical explanations."
  },
  "INTP": {
    type: "INTP",
    name: "The Logician",
    description: "Innovative thinkers with a thirst for knowledge and logical analysis. You excel at spotting patterns and finding creative solutions to complex problems.",
    strengths: [
      "Analytical thinking",
      "Creativity in problem-solving",
      "Adaptability to new ideas",
      "Intellectual curiosity"
    ],
    challenges: [
      "May overthink decisions",
      "Can struggle with follow-through",
      "May appear absent-minded",
      "Can have difficulty with practical details"
    ],
    careerThemes: [
      "Theoretical research",
      "Software development",
      "Data analysis",
      "Creative problem-solving"
    ],
    learningStyle: "You thrive on understanding underlying principles and theories. You enjoy intellectual challenges and prefer self-directed learning where you can explore topics deeply."
  },
  "ENTJ": {
    type: "ENTJ",
    name: "The Commander",
    description: "Bold, decisive leaders with a talent for organization and efficiency. You naturally take charge and drive groups toward ambitious goals with clear vision.",
    strengths: [
      "Strategic leadership",
      "Decisiveness",
      "Efficiency focus",
      "Strong organizational skills"
    ],
    challenges: [
      "May appear domineering",
      "Can be impatient with inefficiency",
      "May overlook emotional considerations",
      "Can push themselves and others too hard"
    ],
    careerThemes: [
      "Executive leadership",
      "Entrepreneurship",
      "Business strategy",
      "Project management"
    ],
    learningStyle: "You learn by setting clear goals and creating structured plans. You appreciate practical applications and efficiency in the learning process."
  },
  "ENTP": {
    type: "ENTP",
    name: "The Innovator",
    description: "Quick-thinking debaters with a love for novel ideas and creative solutions. You're energized by possibilities and enjoy challenging conventional thinking.",
    strengths: [
      "Creative problem-solving",
      "Adaptability",
      "Enthusiastic idea generation",
      "Debate and persuasion skills"
    ],
    challenges: [
      "May leave projects unfinished",
      "Can become bored with routine",
      "May debate for sport rather than resolution",
      "Can struggle with follow-through"
    ],
    careerThemes: [
      "Entrepreneurship",
      "Creative direction",
      "Strategic consulting",
      "Product innovation"
    ],
    learningStyle: "You learn through debate, questioning, and exploring multiple perspectives. You enjoy theoretical concepts with practical applications and thrive in dynamic learning environments."
  },
  "INFJ": {
    type: "INFJ",
    name: "The Advocate",
    description: "Quiet visionaries with strong values and intuition about people. You seek meaning in connections and are driven to help others fulfill their potential.",
    strengths: [
      "Empathetic understanding",
      "Long-term vision",
      "Creative problem-solving",
      "Deep commitment to values"
    ],
    challenges: [
      "Perfectionist tendencies",
      "May take on others' problems",
      "Can burn out from giving too much",
      "May be overly private"
    ],
    careerThemes: [
      "Counseling and therapy",
      "Non-profit leadership",
      "Teaching and education",
      "Creative writing"
    ],
    learningStyle: "You learn best when content connects to values and meaningful applications. You appreciate metaphors and creative approaches to learning."
  },
  "INFP": {
    type: "INFP",
    name: "The Mediator",
    description: "Idealistic, creative individuals with deep empathy and personal values. You seek harmony and are driven to make a positive difference in the world.",
    strengths: [
      "Creativity and imagination",
      "Strong personal values",
      "Empathy and understanding",
      "Adaptability in situations"
    ],
    challenges: [
      "May be overly idealistic",
      "Can take criticism personally",
      "May avoid necessary conflict",
      "Can struggle with practical details"
    ],
    careerThemes: [
      "Creative writing",
      "Counseling",
      "Human resources",
      "Non-profit work"
    ],
    learningStyle: "You learn best when personally connecting with the material and finding meaning in what you study. You appreciate flexibility and creative expression in learning."
  },
  "ENFJ": {
    type: "ENFJ",
    name: "The Protagonist",
    description: "Charismatic leaders with a focus on supporting others' growth and potential. You naturally inspire and organize people around shared values and goals.",
    strengths: [
      "Natural leadership",
      "Empathetic communication",
      "Organization for people's needs",
      "Inspiring motivation"
    ],
    challenges: [
      "May neglect own needs",
      "Can be overly sensitive to criticism",
      "May struggle with tough decisions",
      "Can take on too many responsibilities"
    ],
    careerThemes: [
      "Education and teaching",
      "Human resources",
      "Team leadership",
      "Corporate training"
    ],
    learningStyle: "You learn best in collaborative environments where you can discuss and teach concepts to others. You appreciate structured learning with personal relevance."
  },
  "ENFP": {
    type: "ENFP",
    name: "The Campaigner",
    description: "Enthusiastic, creative people-oriented individuals who see possibilities everywhere. You connect ideas and people with natural charisma and innovation.",
    strengths: [
      "Creativity and enthusiasm",
      "People connection skills",
      "Adaptability",
      "Inspirational communication"
    ],
    challenges: [
      "May struggle with focus",
      "Can be disorganized with details",
      "May avoid difficult situations",
      "Can have trouble with follow-through"
    ],
    careerThemes: [
      "Creative fields",
      "Marketing and communications",
      "Entrepreneurship",
      "People-oriented leadership"
    ],
    learningStyle: "You learn through exploration and discovering connections between concepts. You thrive in dynamic, interactive learning environments with variety and creativity."
  },
  "ISTJ": {
    type: "ISTJ",
    name: "The Inspector",
    description: "Practical, detail-oriented individuals with a strong sense of duty. You value traditions and apply methodical approaches to ensure reliability and accuracy.",
    strengths: [
      "Reliability and consistency",
      "Attention to detail",
      "Practical problem-solving",
      "Strong work ethic"
    ],
    challenges: [
      "May resist necessary change",
      "Can be overly focused on rules",
      "May miss the bigger picture",
      "Can be perceived as inflexible"
    ],
    careerThemes: [
      "Accounting and finance",
      "Project management",
      "Quality assurance",
      "Operations management"
    ],
    learningStyle: "You learn best through methodical, step-by-step instruction with clear practical applications. You value structure and prefer to master one concept before moving to the next."
  },
  "ISFJ": {
    type: "ISFJ",
    name: "The Protector",
    description: "Warm, detail-oriented individuals with a strong desire to be of service. You notice what others need and work diligently to provide stability and support.",
    strengths: [
      "Reliable and loyal",
      "Detail-oriented care",
      "Practical assistance",
      "Strong observation skills"
    ],
    challenges: [
      "May neglect own needs",
      "Can take on too much responsibility",
      "May avoid necessary conflict",
      "Can resist beneficial changes"
    ],
    careerThemes: [
      "Healthcare and nursing",
      "Administrative support",
      "Education and childcare",
      "Social services"
    ],
    learningStyle: "You learn best through hands-on practice with clear, specific instructions. You appreciate a supportive learning environment and practical applications."
  },
  "ESTJ": {
    type: "ESTJ",
    name: "The Director",
    description: "Practical, direct organizers who value tradition and results. You excel at implementing systems and procedures that get things done efficiently.",
    strengths: [
      "Organization and structure",
      "Practical problem-solving",
      "Reliability and consistency",
      "Clear communication"
    ],
    challenges: [
      "May be inflexible with change",
      "Can be overly focused on rules",
      "May seem insensitive at times",
      "Can miss emotional undercurrents"
    ],
    careerThemes: [
      "Management and administration",
      "Project coordination",
      "Finance and accounting",
      "Military and law enforcement"
    ],
    learningStyle: "You learn best through structured, practical instruction with clear applications. You appreciate efficiency and direct communication in the learning process."
  },
  "ESFJ": {
    type: "ESFJ",
    name: "The Caregiver",
    description: "Warm, organized individuals focused on creating harmony and meeting others' needs. You value traditions and work to create supportive, structured environments.",
    strengths: [
      "Strong interpersonal awareness",
      "Practical organization",
      "Reliable follow-through",
      "Cooperative team skills"
    ],
    challenges: [
      "May be overly concerned with others' opinions",
      "Can neglect own needs",
      "May avoid necessary conflict",
      "Can be uncomfortable with change"
    ],
    careerThemes: [
      "Healthcare administration",
      "Customer service",
      "Human resources",
      "Event planning"
    ],
    learningStyle: "You learn best in supportive, collaborative environments with clear structure. You appreciate practical applications and opportunities to help others learn."
  },
  "ISTP": {
    type: "ISTP",
    name: "The Craftsperson",
    description: "Practical problem-solvers who excel in understanding how systems work. You're adaptable and action-oriented, with natural mechanical and technical abilities.",
    strengths: [
      "Hands-on problem solving",
      "Adaptability in crisis",
      "Technical and mechanical skills",
      "Calm, logical approach"
    ],
    challenges: [
      "May seem detached or aloof",
      "Can be resistant to planning ahead",
      "May avoid emotional discussions",
      "Can get bored with routine"
    ],
    careerThemes: [
      "Engineering and mechanics",
      "Technical troubleshooting",
      "Emergency response",
      "Construction and trades"
    ],
    learningStyle: "You learn best through hands-on experimentation and real-world applications. You prefer to understand how things work through direct experience rather than theory."
  },
  "ISFP": {
    type: "ISFP",
    name: "The Composer",
    description: "Gentle, sensitive individuals with strong aesthetic appreciation. You live in the moment and seek to create or experience beauty while staying true to your values.",
    strengths: [
      "Artistic sensitivity",
      "Adaptability",
      "Strong personal values",
      "Hands-on creativity"
    ],
    challenges: [
      "May avoid conflict",
      "Can be overly private",
      "May struggle with long-term planning",
      "Can be resistant to structure"
    ],
    careerThemes: [
      "Visual and performing arts",
      "Healthcare support roles",
      "Culinary arts",
      "Personal services"
    ],
    learningStyle: "You learn best through hands-on experience in a supportive environment. You appreciate artistic expression and personal connection to what you're learning."
  },
  "ESTP": {
    type: "ESTP",
    name: "The Dynamo",
    description: "Energetic, action-oriented problem-solvers who excel in the moment. You're adaptable, persuasive, and enjoy tackling challenges with practical solutions.",
    strengths: [
      "Quick problem-solving",
      "Adaptability under pressure",
      "Persuasive communication",
      "Practical risk-taking"
    ],
    challenges: [
      "May get bored with routine",
      "Can neglect long-term consequences",
      "May avoid theoretical discussions",
      "Can be impulsive"
    ],
    careerThemes: [
      "Sales and negotiation",
      "Entrepreneurship",
      "Emergency services",
      "Sports and physical training"
    ],
    learningStyle: "You learn best through active, hands-on experiences with immediate application. You prefer practical knowledge over theory and enjoy energetic learning environments."
  },
  "ESFP": {
    type: "ESFP",
    name: "The Performer",
    description: "Spontaneous, enthusiastic people who love life and bring fun to any situation. You're observant about people's needs and practical in finding ways to help in the moment.",
    strengths: [
      "Social awareness",
      "Adaptability",
      "Practical assistance",
      "Enthusiastic energy"
    ],
    challenges: [
      "May avoid difficult situations",
      "Can struggle with long-term planning",
      "May be easily distracted",
      "Can resist theoretical concepts"
    ],
    careerThemes: [
      "Entertainment and performance",
      "Customer service",
      "Sales and promotion",
      "Childcare and education"
    ],
    learningStyle: "You learn best through interactive, fun experiences with practical applications. You appreciate supportive environments where you can collaborate with others."
  }
};
