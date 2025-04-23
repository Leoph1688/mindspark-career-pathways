
import React from "react";
import PremiumUpgrade from "@/components/PremiumUpgrade";

interface PremiumCTASectionProps {
  onContinue: () => void;
}

const PremiumCTASection: React.FC<PremiumCTASectionProps> = ({ onContinue }) => (
  <PremiumUpgrade onContinue={onContinue} />
);

export default PremiumCTASection;
