import React, { useState } from "react";
import Layout from "@/components/Layout";
import QuizCard from "@/components/QuizCard";
import UserInfoForm from "@/components/UserInfoForm";
import PersonalityResult from "@/components/PersonalityResult";
import CareerList from "@/components/CareerList";
import CareerDetail from "@/components/CareerDetail";
import ShareResults from "@/components/ShareResults";
import PremiumUpgrade from "@/components/PremiumUpgrade";
import { usePersonality } from "@/context";
import { quizQuestions } from "@/data/quizQuestions";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Progress } from "@/components/ui/progress";

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
    
    if (currentQuestionIndex < quizQuestions.length - 1) {
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

  const renderProgressBar = () => {
    return (
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium">Your Progress</span>
          <span className="text-sm text-muted-foreground">{currentQuestionIndex + 1}/{totalQuestions}</span>
        </div>
        <Progress value={progressPercentage} className="h-2" />
      </div>
    );
  };

  return (
    <Layout showProgress={step === FlowStep.QUIZ}>
      {step === FlowStep.INTRO && (
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Discover Your Career Path
          </h1>
          <p className="text-xl mb-8">
            Take our personality assessment to find the perfect careers that match your unique traits and interests
          </p>
          
          <div className="bg-white rounded-xl p-6 shadow-lg mb-10">
            <h2 className="text-2xl font-bold mb-4">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-medium mb-1">Take the Quiz</h3>
                <p className="text-sm text-muted-foreground">
                  Answer personality questions about how you think and work
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-medium mb-1">Get Your Profile</h3>
                <p className="text-sm text-muted-foreground">
                  Discover your personality type and unique strengths
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-medium mb-1">Explore Careers</h3>
                <p className="text-sm text-muted-foreground">
                  See personalized career recommendations that match your profile
                </p>
              </div>
            </div>
          </div>
          
          <Button onClick={startQuiz} size="lg">
            Start Your Journey <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Takes about 10-15 minutes to complete
          </p>
        </div>
      )}
      
      {step === FlowStep.QUIZ && (
        <div className="swipe-container">
          {renderProgressBar()}
          <QuizCard
            question={quizQuestions[currentQuestionIndex]}
            onNext={handleNextQuestion}
          />
        </div>
      )}
      
      {step === FlowStep.PREMIUM_CTA && (
        <PremiumUpgrade onContinue={handlePremiumChoice} />
      )}
      
      {step === FlowStep.USER_INFO && (
        <div className="swipe-container">
          <UserInfoForm onComplete={handleUserInfoComplete} />
        </div>
      )}
      
      {step === FlowStep.RESULTS && (
        <PersonalityResult
          onContinue={() => setStep(FlowStep.CAREERS)}
        />
      )}
      
      {step === FlowStep.CAREERS && (
        <CareerList
          onViewCareerDetails={handleViewCareerDetails}
        />
      )}
      
      {step === FlowStep.CAREER_DETAIL && selectedCareerId && (
        <CareerDetail
          careerId={selectedCareerId}
          onBack={handleBackToCareerList}
        />
      )}
      
      {step === FlowStep.SHARE && (
        <ShareResults
          onRestartQuiz={handleRestartQuiz}
        />
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
