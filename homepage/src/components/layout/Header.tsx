// src/components/layout/Header.tsx
import { Github, Twitter, Mail, Linkedin } from 'lucide-react';
import { Navigation } from './Navigation';
import TextTransition, { presets } from "react-text-transition";
import { useState, useEffect } from "react";

export const Header = () => {
  const TEXTS = ["Frontend Developer", "Backend Developer", "Full Stack Engineer"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prev) => (prev + 1) % TEXTS.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <header id="header" className="min-h-screen relative bg-gradient-to-b from-gray-50 to-white">
      <Navigation />
      <div className="absolute inset-0 bg-gray-50/70" />
      <div className="relative h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center lg:text-left lg:ml-32">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              S.MoRoFuJi
            </h1>
            <div className="h-16">
              <p className="text-2xl lg:text-3xl text-gray-700 font-medium">
                <TextTransition springConfig={presets.gentle}>
                  {TEXTS[index]}
                </TextTransition>
              </p>
            </div>
            <div className="flex justify-center lg:justify-start space-x-6 mt-8">
              <a
                href="#"
                className="p-3 text-gray-600 hover:text-blue-600 hover:bg-white rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <Github size={24} />
              </a>
              <a
                href="#"
                className="p-3 text-gray-600 hover:text-blue-400 hover:bg-white rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <Twitter size={24} />
              </a>
              <a
                href="#"
                className="p-3 text-gray-600 hover:text-red-500 hover:bg-white rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <Mail size={24} />
              </a>
              <a
                href="#"
                className="p-3 text-gray-600 hover:text-blue-700 hover:bg-white rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;