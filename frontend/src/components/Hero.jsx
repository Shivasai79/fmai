import React from 'react';
import { Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-yellow-50 to-background dark:from-yellow-950/20 dark:to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center space-x-2 bg-yellow-100 dark:bg-yellow-900/30 px-4 py-2 rounded-full text-sm font-medium text-yellow-900 dark:text-yellow-200">
            <Sparkles className="h-4 w-4" />
            <span>Discover the Perfect AI Tool</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Find the Right AI Tool
            <span className="block bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent">
              for Every Task
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Browse through our curated collection of AI tools designed to boost your productivity, creativity, and efficiency across writing, design, coding, and more.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-yellow-600">35+</div>
              <div className="text-sm text-muted-foreground">AI Tools</div>
            </div>
            <div className="w-px bg-border"></div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-yellow-600">8</div>
              <div className="text-sm text-muted-foreground">Categories</div>
            </div>
            <div className="w-px bg-border"></div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-yellow-600">Free</div>
              <div className="text-sm text-muted-foreground">to Browse</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;