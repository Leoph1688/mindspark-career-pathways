
import React from "react";
import { usePersonality } from "@/context";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ChevronLeft } from "lucide-react";

interface CareerDetailProps {
  careerId: number;
  onBack: () => void;
}

const CareerDetail: React.FC<CareerDetailProps> = ({ careerId, onBack }) => {
  const { suggestedCareers } = usePersonality();
  const career = suggestedCareers.find(c => c.id === careerId);
  
  if (!career) {
    return (
      <div className="text-center">
        <p>Career not found</p>
        <Button onClick={onBack} variant="outline" className="mt-4">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Career List
        </Button>
      </div>
    );
  }
  
  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <Button 
        onClick={onBack} 
        variant="outline" 
        className="mb-6"
      >
        <ChevronLeft className="mr-2 h-4 w-4" /> Back to Career List
      </Button>
      
      <Card className="p-6 mb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
          <h1 className="text-3xl font-bold">{career.title}</h1>
          <div className={`
            rating-pill mt-2 md:mt-0
            ${career.aiRisk === 'Low' ? 'bg-green-100 text-green-800' : 
              career.aiRisk === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
              'bg-red-100 text-red-800'}
          `}>
            AI Risk: {career.aiRisk}
          </div>
        </div>
        
        <p className="text-lg mb-6">{career.description}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-secondary/50 p-4 rounded-md">
            <h3 className="font-medium mb-2">Personality Fit</h3>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-bold">{career.personalityFit}%</span>
              <span className="text-sm text-muted-foreground">match with your profile</span>
            </div>
          </div>
          
          <div className="bg-secondary/50 p-4 rounded-md">
            <h3 className="font-medium mb-2">Salary Range</h3>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-bold">
                ${(career.salaryRange.min/1000).toFixed(0)}K-${(career.salaryRange.max/1000).toFixed(0)}K
              </span>
              <span className="text-sm text-muted-foreground">per year</span>
            </div>
          </div>
          
          <div className="bg-secondary/50 p-4 rounded-md">
            <h3 className="font-medium mb-2">Growth Potential</h3>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-bold">{career.growthPotential}%</span>
              <span className="text-sm text-muted-foreground">future outlook</span>
            </div>
          </div>
        </div>
        
        <Separator className="my-6" />
        
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-4">Daily Activities</h3>
          <ul className="space-y-2">
            {career.dailyActivities.map((activity, index) => (
              <li key={index} className="flex items-start">
                <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5">
                  {index + 1}
                </span>
                <span>{activity}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <Separator className="my-6" />
        
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-4">Future Outlook</h3>
          <p>{career.outlook}</p>
          
          <div className="mt-4 p-4 border border-border rounded-md">
            <h4 className="font-medium mb-2">AI Impact Assessment</h4>
            <p className="text-sm">
              {career.aiRisk === 'Low' ? 
                "This career has a low risk of being automated or significantly changed by AI technologies in the next decade. The human skills required for this role are difficult to replicate with AI." : 
                career.aiRisk === 'Medium' ? 
                "This career may see some tasks automated by AI in the coming years, but core aspects of the role will likely still require human skills and judgment." : 
                "This career faces significant potential disruption from AI technologies. Many tasks in this role could be automated within the next decade, requiring substantial adaptation."}
            </p>
          </div>
        </div>
        
        <Separator className="my-6" />
        
        <div>
          <h3 className="text-xl font-bold mb-4">Next Steps & Resources</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2">Education Paths</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Bachelor's degree in {career.title.includes('Data') ? 'Computer Science or Statistics' : career.title.includes('UX') ? 'Design or Human-Computer Interaction' : 'related field'}</li>
                <li>Industry certifications</li>
                <li>Online courses and bootcamps</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Internship Opportunities</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Summer internship programs</li>
                <li>Remote entry-level positions</li>
                <li>College co-op programs</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6">
            <Button className="w-full">Find Training & Opportunities</Button>
            <p className="text-sm text-center text-muted-foreground mt-2">
              Connects to our curated resources for this career path
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CareerDetail;
