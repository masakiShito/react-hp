// src/components/layout/Header.tsx
import { Github, Twitter, Mail, Linkedin } from 'lucide-react';
import { Navigation } from './Navigation';

export const Header: React.FC = () => (
  <header className="h-screen bg-gradient-to-b from-blue-50 to-white relative">
    <Navigation />
    <div className="container mx-auto px-4 pt-32">
      <h1 className="text-4xl font-bold mb-2">S.MoRoFuJi</h1>
      <p className="text-gray-600">I'm Developer</p>
      <div className="flex space-x-4 mt-4">
        <a href="#" className="text-gray-600 hover:text-gray-900">
          <Github size={20} />
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          <Twitter size={20} />
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          <Mail size={20} />
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          <Linkedin size={20} />
        </a>
      </div>
    </div>
  </header>
);