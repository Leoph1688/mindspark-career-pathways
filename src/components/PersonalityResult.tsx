
import React from "react";
import { usePersonality } from "@/context/PersonalityContext";
import { personalityTypes } from "@/data/personalityTypes";
import { getZodiacEmoji, getZodiacDescription } from "@/utils/zodiacUtils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface PersonalityResultProps {
  onContinue: () => void;
}

const PersonalityResult: React.FC<PersonalityResultProps> = ({ onContinue }) => {
  const { mbtiType, traits, zodiacSign } = usePersonality();
  
  const personalityData = mbtiType ? personalityTypes[mbtiType] : null;
  
  const zodiacEmoji = getZodiacEmoji(zodiacSign);
  const zodiacDescription = getZodiacDescription(zodiacSign);
  
  if (!personalityData) {
    return <div>Loading your results...</div>;
  }
  
  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <h1 className="text-3xl font-bold text-center mb-2">Your Personality Profile</h1>
      <p className="text-center text-muted-foreground mb-8">
        Based on your responses, here's what we've discovered about you
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* MBTI Type Card */}
        <Card className="p-6 col-span-1 lg:col-span-2 bg-secondary bg-opacity-50">
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary flex items-center justify-center">
              <span className="text-3xl md:text-4xl font-bold text-white">{mbtiType}</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">{personalityData.name}</h2>
              <p className="text-muted-foreground mb-4">{personalityData.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium mb-2">Key Strengths</h3>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    {personalityData.strengths.map((strength, index) => (
                      <li key={index}>{strength}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Growth Areas</h3>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    {personalityData.challenges.map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>
        
        {/* Zodiac Card */}
        <Card className="p-6 bg-secondary bg-opacity-50">
          <div className="text-center mb-4">
            <span className="text-4xl">{zodiacEmoji}</span>
            <h3 className="text-xl font-bold mt-2">{zodiacSign}</h3>
          </div>
          <p className="text-sm text-muted-foreground">{zodiacDescription}</p>
        </Card>
      </div>
      
      {/* Trait Bars */}
      <Card className="p-6 mt-6">
        <h3 className="text-xl font-bold mb-4">Your Personality Traits</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
          {traits.map((trait, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">{trait.name}</span>
                <span className="text-sm text-muted-foreground">{trait.value}%</span>
              </div>
              <div className="trait-bar">
                <div 
                  className="trait-bar-fill" 
                  style={{ width: `${trait.value}%` }}
                ></div>
              </div>
              <p className="text-xs text-muted-foreground mt-1">{trait.description}</p>
            </div>
          ))}
        </div>
      </Card>
      
      {/* Learning Style */}
      <Card className="p-6 mt-6">
        <h3 className="text-xl font-bold mb-2">Your Learning Style</h3>
        <p>{personalityData.learningStyle}</p>
      </Card>
      
      <div className="mt-8 text-center">
        <Button onClick={onContinue} size="lg">
          View Career Recommendations <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default PersonalityResult;
