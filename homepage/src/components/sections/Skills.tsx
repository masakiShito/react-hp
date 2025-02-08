// src/components/sections/Skills.tsx
import React from 'react';
import { Skill } from '../../types';

interface SkillCardProps extends Skill {
  color: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, percentage, color }) => (
  <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="flex justify-between items-center mb-4">
      <span className={`px-3 py-1 rounded-full text-sm font-medium ${color}`}>
        {name}
      </span>
      <span className="text-gray-600 font-semibold">{percentage}%</span>
    </div>
    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
      <div
        className={`h-full rounded-full ${color.replace('text-', 'bg-')} transition-all duration-500`}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

export const Skills: React.FC = () => {
  const frontendSkills: SkillCardProps[] = [
    { name: 'HTML', percentage: 95, color: 'text-orange-600' },
    { name: 'CSS', percentage: 90, color: 'text-blue-600' },
    { name: 'JavaScript', percentage: 85, color: 'text-yellow-600' },
    { name: 'React', percentage: 80, color: 'text-cyan-600' },
  ];

  const backendSkills: SkillCardProps[] = [
    { name: 'Python', percentage: 90, color: 'text-green-600' },
    { name: 'Java', percentage: 85, color: 'text-red-600' },
    { name: 'Node.js', percentage: 80, color: 'text-emerald-600' },
    { name: 'TypeScript', percentage: 75, color: 'text-blue-600' },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">MoRoFuJiのスキル</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            フルスタックエンジニアとして、フロントエンドからバックエンドまで幅広いスキルを持っています。
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-6">フロントエンド</h3>
              <div className="space-y-6">
                {frontendSkills.map((skill, index) => (
                  <SkillCard key={index} {...skill} />
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-6">バックエンド</h3>
              <div className="space-y-6">
                {backendSkills.map((skill, index) => (
                  <SkillCard key={index} {...skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};