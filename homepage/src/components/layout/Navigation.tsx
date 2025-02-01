// src/components/layout/Navigation.tsx
import React from 'react';
import { MessageCircle, User, Code, Book, Award } from 'lucide-react';

export const Navigation: React.FC = () => (
  <nav className="fixed left-0 top-1/2 -translate-y-1/2 ml-4 space-y-4 z-50">
    <a href="#about" className="block p-2 rounded-full bg-white shadow-md hover:bg-gray-50">
      <User size={20} />
    </a>
    <a href="#skills" className="block p-2 rounded-full bg-white shadow-md hover:bg-gray-50">
      <Code size={20} />
    </a>
    <a href="#experience" className="block p-2 rounded-full bg-white shadow-md hover:bg-gray-50">
      <Book size={20} />
    </a>
    <a href="#portfolio" className="block p-2 rounded-full bg-white shadow-md hover:bg-gray-50">
      <Award size={20} />
    </a>
  </nav>
);