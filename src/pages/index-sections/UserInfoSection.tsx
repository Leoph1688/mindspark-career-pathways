
import React from "react";
import UserInfoForm from "@/components/UserInfoForm";

interface UserInfoSectionProps {
  onComplete: () => void;
}

const UserInfoSection: React.FC<UserInfoSectionProps> = ({ onComplete }) => (
  <div className="swipe-container">
    <UserInfoForm onComplete={onComplete} />
  </div>
);

export default UserInfoSection;
