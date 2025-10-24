import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t bg-muted/50 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent">
              AI Tools Hub
            </h3>
            <p className="text-sm text-muted-foreground">
              Discover and explore the best AI tools for your daily tasks and projects.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-yellow-600 transition-colors">Writing</a></li>
              <li><a href="#" className="hover:text-yellow-600 transition-colors">Design</a></li>
              <li><a href="#" className="hover:text-yellow-600 transition-colors">Video</a></li>
              <li><a href="#" className="hover:text-yellow-600 transition-colors">Code</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-yellow-600 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-yellow-600 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-yellow-600 transition-colors">Submit Tool</a></li>
              <li><a href="#" className="hover:text-yellow-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-yellow-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-yellow-600 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-yellow-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-yellow-600 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AI Tools Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;