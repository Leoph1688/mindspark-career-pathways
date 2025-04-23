
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface IntroSectionProps {
  onStart: () => void;
}

const IntroSection: React.FC<IntroSectionProps> = ({ onStart }) => (
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
    <Button onClick={onStart} size="lg">
      Start Your Journey <ArrowRight className="ml-2 h-4 w-4" />
    </Button>
    <p className="text-sm text-muted-foreground mt-4">
      Takes about 10-15 minutes to complete
    </p>
  </div>
);

export default IntroSection;
