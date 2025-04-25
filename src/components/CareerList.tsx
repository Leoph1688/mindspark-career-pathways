
import React from "react";
import { usePersonality } from "@/context";
import { PremiumBanner } from "./careers/PremiumBanner";
import { CareerScoreMetrics } from "./careers/CareerScoreMetrics";
import { CareerCard } from "./careers/CareerCard";

interface CareerListProps {
  onViewCareerDetails: (careerId: number) => void;
}

const CareerList: React.FC<CareerListProps> = ({ onViewCareerDetails }) => {
  const { mbtiType, suggestedCareers, zodiacSign, isPremiumUser, setIsPremiumUser } = usePersonality();
  
  if (suggestedCareers.length === 0) {
    return <div>Loading career suggestions...</div>;
  }

  const displayCareers = isPremiumUser
    ? suggestedCareers
    : [
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
        })).slice(0, 5 - suggestedCareers.length),
      ];

  const handleUpgrade = () => {
    setIsPremiumUser(true);
  };

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">Your Career Recommendations</h1>
        <p className="text-muted-foreground">
          Based on your {mbtiType || 'personality'} {zodiacSign ? `and ${zodiacSign} sign` : ''}
        </p>
      </div>

      {!isPremiumUser && <PremiumBanner onUpgrade={handleUpgrade} />}
      
      <CareerScoreMetrics />

      <div className="space-y-6">
        {displayCareers.map((career, index) => (
          <CareerCard
            key={career.id}
            career={career}
            index={index}
            isLocked={career.id < 0}
            onUpgrade={handleUpgrade}
            onViewDetails={onViewCareerDetails}
          />
        ))}
      </div>
    </div>
  );
};

export default CareerList;
