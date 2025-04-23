
import React, { useState } from "react";
import { usePersonality } from "@/context";
import { QuizQuestion } from "@/data/quizQuestions";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lock } from "lucide-react";

interface QuizCardProps {
  question: QuizQuestion;
  onNext: () => void;
  isPremiumCTA?: boolean;
  questionNumber?: number;
}

const QuizCard: React.FC<QuizCardProps> = ({ 
  question, 
  onNext, 
  isPremiumCTA = false,
  questionNumber
}) => {
  const { responses, setResponses, isPremiumUser } = usePersonality();
  const [selectedValue, setSelectedValue] = useState<number | null>(
    responses[question.id] ?? null
  );

  const handleOptionSelect = (value: number) => {
    setSelectedValue(value);
    setResponses((prev) => ({
      ...prev,
      [question.id]: value,
    }));
  };

  // Premium CTA card
  if (isPremiumCTA) {
    return (
      <div className="quiz-card animate-fade-in text-center">
        <div className="py-8 px-4">
          <div className="mb-6 bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-xl">
            <Lock className="w-12 h-12 mx-auto text-primary mb-4" />
            <h2 className="text-2xl font-bold mb-2">Unlock Your Full Personality Profile</h2>
            <p className="text-muted-foreground mb-4">
              Complete access to your detailed personality insights including career matches 
              and growth opportunities.
            </p>
            <div className="text-lg font-semibold mb-2">$9.99</div>
            <p className="text-sm text-muted-foreground">One-time payment for lifetime access</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="border rounded-lg p-4">
              <h3 className="font-bold">Free Version</h3>
              <ul className="mt-2 text-sm text-left space-y-2">
                <li>✓ Basic personality type</li>
                <li>✓ Limited trait analysis</li>
                <li>✓ 1 career match</li>
                <li>× No detailed insights</li>
              </ul>
            </div>
            
            <div className="border border-primary bg-primary/5 rounded-lg p-4 relative">
              <div className="absolute -top-3 right-4 bg-primary text-white text-xs px-2 py-1 rounded-full">
                Premium
              </div>
              <h3 className="font-bold">Premium Version</h3>
              <ul className="mt-2 text-sm text-left space-y-2">
                <li>✓ Detailed personality analysis</li>
                <li>✓ Complete trait breakdown</li>
                <li>✓ 5 career matches</li>
                <li>✓ Growth insights</li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-4">
            <Button className="w-full bg-primary" onClick={onNext}>
              Upgrade Now - $9.99
            </Button>
            <Button variant="outline" className="w-full" onClick={onNext}>
              Continue with Free Version
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Regular question card
  return (
    <div className="quiz-card animate-fade-in p-6">
      {questionNumber && (
        <div className="text-sm text-muted-foreground mb-2">
          Question {questionNumber} of 70
        </div>
      )}
      
      <h2 className="text-xl font-semibold mb-8 text-center">{question.text}</h2>
      
      <div className="grid grid-cols-2 gap-4 mb-8">
        <Button
          variant={selectedValue === 1 ? "default" : "outline"}
          className={`h-auto py-6 px-4 flex flex-col items-center justify-center text-center ${
            selectedValue === 1 ? "bg-primary" : ""
          }`}
          onClick={() => handleOptionSelect(1)}
        >
          <span className="text-lg mb-2">A</span>
          <span>{question.leftOption}</span>
        </Button>
        
        <Button
          variant={selectedValue === 7 ? "default" : "outline"}
          className={`h-auto py-6 px-4 flex flex-col items-center justify-center text-center ${
            selectedValue === 7 ? "bg-primary" : ""
          }`}
          onClick={() => handleOptionSelect(7)}
        >
          <span className="text-lg mb-2">B</span>
          <span>{question.rightOption}</span>
        </Button>
      </div>
      
      <div className="flex justify-center">
        <Button
          onClick={onNext}
          className="w-full sm:w-auto px-8"
          disabled={selectedValue === null}
          size="lg"
        >
          Continue <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default QuizCard;
