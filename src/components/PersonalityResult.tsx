
import React from "react";
import { usePersonality } from "@/context";
import { personalityTypes } from "@/data/personalityTypes";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowRight, Lock } from "lucide-react";

interface PersonalityResultProps {
  onContinue: () => void;
}

const PersonalityResult: React.FC<PersonalityResultProps> = ({ onContinue }) => {
  const { mbtiType, traits, name, isPremiumUser, setIsPremiumUser } = usePersonality();
  
  const personalityData = mbtiType ? personalityTypes[mbtiType] : null;
  
  if (!personalityData) {
    return <div>Loading your results...</div>;
  }
  
  const handleUpgrade = () => {
    setIsPremiumUser(true);
  };
  
  const displayTraits = isPremiumUser ? traits : traits.slice(0, 4);
  
  // Helper function to format percentage values safely
  const formatPercentage = (value: number | null | undefined): string => {
    if (value === null || value === undefined || isNaN(value)) {
      return "0%";
    }
    return `${value}%`;
  };
  
  return (
    <ScrollArea className="h-[80vh] mx-auto">
      <div className="max-w-4xl mx-auto p-4 animate-fade-in">
        <h1 className="text-3xl font-bold text-center mb-2">
          Hello, {name}!
        </h1>
        <p className="text-center text-muted-foreground mb-8">
          This is your personalized career path report based on your personality profile
        </p>
        
        {!isPremiumUser && (
          <Card className="p-6 mb-6 border-primary/50 bg-primary/5">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-2">You're viewing the free version</h2>
                <p className="mb-4">Upgrade to premium to see your full personality profile, all 8 trait breakdowns, and personalized career matches.</p>
                <Button onClick={handleUpgrade}>
                  Upgrade to Premium
                </Button>
              </div>
              <div className="flex-shrink-0 bg-primary/10 rounded-full p-6">
                <Lock className="w-12 h-12 text-primary" />
              </div>
            </div>
          </Card>
        )}
        
        <Card className="p-6 bg-secondary bg-opacity-50">
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary flex items-center justify-center">
              <span className="text-3xl md:text-4xl font-bold text-white">{mbtiType}</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">{personalityData.name}</h2>
              <p className="text-muted-foreground mb-4">{personalityData.description}</p>
              
              {isPremiumUser ? (
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
              ) : (
                <div className="bg-muted/20 border border-dashed rounded-lg p-4 flex items-center gap-4">
                  <Lock className="w-6 h-6 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">
                    Detailed strengths and growth areas available in the premium version
                  </p>
                </div>
              )}
            </div>
          </div>
        </Card>
        
        <Card className="p-6 mt-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">Your Personality Traits</h3>
            {!isPremiumUser && (
              <span className="text-sm text-muted-foreground">
                Showing 4 of 8 traits (Upgrade for full analysis)
              </span>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
            {displayTraits.map((trait, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">{trait.name}</span>
                  <span className="text-sm text-muted-foreground">{formatPercentage(trait.value)}</span>
                </div>
                <div className="trait-bar">
                  <div 
                    className="trait-bar-fill" 
                    style={{ width: `${trait.value || 0}%` }}
                  ></div>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{trait.description}</p>
              </div>
            ))}
            
            {!isPremiumUser && (
              <div className="md:col-span-2 mt-4">
                <Button 
                  variant="outline" 
                  className="w-full" 
                  onClick={handleUpgrade}
                >
                  <Lock className="mr-2 h-4 w-4" />
                  Unlock All Traits with Premium
                </Button>
              </div>
            )}
          </div>
        </Card>
        
        <Card className="p-6 mt-6">
          <h3 className="text-xl font-bold mb-2">Your Learning Style</h3>
          {isPremiumUser ? (
            <p>{personalityData.learningStyle}</p>
          ) : (
            <div className="bg-muted/20 border border-dashed rounded-lg p-4 flex items-center gap-4">
              <Lock className="w-6 h-6 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">
                Detailed learning style analysis available in the premium version
              </p>
            </div>
          )}
        </Card>
        
        <div className="mt-8 text-center pb-4">
          <Button onClick={onContinue} size="lg">
            View Career Recommendations <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </ScrollArea>
  );
};

export default PersonalityResult;
