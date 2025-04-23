
import React from "react";
import { usePersonality } from "@/context";
import { ScrollArea } from "@/components/ui/scroll-area";

interface LayoutProps {
  children: React.ReactNode;
  showProgress?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, showProgress = true }) => {
  const { quizCompleted, currentQuestionIndex, responses } = usePersonality();
  const totalQuestions = 70;
  
  // Calculate progress percentage
  const progressPercentage = !quizCompleted 
    ? Math.round((Object.keys(responses).length / totalQuestions) * 100)
    : 100;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="py-4 px-6 border-b border-border sticky top-0 z-50 bg-background">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white font-semibold">M</span>
            </div>
            <h1 className="text-xl font-bold">MindSpark</h1>
          </div>
          {showProgress && !quizCompleted && (
            <div className="hidden sm:block w-64">
              <div className="text-xs mb-1 flex justify-between">
                <span>Quiz Progress</span>
                <span>{progressPercentage}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary rounded-full"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>
      </header>
      
      <main className="flex-grow container py-8 px-4 overflow-visible">
        {children}
      </main>
      
      <footer className="py-4 px-6 border-t border-border bg-background">
        <div className="container text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} MindSpark Career Pathways. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
