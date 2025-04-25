
import React from "react";
import { usePersonality } from "@/context";
import { ScrollArea } from "@/components/ui/scroll-area";

interface LayoutProps {
  children: React.ReactNode;
  showProgress?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, showProgress = false }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="py-4 px-6 border-b border-border sticky top-0 z-50 bg-background">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/f520c043-e075-4cb7-8d71-322232826078.png" 
              alt="Career Compass Logo" 
              className="w-10 h-10"
            />
            <div className="flex flex-col text-left">
              <h1 className="text-xl font-bold text-primary">Career Compass</h1>
              <p className="text-xs text-muted-foreground">Help lost teens find their path</p>
            </div>
          </div>
        </div>
      </header>
      
      <main className="flex-grow container py-8 px-4 overflow-visible">
        {children}
      </main>
      
      <footer className="py-4 px-6 border-t border-border bg-background">
        <div className="container text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Career Compass. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
