
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { usePersonality } from "@/context/PersonalityContext";
import { calculateZodiacSign } from "@/utils/zodiacUtils";
import { ArrowRight } from "lucide-react";

interface UserInfoFormProps {
  onComplete: () => void;
}

const UserInfoForm: React.FC<UserInfoFormProps> = ({ onComplete }) => {
  const { birthdate, setBirthdate, email, setEmail, setZodiacSign } = usePersonality();
  const [emailError, setEmailError] = React.useState<string>("");
  const [birthdateError, setBirthdateError] = React.useState<string>("");

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset errors
    setEmailError("");
    setBirthdateError("");
    
    // Validate fields
    let isValid = true;
    
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      isValid = false;
    }
    
    if (!birthdate) {
      setBirthdateError("Please enter your birthdate");
      isValid = false;
    }
    
    if (isValid) {
      // Calculate zodiac sign based on birthdate
      const zodiac = calculateZodiacSign(birthdate);
      setZodiacSign(zodiac);
      onComplete();
    }
  };

  return (
    <div className="quiz-card animate-fade-in">
      <h2 className="text-2xl font-bold mb-2 text-center">Almost there!</h2>
      <p className="text-center mb-6 text-muted-foreground">
        Let us know a bit about you for personalized insights
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="birthdate">Your Birthdate</Label>
          <Input
            id="birthdate"
            type="date"
            value={birthdate}
            onChange={(e) => {
              setBirthdate(e.target.value);
              setBirthdateError("");
            }}
            className={birthdateError ? "border-destructive" : ""}
          />
          {birthdateError && (
            <p className="text-sm text-destructive">{birthdateError}</p>
          )}
          <p className="text-xs text-muted-foreground">
            We'll use this to calculate your zodiac sign for additional insights
          </p>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError("");
            }}
            className={emailError ? "border-destructive" : ""}
          />
          {emailError && (
            <p className="text-sm text-destructive">{emailError}</p>
          )}
          <p className="text-xs text-muted-foreground">
            We'll send your personalized results to this email
          </p>
        </div>
        
        <Button type="submit" className="w-full mt-8" size="lg">
          See My Results <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </form>
    </div>
  );
};

export default UserInfoForm;
