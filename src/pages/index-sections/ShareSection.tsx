
import React from "react";
import ShareResults from "@/components/ShareResults";

interface ShareSectionProps {
  onRestartQuiz: () => void;
}

const ShareSection: React.FC<ShareSectionProps> = ({ onRestartQuiz }) => (
  <ShareResults onRestartQuiz={onRestartQuiz} />
);

export default ShareSection;
