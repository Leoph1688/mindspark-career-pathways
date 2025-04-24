
import React from "react";
import { usePersonality } from "@/context";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Check } from "lucide-react";

interface PremiumUpgradeProps {
  onContinue: () => void;
}

const PremiumUpgrade: React.FC<PremiumUpgradeProps> = ({ onContinue }) => {
  const { setIsPremiumUser } = usePersonality();
  
  const handleUpgrade = () => {
    setIsPremiumUser(true);
    onContinue();
  };

  return (
    <ScrollArea className="h-[80vh] w-full max-w-md mx-auto">
      <div className="p-4">
        <Card className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 mb-6">
          <div className="flex justify-center mb-4">
            <div className="bg-purple-500 p-4 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-center mb-4">
            Unlock Full Personality Profile
          </h1>
          
          <p className="text-sm text-center text-gray-700 mb-6">
            Complete the free quiz (15 questions) and upgrade to access all 70 questions 
            and get your comprehensive personality insights.
          </p>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Free Version</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Check className="h-4 w-4 mr-2 text-gray-600" />
                <span>Basic MBTI type</span>
              </li>
              <li className="flex items-center">
                <Check className="h-4 w-4 mr-2 text-gray-600" />
                <span>Limited trait analysis</span>
              </li>
              <li className="flex items-center">
                <Check className="h-4 w-4 mr-2 text-gray-600" />
                <span>1 career recommendation</span>
              </li>
            </ul>
            
            <Button 
              variant="outline" 
              className="w-full mt-6"
              onClick={onContinue}
            >
              Continue with Free
            </Button>
          </Card>
          
          <Card className="p-6 border-purple-400 relative">
            <div className="absolute -top-3 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium">
              Recommended
            </div>
            
            <h2 className="text-xl font-bold mb-4">Premium Version</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Check className="h-4 w-4 mr-2 text-purple-600" />
                <span>Full MBTI analysis</span>
              </li>
              <li className="flex items-center">
                <Check className="h-4 w-4 mr-2 text-purple-600" />
                <span>Complete trait breakdown</span>
              </li>
              <li className="flex items-center">
                <Check className="h-4 w-4 mr-2 text-purple-600" />
                <span>5 career recommendations</span>
              </li>
              <li className="flex items-center">
                <Check className="h-4 w-4 mr-2 text-purple-600" />
                <span>Personalized strengths</span>
              </li>
              <li className="flex items-center">
                <Check className="h-4 w-4 mr-2 text-purple-600" />
                <span>Learning style assessment</span>
              </li>
            </ul>
            
            <Button 
              className="w-full mt-6 bg-purple-500 hover:bg-purple-600"
              onClick={handleUpgrade}
            >
              Upgrade Now - $5.99
            </Button>
          </Card>
        </div>
        
        <p className="text-center text-xs text-gray-500">
          © 2025 MindSpark Career Pathways. All rights reserved.
        </p>
      </div>
    </ScrollArea>
  );
};

export default PremiumUpgrade;
