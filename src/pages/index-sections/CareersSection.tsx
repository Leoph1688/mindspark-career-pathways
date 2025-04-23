
import React from "react";
import CareerList from "@/components/CareerList";

interface CareersSectionProps {
  onViewCareerDetails: (careerId: number) => void;
}

const CareersSection: React.FC<CareersSectionProps> = ({ onViewCareerDetails }) => (
  <CareerList onViewCareerDetails={onViewCareerDetails} />
);

export default CareersSection;
