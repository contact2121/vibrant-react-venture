import { Code, Palette, Zap } from "lucide-react";

const features = [
  {
    icon: <Code className="h-8 w-8 mb-4 text-primary" />,
    title: "Modern Development",
    description: "Built with React, TypeScript, and Vite for the best developer experience",
  },
  {
    icon: <Palette className="h-8 w-8 mb-4 text-primary" />,
    title: "Beautiful Design",
    description: "Crafted with modern design principles and smooth animations",
  },
  {
    icon: <Zap className="h-8 w-8 mb-4 text-primary" />,
    title: "Lightning Fast",
    description: "Optimized for performance and the best user experience",
  },
];

export const Features = () => {
  return (
    <div className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};