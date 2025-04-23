
import React, { useState } from "react";
import { usePersonality } from "@/context/PersonalityContext";
import { QuizQuestion } from "@/data/quizQuestions";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { ArrowRight } from "lucide-react";

interface QuizCardProps {
  question: QuizQuestion;
  onNext: () => void;
}

const QuizCard: React.FC<QuizCardProps> = ({ question, onNext }) => {
  const { responses, setResponses } = usePersonality();
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

  return (
    <div className="quiz-card animate-fade-in">
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
            <span className="font-medium block mb-1">Strongly Agree</span>
            <p className="text-muted-foreground">{question.leftOption}</p>
          </div>
          <div className="max-w-[45%] text-right">
            <span className="font-medium block mb-1">Strongly Agree</span>
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
