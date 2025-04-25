
import React from "react";
import { usePersonality } from "@/context";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Lock } from "lucide-react";

interface CareerListProps {
  onViewCareerDetails: (careerId: number) => void;
}

const CareerList: React.FC<CareerListProps> = ({ onViewCareerDetails }) => {
  const { mbtiType, suggestedCareers, zodiacSign, isPremiumUser, setIsPremiumUser } = usePersonality();
  
  if (suggestedCareers.length === 0) {
    return <div>Loading career suggestions...</div>;
  }

  // If free user, add locked placeholder careers
  const displayCareers = isPremiumUser ? suggestedCareers : [
    ...suggestedCareers,
    ...[1, 2, 3, 4].map(i => ({ 
      id: -i, 
      title: "Locked Career Option",
      description: "Upgrade to premium to unlock this career recommendation",
      personalityFit: 0,
      salarySatisfaction: 0,
      growthPotential: 0,
      overallScore: 0,
      dailyActivities: [],
      salaryRange: { min: 0, max: 0 },
      outlook: "",
      aiRisk: "Low" as const,
    })).slice(0, 5 - suggestedCareers.length)
  ];
  
  const handleUpgrade = () => {
    // In a real app, this would handle payment processing
    setIsPremiumUser(true);
  };

  // Helper function to format percentage values safely
  const formatPercentage = (value: number | null | undefined): string => {
    if (value === null || value === undefined || isNaN(value)) {
      return "0%";
    }
    return `${value}%`;
  };
  
  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">Your Career Recommendations</h1>
        <p className="text-muted-foreground">
          Based on your {mbtiType || 'personality'} {zodiacSign ? `and ${zodiacSign} sign` : ''}
        </p>
      </div>
      
      {!isPremiumUser && (
        <Card className="p-6 mb-8 border-primary/50 bg-primary/5">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h2 className="text-xl font-bold mb-2">Unlock All Career Matches</h2>
              <p className="mb-4">You're currently viewing the free version with limited recommendations. Upgrade to see all 5 personalized career matches with detailed insights.</p>
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
        {displayCareers.map((career, index) => {
          const isLocked = career.id < 0;
          
          if (isLocked) {
            // Render locked career placeholder
            return (
              <Card key={career.id} className="career-card overflow-hidden bg-muted/30 border-dashed">
                <div className="flex items-center justify-center p-10">
                  <div className="flex flex-col items-center text-center">
                    <Lock className="w-10 h-10 text-muted mb-4" />
                    <h3 className="text-xl font-bold mb-2">Premium Career Match</h3>
                    <p className="text-muted-foreground mb-4">Unlock all 5 personalized career recommendations</p>
                    <Button 
                      variant="outline" 
                      onClick={handleUpgrade}
                    >
                      Upgrade to Premium
                    </Button>
                  </div>
                </div>
              </Card>
            );
          }
          
          // Regular career card
          return (
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
                            style={{ 
                              width: `${career.personalityFit || 0}%`, 
                              backgroundColor: getColorForRating(career.personalityFit || 0) 
                            }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium">{formatPercentage(career.personalityFit)}</span>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Salary Rating</p>
                      <div className="flex items-center">
                        <div className="trait-bar w-16 mr-2">
                          <div 
                            className="trait-bar-fill" 
                            style={{ 
                              width: `${career.salarySatisfaction || 0}%`, 
                              backgroundColor: getColorForRating(career.salarySatisfaction || 0) 
                            }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium">{formatPercentage(career.salarySatisfaction)}</span>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Growth</p>
                      <div className="flex items-center">
                        <div className="trait-bar w-16 mr-2">
                          <div 
                            className="trait-bar-fill" 
                            style={{ 
                              width: `${career.growthPotential || 0}%`, 
                              backgroundColor: getColorForRating(career.growthPotential || 0) 
                            }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium">{formatPercentage(career.growthPotential)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Overall Match</p>
                      <span className="text-lg font-bold text-primary">{formatPercentage(career.overallScore)}</span>
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
          );
        })}
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
