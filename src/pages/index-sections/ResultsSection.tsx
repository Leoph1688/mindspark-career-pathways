
import React from "react";
import PersonalityResult from "@/components/PersonalityResult";

interface ResultsSectionProps {
  onContinue: () => void;
}

const ResultsSection: React.FC<ResultsSectionProps> = ({ onContinue }) => (
  <PersonalityResult onContinue={onContinue} />
);

export default ResultsSection;
