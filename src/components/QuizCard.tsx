
import React, { useState } from "react";
import { usePersonality } from "@/context";
import { QuizQuestion } from "@/data/quizQuestions";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
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
  const [sliderValue, setSliderValue] = useState<number>(
    responses[question.id] || 4
  );
  const [hasInteracted, setHasInteracted] = useState<boolean>(
    responses[question.id] !== undefined
  );

  const handleSliderChange = (newValue: number[]) => {
    setSliderValue(newValue[0]);
    setHasInteracted(true);
  };

  const handleNextClick = () => {
    setResponses((prev) => ({
      ...prev,
      [question.id]: sliderValue,
    }));
    onNext();
  };

  // Render premium upgrade CTA instead of question
  if (isPremiumCTA) {
    return (
      <div className="quiz-card animate-fade-in text-center">
        <div className="py-8 px-4">
          <div className="mb-6 bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-xl">
            <Lock className="w-12 h-12 mx-auto text-primary mb-4" />
            <h2 className="text-2xl font-bold mb-2">Unlock Your Full Personality Profile</h2>
            <p className="text-muted-foreground mb-4">
              You've completed the free version of the quiz (15 questions).
              Upgrade to premium to access all 70 questions and get your complete personality profile.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="border rounded-lg p-4">
              <h3 className="font-bold">Free Version</h3>
              <ul className="mt-2 text-sm text-left space-y-2">
                <li>✓ Basic MBTI type</li>
                <li>✓ Limited trait analysis</li>
                <li>✓ 1 career recommendation</li>
                <li>× No detailed insights</li>
              </ul>
            </div>
            
            <div className="border border-primary bg-primary/5 rounded-lg p-4 relative">
              <div className="absolute -top-3 right-4 bg-primary text-white text-xs px-2 py-1 rounded-full">
                Recommended
              </div>
              <h3 className="font-bold">Premium Version</h3>
              <ul className="mt-2 text-sm text-left space-y-2">
                <li>✓ Full MBTI analysis</li>
                <li>✓ Complete trait breakdown</li>
                <li>✓ 5 personalized career matches</li>
                <li>✓ Growth & AI risk assessment</li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-4">
            <Button className="w-full bg-primary" onClick={handleNextClick}>
              Upgrade Now
            </Button>
            <Button variant="outline" className="w-full" onClick={handleNextClick}>
              Continue with Free Version
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-card animate-fade-in">
      {questionNumber && (
        <div className="text-sm text-muted-foreground mb-2">
          Question {questionNumber} of 70
        </div>
      )}
      <h2 className="text-xl font-semibold mb-6 text-center">{question.text}</h2>
      
      <div className="my-10">
        <Slider
          defaultValue={[sliderValue]}
          max={7}
          min={1}
          step={1}
          onValueChange={handleSliderChange}
          className="my-8"
        />
        
        <div className="flex justify-between text-sm">
          <div className="max-w-[45%] text-left">
            <p className="text-muted-foreground">{question.leftOption}</p>
          </div>
          <div className="max-w-[45%] text-right">
            <p className="text-muted-foreground">{question.rightOption}</p>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mt-8">
        <Button
          onClick={handleNextClick}
          className="w-full sm:w-auto px-8"
          disabled={!hasInteracted}
          size="lg"
        >
          Continue <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default QuizCard;

