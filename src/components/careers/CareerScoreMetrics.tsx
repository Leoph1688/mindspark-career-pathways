
import React from "react";

export const CareerScoreMetrics = () => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">How We Calculate Your Fit</h2>
      <div className="grid grid-cols-3 gap-4 mb-2">
        <div className="text-center">
          <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2">
            50%
          </div>
          <p className="text-sm font-medium">Personality Fit</p>
          <p className="text-xs text-muted-foreground">MBTI & Horoscope</p>
        </div>
        <div className="text-center">
          <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2">
            30%
          </div>
          <p className="text-sm font-medium">Salary Potential</p>
          <p className="text-xs text-muted-foreground">Income & Benefits</p>
        </div>
        <div className="text-center">
          <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2">
            20%
          </div>
          <p className="text-sm font-medium">Growth Outlook</p>
          <p className="text-xs text-muted-foreground">Future Opportunities</p>
        </div>
      </div>
    </div>
  );
};
