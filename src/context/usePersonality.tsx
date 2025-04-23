
import { useContext } from 'react';
import PersonalityContext from './PersonalityContext';
import { PersonalityContextType } from '@/types/personality';

export const usePersonality = (): PersonalityContextType => {
  const context = useContext(PersonalityContext);
  if (context === undefined) {
    throw new Error('usePersonality must be used within a PersonalityProvider');
  }
  return context;
};
