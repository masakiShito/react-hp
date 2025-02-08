// src/components/sections/Portfolio.tsx
import React, { useState } from 'react';
import { Project } from '../../types';
import { Github, ExternalLink } from 'lucide-react';
import { Construction } from 'lucide-react';

interface PortfolioCardProps extends Project {
  category: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ title, description, iconUrl, category }) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="relative group">
      <img
        src={iconUrl}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
        <div className="flex space-x-4">
          <a href="#" className="p-2 bg-white rounded-full hover:bg-gray-100">
            <Github className="w-6 h-6 text-gray-800" />
          </a>
          <a href="#" className="p-2 bg-white rounded-full hover:bg-gray-100">
            <ExternalLink className="w-6 h-6 text-gray-800" />
          </a>
        </div>
      </div>
    </div>
    <div className="p-6">
      <span className="text-sm text-blue-600 font-medium">{category}</span>
      <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects: PortfolioCardProps[] = [
    {
      title: "ECサイト開発",
      description: "React/Next.jsを使用したモダンなECサイトの開発。TypeScriptとTailwind CSSを採用し、最新のWeb技術を実装。",
      iconUrl: "/api/placeholder/800/600",
      category: "フロントエンド"
    },
    {
      title: "顧客管理システム",
      description: "Python/Djangoを使用した大規模な顧客管理システム。REST APIの設計から実装まで担当。",
      iconUrl: "/api/placeholder/800/600",
      category: "バックエンド"
    },
    {
      title: "SNSアプリケーション",
      description: "MERN스택(MongoDB, Express, React, Node.js)を使用したSNSアプリケーションの開発。",
      iconUrl: "/api/placeholder/800/600",
      category: "フルスタック"
    },
    {
      title: "AIチャットボット",
      description: "機械学習を活用したカスタマーサポート用チャットボットの開発。Python/FastAPIを使用。",
      iconUrl: "/api/placeholder/800/600",
      category: "AI/ML"
    },
    {
      title: "決済システム統合",
      description: "複数の決済サービスを統合した決済プラットフォームの開発。マイクロサービスアーキテクチャを採用。",
      iconUrl: "/api/placeholder/800/600",
      category: "バックエンド"
    },
    {
      title: "モバイルアプリ開発",
      description: "React Nativeを使用したクロスプラットフォームモバイルアプリケーションの開発。",
      iconUrl: "/api/placeholder/800/600",
      category: "モバイル"
    }
  ];

  const categories = ['all', 'フロントエンド', 'バックエンド', 'フルスタック', 'AI/ML', 'モバイル'];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">MoRoFuJiの実績</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            これまでに携わった主要なプロジェクトをご紹介します。
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-12">
          <div className="flex flex-col items-center justify-center space-y-6">
            <Construction className="w-24 h-24 text-blue-600"/>
            <h3 className="text-2xl font-bold text-gray-800">Coming Soon</h3>
            <p className="text-gray-600 text-center">
              現在、実績セクションを準備中です。<br/>
              近日公開予定ですので、今しばらくお待ちください。
            </p>
          </div>
        </div>

        {/*<div className="flex justify-center mb-12">*/}
        {/*  <div className="flex flex-wrap justify-center gap-4">*/}
        {/*    {categories.map((category) => (*/}
        {/*      <button*/}
        {/*        key={category}*/}
        {/*        onClick={() => setActiveFilter(category)}*/}
        {/*        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300*/}
        {/*          ${activeFilter === category*/}
        {/*          ? 'bg-blue-600 text-white'*/}
        {/*          : 'bg-white text-gray-600 hover:bg-blue-50'*/}
        {/*        }`}*/}
        {/*      >*/}
        {/*        {category.charAt(0).toUpperCase() + category.slice(1)}*/}
        {/*      </button>*/}
        {/*    ))}*/}
        {/*  </div>*/}
        {/*</div>*/}

        {/*<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">*/}
        {/*  {filteredProjects.map((project, index) => (*/}
        {/*    <PortfolioCard key={index} {...project} />*/}
        {/*  ))}*/}
        {/*</div>*/}
      </div>
    </section>
  );
};