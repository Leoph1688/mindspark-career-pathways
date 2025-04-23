
import { Career } from "@/types/personality";

export const mockCareers: Career[] = [
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
