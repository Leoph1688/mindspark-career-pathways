
import React from "react";
import { usePersonality } from "@/context";
import { Progress } from "@/components/ui/progress";
import QuizCard from "@/components/QuizCard";
import { PremiumBanner } from "@/components/careers/PremiumBanner";
import { QuizQuestion } from "@/data/quizQuestions";

interface QuizSectionProps {
  question: QuizQuestion;
  onNext: () => void;
  progress: number;
  current: number;
  total: number;
}

const QuizSection: React.FC<QuizSectionProps> = ({
  question,
  onNext,
  progress,
  current,
  total,
}) => {
  const { isPremiumUser } = usePersonality();
  const showPremiumPrompt = !isPremiumUser && current >= 20;

  if (showPremiumPrompt) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Your Progress</span>
            <span className="text-sm text-muted-foreground">20/{total}</span>
          </div>
          <Progress value={(20/total) * 100} className="h-2" />
        </div>
        <PremiumBanner onUpgrade={onNext} />
      </div>
    );
  }

  return (
    <div className="swipe-container">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium">Your Progress</span>
          <span className="text-sm text-muted-foreground">{current + 1}/{total}</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>
      <QuizCard 
        question={question} 
        onNext={onNext} 
        questionNumber={current + 1}
      />
    </div>
  );
};

export default QuizSection;
