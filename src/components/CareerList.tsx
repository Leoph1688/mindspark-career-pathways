
import React from "react";
import { usePersonality } from "@/context/PersonalityContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface CareerListProps {
  onViewCareerDetails: (careerId: number) => void;
}

const CareerList: React.FC<CareerListProps> = ({ onViewCareerDetails }) => {
  const { mbtiType, suggestedCareers, zodiacSign } = usePersonality();
  
  if (suggestedCareers.length === 0) {
    return <div>Loading career suggestions...</div>;
  }
  
  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">Your Career Recommendations</h1>
        <p className="text-muted-foreground">
          Based on your {mbtiType} personality type and {zodiacSign} sign
        </p>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">How We Calculate Your Fit</h2>
        <div className="grid grid-cols-3 gap-4 mb-2">
          <div className="text-center">
            <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2">
              50%
            </div>
            <p className="text-sm font-medium">Personality Fit</p>
            <p className="text-xs text-muted-foreground">MBTI & Horoscope</p>
          </div>
          <div className="text-center">
            <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2">
              30%
            </div>
            <p className="text-sm font-medium">Salary Potential</p>
            <p className="text-xs text-muted-foreground">Income & Benefits</p>
          </div>
          <div className="text-center">
            <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2">
              20%
            </div>
            <p className="text-sm font-medium">Growth Outlook</p>
            <p className="text-xs text-muted-foreground">Future Opportunities</p>
          </div>
        </div>
      </div>
      
      <div className="space-y-6">
        {suggestedCareers.map((career, index) => (
          <Card key={career.id} className="career-card overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="p-4 md:p-6 flex-1">
                <div className="flex items-center mb-2">
                  <span className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-bold">{career.title}</h3>
                </div>
                
                <p className="text-muted-foreground mb-4">{career.description}</p>
                
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Personality Fit</p>
                    <div className="flex items-center">
                      <div className="trait-bar w-16 mr-2">
                        <div 
                          className="trait-bar-fill" 
                          style={{ width: `${career.personalityFit}%`, backgroundColor: getColorForRating(career.personalityFit) }}
                        ></div>
                      </div>
                      <span className={`text-sm font-medium`}>{career.personalityFit}%</span>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Salary Rating</p>
                    <div className="flex items-center">
                      <div className="trait-bar w-16 mr-2">
                        <div 
                          className="trait-bar-fill" 
                          style={{ width: `${career.salarySatisfaction}%`, backgroundColor: getColorForRating(career.salarySatisfaction) }}
                        ></div>
                      </div>
                      <span className={`text-sm font-medium`}>{career.salarySatisfaction}%</span>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Growth</p>
                    <div className="flex items-center">
                      <div className="trait-bar w-16 mr-2">
                        <div 
                          className="trait-bar-fill" 
                          style={{ width: `${career.growthPotential}%`, backgroundColor: getColorForRating(career.growthPotential) }}
                        ></div>
                      </div>
                      <span className={`text-sm font-medium`}>{career.growthPotential}%</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Overall Match</p>
                    <span className={`text-lg font-bold text-primary`}>{career.overallScore}%</span>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    onClick={() => onViewCareerDetails(career.id)}
                  >
                    View Details <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="md:w-24 p-4 bg-muted flex items-center justify-center md:flex-col md:border-l border-border">
                <div className="flex flex-row md:flex-col items-center md:text-center">
                  <p className="text-xs font-medium mb-0 md:mb-1 mr-2 md:mr-0">AI Risk</p>
                  <div className={`
                    rating-pill 
                    ${career.aiRisk === 'Low' ? 'bg-green-100 text-green-800' : 
                      career.aiRisk === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-red-100 text-red-800'}
                  `}>
                    {career.aiRisk}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

// Helper function for rating colors
const getColorForRating = (rating: number): string => {
  if (rating >= 80) return 'rgb(34, 197, 94)'; // green
  if (rating >= 60) return 'rgb(234, 179, 8)';  // yellow
  return 'rgb(239, 68, 68)';  // red
};

export default CareerList;
