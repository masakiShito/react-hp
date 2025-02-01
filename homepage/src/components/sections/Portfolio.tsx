// src/components/sections/Portfolio.tsx
import { Project } from '../../types';
import { PortfolioCard } from '../ui/PortfolioCard';

export const Portfolio: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Project 1',
      description: 'プロジェクトの説明文がここに入ります',
      iconUrl: '/api/placeholder/64/64'
    },
    // 他のプロジェクト
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-12">MoRoFuJiの実績</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <PortfolioCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};