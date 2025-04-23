
import React from "react";
import { Progress } from "@/components/ui/progress";
import QuizCard from "@/components/QuizCard";
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
}) => (
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

export default QuizSection;
