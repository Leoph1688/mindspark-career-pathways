
import React from "react";
import { usePersonality } from "@/context/PersonalityContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { personalityTypes } from "@/data/personalityTypes";
import { toast } from "sonner";

interface ShareResultsProps {
  onRestartQuiz: () => void;
}

const ShareResults: React.FC<ShareResultsProps> = ({ onRestartQuiz }) => {
  const { mbtiType, traits, zodiacSign, email } = usePersonality();
  
  const personalityData = mbtiType ? personalityTypes[mbtiType] : null;
  
  if (!personalityData) {
    return <div>Loading your results...</div>;
  }
  
  const handleShare = (platform: 'email' | 'copy' | 'download') => {
    switch (platform) {
      case 'email':
        toast.success("Results sent to your email!", {
          description: `Check ${email} for your complete personality profile and career recommendations.`
        });
        break;
      case 'copy':
        // In a real app, this would create a shareable link
        navigator.clipboard.writeText(
          `My MindSpark results: I'm a ${mbtiType} (${personalityData.name}) with ${zodiacSign} energy! Check out your own career matches at mindspark.example.com`
        );
        toast.success("Copied to clipboard!", {
          description: "Share your results with friends!"
        });
        break;
      case 'download':
        toast.success("Report downloaded!", {
          description: "Your complete profile has been saved as a PDF."
        });
        break;
    }
  };
  
  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">Your MindSpark Journey</h1>
        <p className="text-muted-foreground">
          Save and share your personality profile and career recommendations
        </p>
      </div>
      
      <Card className="p-6 mb-6 bg-secondary/50">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">Your Personality Profile</h2>
          <div className="flex justify-center items-center gap-2">
            <span className="text-4xl font-bold text-primary">{mbtiType}</span>
            <span className="text-xl">—</span>
            <span className="text-xl">{personalityData.name}</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-medium mb-3">Top Career Matches</h3>
            <ul className="space-y-2">
              {personalityData.careerThemes.map((career, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="bg-primary/20 text-primary rounded-full w-6 h-6 flex items-center justify-center text-sm">
                    {index + 1}
                  </span>
                  <span>{career}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-3">Key Attributes</h3>
            <div className="space-y-3">
              {traits.slice(0, 4).map((trait, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{trait.name}</span>
                    <span>{trait.value}%</span>
                  </div>
                  <div className="trait-bar">
                    <div 
                      className="trait-bar-fill" 
                      style={{ width: `${trait.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <Card className="p-6 text-center">
          <h3 className="font-medium mb-4">Email Your Results</h3>
          <Button 
            variant="outline" 
            onClick={() => handleShare('email')}
            className="w-full"
          >
            Send to {email.split('@')[0]}...
          </Button>
        </Card>
        
        <Card className="p-6 text-center">
          <h3 className="font-medium mb-4">Share Your Results</h3>
          <Button 
            variant="outline"
            onClick={() => handleShare('copy')}
            className="w-full"
          >
            Copy Share Link
          </Button>
        </Card>
        
        <Card className="p-6 text-center">
          <h3 className="font-medium mb-4">Download Full Report</h3>
          <Button 
            variant="outline"
            onClick={() => handleShare('download')}
            className="w-full"
          >
            Save as PDF
          </Button>
        </Card>
      </div>
      
      <div className="text-center">
        <p className="text-muted-foreground mb-4">
          Not satisfied with your results or want to try again?
        </p>
        <Button 
          variant="ghost"
          onClick={onRestartQuiz}
        >
          Retake the Quiz
        </Button>
      </div>
    </div>
  );
};

export default ShareResults;
