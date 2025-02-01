// src/components/sections/Skills.tsx
import { Skill } from '../../types';
import { SkillBar } from '../ui/SkillBar';

export const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'JavaScript', percentage: 90 },
    { name: 'React', percentage: 85 },
    { name: 'Node.js', percentage: 80 },
    { name: 'Python', percentage: 75 }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-12">MoRoFuJiのスキル</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {skills.map(skill => (
            <SkillBar key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};