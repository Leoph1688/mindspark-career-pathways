
import { createContext } from 'react';
import { PersonalityContextType } from '@/types/personality';

const PersonalityContext = createContext<PersonalityContextType | undefined>(undefined);

export default PersonalityContext;
