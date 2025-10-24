import React from 'react';
import * as LucideIcons from 'lucide-react';
import { cn } from '../lib/utils';

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <section className="py-8 border-b">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => {
            const IconComponent = LucideIcons[category.icon];
            const isSelected = selectedCategory === category.id;
            
            return (
              <button
                key={category.id}
                onClick={() => onSelectCategory(category.id)}
                className={cn(
                  "flex items-center space-x-2 px-4 py-2 rounded-full border transition-all duration-200",
                  isSelected
                    ? "bg-yellow-500 border-yellow-600 text-black font-medium shadow-md"
                    : "bg-background border-border hover:border-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-950/20"
                )}
              >
                {IconComponent && <IconComponent className="h-4 w-4" />}
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryFilter;