
import { CareerTraits } from "@/types/careerMatch";

export const careerTraitsData: CareerTraits[] = [
  {
    name: "UX Designer",
    keyTraits: ["Creative", "Empathetic", "Analytical", "Collaborative"],
    mbtiCompatibility: {
      "INFJ": 0.9, "ENFJ": 0.8, "INFP": 0.85, "ENFP": 0.85,
      "INTJ": 0.7, "ENTJ": 0.6, "INTP": 0.75, "ENTP": 0.8,
      "ISFJ": 0.6, "ESFJ": 0.6, "ISFP": 0.8, "ESFP": 0.7,
      "ISTJ": 0.5, "ESTJ": 0.4, "ISTP": 0.6, "ESTP": 0.5
    },
    zodiacCompatibility: {
      "Aquarius": 0.85, "Pisces": 0.75, "Aries": 0.6, "Taurus": 0.7,
      "Gemini": 0.8, "Cancer": 0.6, "Leo": 0.7, "Virgo": 0.85, 
      "Libra": 0.9, "Scorpio": 0.7, "Sagittarius": 0.65, "Capricorn": 0.7
    }
  },
  {
    name: "Data Scientist",
    keyTraits: ["Analytical", "Methodical", "Curious", "Detail-oriented"],
    mbtiCompatibility: {
      "INTJ": 0.95, "ENTJ": 0.85, "INTP": 0.9, "ENTP": 0.85,
      "INFJ": 0.8, "ENFJ": 0.7, "INFP": 0.7, "ENFP": 0.65,
      "ISTJ": 0.85, "ESTJ": 0.8, "ISTP": 0.8, "ESTP": 0.6,
      "ISFJ": 0.7, "ESFJ": 0.5, "ISFP": 0.5, "ESFP": 0.4
    },
    zodiacCompatibility: {
      "Aquarius": 0.9, "Pisces": 0.6, "Aries": 0.65, "Taurus": 0.7,
      "Gemini": 0.75, "Cancer": 0.6, "Leo": 0.6, "Virgo": 0.95, 
      "Libra": 0.7, "Scorpio": 0.85, "Sagittarius": 0.6, "Capricorn": 0.9
    }
  },
  {
    name: "Clinical Psychologist",
    keyTraits: ["Empathetic", "Analytical", "Patient", "Perceptive"],
    mbtiCompatibility: {
      "INFJ": 0.95, "ENFJ": 0.9, "INFP": 0.9, "ENFP": 0.85,
      "INTJ": 0.8, "ENTJ": 0.75, "INTP": 0.8, "ENTP": 0.75,
      "ISFJ": 0.85, "ESFJ": 0.8, "ISFP": 0.8, "ESFP": 0.7,
      "ISTJ": 0.7, "ESTJ": 0.6, "ISTP": 0.6, "ESTP": 0.5
    },
    zodiacCompatibility: {
      "Aquarius": 0.7, "Pisces": 0.9, "Aries": 0.6, "Taurus": 0.7,
      "Gemini": 0.7, "Cancer": 0.9, "Leo": 0.7, "Virgo": 0.8, 
      "Libra": 0.8, "Scorpio": 0.9, "Sagittarius": 0.6, "Capricorn": 0.7
    }
  },
  {
    name: "Environmental Scientist",
    keyTraits: ["Analytical", "Detail-oriented", "Passionate", "Patient"],
    mbtiCompatibility: {
      "INTJ": 0.9, "ENTJ": 0.8, "INTP": 0.9, "ENTP": 0.8,
      "INFJ": 0.85, "ENFJ": 0.8, "INFP": 0.85, "ENFP": 0.75,
      "ISTJ": 0.8, "ESTJ": 0.75, "ISTP": 0.8, "ESTP": 0.65,
      "ISFJ": 0.7, "ESFJ": 0.65, "ISFP": 0.75, "ESFP": 0.6
    },
    zodiacCompatibility: {
      "Aquarius": 0.9, "Pisces": 0.8, "Aries": 0.7, "Taurus": 0.9,
      "Gemini": 0.7, "Cancer": 0.8, "Leo": 0.6, "Virgo": 0.9, 
      "Libra": 0.7, "Scorpio": 0.8, "Sagittarius": 0.7, "Capricorn": 0.85
    }
  },
  {
    name: "Software Developer",
    keyTraits: ["Analytical", "Problem-solver", "Creative", "Detail-oriented"],
    mbtiCompatibility: {
      "INTJ": 0.95, "ENTJ": 0.85, "INTP": 0.95, "ENTP": 0.9,
      "INFJ": 0.75, "ENFJ": 0.7, "INFP": 0.8, "ENFP": 0.75,
      "ISTJ": 0.9, "ESTJ": 0.8, "ISTP": 0.9, "ESTP": 0.7,
      "ISFJ": 0.65, "ESFJ": 0.55, "ISFP": 0.7, "ESFP": 0.6
    },
    zodiacCompatibility: {
      "Aquarius": 0.9, "Pisces": 0.7, "Aries": 0.8, "Taurus": 0.7,
      "Gemini": 0.85, "Cancer": 0.6, "Leo": 0.65, "Virgo": 0.9, 
      "Libra": 0.7, "Scorpio": 0.8, "Sagittarius": 0.75, "Capricorn": 0.85
    }
  }
];

// Map career names to trait data for easy lookup
export const careerTraitsMap = careerTraitsData.reduce((map, career) => {
  map[career.name] = career;
  return map;
}, {} as Record<string, CareerTraits>);
