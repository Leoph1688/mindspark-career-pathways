import React, { useState } from "react";
import { usePersonality } from "@/context";
import { quizQuestions } from "@/data/quizQuestions";
import IntroSection from "./index-sections/IntroSection";
import QuizSection from "./index-sections/QuizSection";
import PremiumCTASection from "./index-sections/PremiumCTASection";
import UserInfoSection from "./index-sections/UserInfoSection";
import ResultsSection from "./index-sections/ResultsSection";
import CareersSection from "./index-sections/CareersSection";
import CareerDetailSection from "./index-sections/CareerDetailSection";
import ShareSection from "./index-sections/ShareSection";
import { Button } from "@/components/ui/button";

enum FlowStep {
  INTRO = 'intro',
  QUIZ = 'quiz',
  PREMIUM_CTA = 'premium_cta',
  USER_INFO = 'user_info',
  RESULTS = 'results',
  CAREERS = 'careers',
  CAREER_DETAIL = 'career_detail',
  SHARE = 'share',
}

const Index = () => {
  const [step, setStep] = useState<FlowStep>(FlowStep.INTRO);
  const [selectedCareerId, setSelectedCareerId] = useState<number | null>(null);
  
  const { 
    currentQuestionIndex, 
    setCurrentQuestionIndex, 
    setResponses, 
    calculateMBTI, 
    calculateSuggestedCareers,
    quizCompleted, 
    setQuizCompleted,
    setMbtiType,
    setTraits,
    setZodiacSign,
    setBirthdate,
    setEmail,
    setSuggestedCareers,
    isPremiumUser,
    totalQuestions
  } = usePersonality();

  const progressPercentage = Math.floor((currentQuestionIndex / totalQuestions) * 100);

  const startQuiz = () => {
    setStep(FlowStep.QUIZ);
  };

  const handleNextQuestion = () => {
    if (!isPremiumUser && currentQuestionIndex === 14) {
      setStep(FlowStep.PREMIUM_CTA);
      return;
    }
    
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setStep(FlowStep.USER_INFO);
    }
  };

  const handlePremiumChoice = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setStep(FlowStep.QUIZ);
  };

  const handleUserInfoComplete = () => {
    calculateMBTI();
    calculateSuggestedCareers();
    setQuizCompleted(true);
    setStep(FlowStep.RESULTS);
  };

  const handleViewCareerDetails = (careerId: number) => {
    setSelectedCareerId(careerId);
    setStep(FlowStep.CAREER_DETAIL);
  };

  const handleBackToCareerList = () => {
    setStep(FlowStep.CAREERS);
  };

  const handleRestartQuiz = () => {
    setQuizCompleted(false);
    setCurrentQuestionIndex(0);
    setResponses({});
    setMbtiType(null);
    setTraits([]);
    setZodiacSign('');
    setBirthdate('');
    setEmail('');
    setSuggestedCareers([]);
    
    setStep(FlowStep.INTRO);
  };

  return (
    <Layout showProgress={step === FlowStep.QUIZ}>
      {step === FlowStep.INTRO && (
        <IntroSection onStart={startQuiz} />
      )}

      {step === FlowStep.QUIZ && (
        <QuizSection
          question={quizQuestions[currentQuestionIndex % quizQuestions.length]}
          onNext={handleNextQuestion}
          progress={progressPercentage}
          current={currentQuestionIndex}
          total={totalQuestions}
        />
      )}

      {step === FlowStep.PREMIUM_CTA && (
        <PremiumCTASection onContinue={handlePremiumChoice} />
      )}

      {step === FlowStep.USER_INFO && (
        <UserInfoSection onComplete={handleUserInfoComplete} />
      )}

      {step === FlowStep.RESULTS && (
        <ResultsSection onContinue={() => setStep(FlowStep.CAREERS)} />
      )}

      {step === FlowStep.CAREERS && (
        <CareersSection onViewCareerDetails={handleViewCareerDetails} />
      )}

      {step === FlowStep.CAREER_DETAIL && selectedCareerId && (
        <CareerDetailSection
          careerId={selectedCareerId}
          onBack={handleBackToCareerList}
        />
      )}

      {step === FlowStep.SHARE && (
        <ShareSection onRestartQuiz={handleRestartQuiz} />
      )}

      {(step === FlowStep.CAREERS || step === FlowStep.CAREER_DETAIL) && (
        <div className="max-w-4xl mx-auto mt-10 text-center">
          <Button onClick={() => setStep(FlowStep.SHARE)}>
            Finish & Share Results
          </Button>
        </div>
      )}
    </Layout>
  );
};

export default Index;
