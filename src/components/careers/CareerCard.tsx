
import React from "react";
import { ArrowRight, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Career } from "@/types/personality";

interface CareerCardProps {
  career: Career;
  index: number;
  isLocked: boolean;
  onUpgrade: () => void;
  onViewDetails: (careerId: number) => void;
}

const formatPercentage = (value: number | null | undefined): string => {
  if (value === null || value === undefined || isNaN(value)) {
    return "0%";
  }
  return `${value}%`;
};

const getColorForRating = (rating: number): string => {
  if (rating >= 80) return 'rgb(34, 197, 94)'; // green
  if (rating >= 60) return 'rgb(234, 179, 8)';  // yellow
  return 'rgb(239, 68, 68)';  // red
};

export const CareerCard: React.FC<CareerCardProps> = ({
  career,
  index,
  isLocked,
  onUpgrade,
  onViewDetails,
}) => {
  if (isLocked) {
    return (
      <Card className="career-card overflow-hidden bg-muted/30 border-dashed">
        <div className="flex items-center justify-center p-10">
          <div className="flex flex-col items-center text-center">
            <Lock className="w-10 h-10 text-muted mb-4" />
            <h3 className="text-xl font-bold mb-2">Premium Career Match</h3>
            <p className="text-muted-foreground mb-4">
              Unlock all 5 personalized career recommendations
            </p>
            <Button variant="outline" onClick={onUpgrade}>
              Upgrade to Premium
            </Button>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="career-card overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="p-4 md:p-6 flex-1">
          <div className="flex items-center mb-2">
            <span className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
              {index + 1}
            </span>
            <h3 className="text-xl font-bold">{career.title}</h3>
          </div>

          <p className="text-muted-foreground mb-4">{career.description}</p>

          <div className="grid grid-cols-3 gap-2 mb-4">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Personality Fit</p>
              <div className="flex items-center">
                <div className="trait-bar w-16 mr-2">
                  <div
                    className="trait-bar-fill"
                    style={{
                      width: `${career.personalityFit || 0}%`,
                      backgroundColor: getColorForRating(career.personalityFit || 0),
                    }}
                  ></div>
                </div>
                <span className="text-sm font-medium">
                  {formatPercentage(career.personalityFit)}
                </span>
              </div>
            </div>

            <div>
              <p className="text-xs text-muted-foreground mb-1">Salary Rating</p>
              <div className="flex items-center">
                <div className="trait-bar w-16 mr-2">
                  <div
                    className="trait-bar-fill"
                    style={{
                      width: `${career.salarySatisfaction || 0}%`,
                      backgroundColor: getColorForRating(career.salarySatisfaction || 0),
                    }}
                  ></div>
                </div>
                <span className="text-sm font-medium">
                  {formatPercentage(career.salarySatisfaction)}
                </span>
              </div>
            </div>

            <div>
              <p className="text-xs text-muted-foreground mb-1">Growth</p>
              <div className="flex items-center">
                <div className="trait-bar w-16 mr-2">
                  <div
                    className="trait-bar-fill"
                    style={{
                      width: `${career.growthPotential || 0}%`,
                      backgroundColor: getColorForRating(career.growthPotential || 0),
                    }}
                  ></div>
                </div>
                <span className="text-sm font-medium">
                  {formatPercentage(career.growthPotential)}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Overall Match</p>
              <span className="text-lg font-bold text-primary">
                {formatPercentage(career.overallScore)}
              </span>
            </div>

            <Button
              variant="outline"
              onClick={() => onViewDetails(career.id)}
            >
              View Details <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="md:w-24 p-4 bg-muted flex items-center justify-center md:flex-col md:border-l border-border">
          <div className="flex flex-row md:flex-col items-center md:text-center">
            <p className="text-xs font-medium mb-0 md:mb-1 mr-2 md:mr-0">AI Risk</p>
            <div
              className={`
                rating-pill 
                ${
                  career.aiRisk === 'Low'
                    ? 'bg-green-100 text-green-800'
                    : career.aiRisk === 'Medium'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-red-100 text-red-800'
                }
              `}
            >
              {career.aiRisk}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
