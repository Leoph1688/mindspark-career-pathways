import React, { useState } from "react";
import { usePersonality } from "@/context";
import { QuizQuestion } from "@/data/quizQuestions";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

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

  // Regular question card
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 max-w-md mx-auto">
      {questionNumber && (
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
            Question {questionNumber} of 70
          </span>
          <span className="text-lg font-semibold text-purple-600">{questionNumber}/70</span>
        </div>
      )}
      
      <h2 className="text-xl font-bold text-center mb-6">{question.text}</h2>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div 
          className={cn(
            "border rounded-xl p-4 text-center cursor-pointer transition-all",
            selectedValue === 1 ? "bg-purple-100 border-purple-300" : "bg-gray-100 border-gray-200",
            "hover:bg-purple-50"
          )}
          onClick={() => handleOptionSelect(1)}
        >
          <div className="font-bold text-2xl mb-2 text-purple-600">A</div>
          <div className="text-sm">{question.leftOption}</div>
        </div>
        
        <div 
          className={cn(
            "border rounded-xl p-4 text-center cursor-pointer transition-all",
            selectedValue === 7 ? "bg-purple-100 border-purple-300" : "bg-gray-100 border-gray-200",
            "hover:bg-purple-50"
          )}
          onClick={() => handleOptionSelect(7)}
        >
          <div className="font-bold text-2xl mb-2 text-purple-600">B</div>
          <div className="text-sm">{question.rightOption}</div>
        </div>
      </div>
      
      <div className="flex justify-center">
        <Button
          onClick={onNext}
          className="w-full bg-purple-500 hover:bg-purple-600 text-white rounded-full"
          disabled={selectedValue === null}
          size="lg"
        >
          Continue <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default QuizCard;
