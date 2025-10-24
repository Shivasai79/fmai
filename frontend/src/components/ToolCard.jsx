import React from 'react';
import { ExternalLink, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const ToolCard = ({ tool }) => {
  const handleVisitWebsite = () => {
    window.open(tool.url, '_blank', 'noopener,noreferrer');
  };

  const getPricingColor = (pricing) => {
    switch (pricing.toLowerCase()) {
      case 'free':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'freemium':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'paid':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-yellow-400 flex flex-col h-full">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-xl mb-2 group-hover:text-yellow-600 transition-colors">
              {tool.name}
            </CardTitle>
            {tool.featured && (
              <div className="inline-flex items-center space-x-1 text-xs font-medium text-yellow-600 dark:text-yellow-500 mb-2">
                <Star className="h-3 w-3 fill-yellow-500" />
                <span>Featured</span>
              </div>
            )}
          </div>
          <Badge className={getPricingColor(tool.pricing)}>
            {tool.pricing}
          </Badge>
        </div>
        <CardDescription className="line-clamp-2">
          {tool.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1">
        <div className="flex flex-wrap gap-2">
          {tool.tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter>
        <Button
          onClick={handleVisitWebsite}
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-medium group-hover:shadow-md transition-all"
        >
          Visit Website
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ToolCard;