
import React from "react";
import { Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface PremiumBannerProps {
  onUpgrade: () => void;
}

export const PremiumBanner: React.FC<PremiumBannerProps> = ({ onUpgrade }) => {
  return (
    <Card className="p-6 mb-8 border-primary/50 bg-primary/5">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-2">Unlock All Career Matches</h2>
          <p className="mb-4">
            You're currently viewing the free version with limited recommendations. 
            Upgrade to see all 5 personalized career matches with detailed insights.
          </p>
          <Button onClick={onUpgrade}>Upgrade to Premium</Button>
        </div>
        <div className="flex-shrink-0 bg-primary/10 rounded-full p-6">
          <Lock className="w-12 h-12 text-primary" />
        </div>
      </div>
    </Card>
  );
};
