// src/components/sections/About.tsx
import React from 'react';

export const About: React.FC = () => (
  <section id="about" className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold text-center mb-8">MoRoFuJiについて</h2>
      <p className="text-center text-gray-600 mb-12">
        MoRoFuJiに興味を持っていただきありがとうございます。以下、MoRoFuJiについて詳しく記載させていただきます。
      </p>
      <div className="flex items-center max-w-2xl mx-auto">
        <img
          src="/api/placeholder/300/300"
          alt="Profile"
          className="w-1/3 rounded-lg shadow-lg"
        />
        <div className="ml-8">
          <h3 className="text-xl font-bold mb-4">Full Stack Engineer</h3>
          <p className="text-gray-600">
            バックエンドを中心としていますが、フロントエンドも任せていただけます
          </p>
        </div>
      </div>
    </div>
  </section>
);
