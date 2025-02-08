import React, { useState } from 'react';
import { Code, Server, Brain, Palette } from 'lucide-react';

interface SkillCategoryProps {
  title: string;
  icon: React.ComponentType<{ size: number; className?: string }>;
  skills: { name: string; percentage: number }[];
  isActive: boolean;
  onClick: () => void;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, icon: Icon, skills, isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer p-6 rounded-xl transition-all duration-300 ${
        isActive
          ? 'bg-lime-100 shadow-xl scale-105'
          : 'bg-white hover:bg-lime-50'
      }`}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className={`p-3 rounded-lg ${isActive ? 'bg-lime-200' : 'bg-gray-100'}`}>
          <Icon size={24} className={`${isActive ? 'text-lime-600' : 'text-gray-600'}`} />
        </div>
        <h3 className={`text-xl font-bold ${isActive ? 'text-lime-800' : 'text-gray-800'}`}>
          {title}
        </h3>
      </div>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm font-medium text-gray-600">{skill.name}</span>
              <span className="text-sm font-medium text-lime-600">{skill.percentage}%</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-lime-500 rounded-full transition-all duration-1000 ease-out"
                style={{
                  width: isActive ? `${skill.percentage}%` : '0%'
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      title: "フロントエンド",
      icon: Palette,
      skills: [
        { name: "HTML/CSS", percentage: 70 },
        { name: "JavaScript", percentage: 80 },
        { name: "React", percentage: 80 },
        { name: "TypeScript", percentage: 80 }
      ]
    },
    {
      title: "バックエンド",
      icon: Server,
      skills: [
        { name: "Python", percentage: 90 },
        { name: "Java", percentage: 95 },
        { name: "Next.js", percentage: 90 },
        { name: "SQL", percentage: 85 }
      ]
    },
    {
      title: "開発ツール",
      icon: Code,
      skills: [
        { name: "Git", percentage: 90 },
        { name: "Docker", percentage: 85 },
        { name: "AWS", percentage: 30 },
        { name: "Linux", percentage: 35 }
      ]
    },
    {
      title: "その他",
      icon: Brain,
      skills: [
        { name: "Agile/Scrum", percentage: 50 },
        { name: "UI/UX Design", percentage: 60 },
        { name: "Testing", percentage: 80 },
        { name: "CI/CD", percentage: 20 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">MoRoFuJiのスキル</h2>
          <div className="w-20 h-1 bg-lime-600 mx-auto mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            フルスタックエンジニアとして、さまざまな技術スタックを習得してきました。
            以下が主なスキルセットです。
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((category, index) => (
              <SkillCategory
                key={index}
                {...category}
                isActive={activeCategory === index}
                onClick={() => setActiveCategory(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;