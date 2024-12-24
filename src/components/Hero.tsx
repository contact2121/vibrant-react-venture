import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-secondary animate-fade-in" />
      <div className="relative container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
          Welcome to Your Next Project
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto animate-slide-up">
          Build something amazing with modern web technologies and beautiful design
        </p>
        <Button
          size="lg"
          className="animate-slide-up hover:translate-x-1 transition-transform"
        >
          Get Started
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};