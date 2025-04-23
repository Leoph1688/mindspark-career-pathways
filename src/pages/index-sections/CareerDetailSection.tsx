
import React from "react";
import CareerDetail from "@/components/CareerDetail";

interface CareerDetailSectionProps {
  careerId: number;
  onBack: () => void;
}

const CareerDetailSection: React.FC<CareerDetailSectionProps> = ({
  careerId,
  onBack,
}) => (
  <CareerDetail careerId={careerId} onBack={onBack} />
);

export default CareerDetailSection;
