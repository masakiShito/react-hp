// src/components/sections/Experience.tsx
import { TimelineEvent } from '../../types';
import { TimelineItem } from '../ui/TimelineItem';

export const Experience: React.FC = () => {
  const education: TimelineEvent[] = [
    {
      year: '2010 - 2015',
      title: 'プログラミングとの出会い',
      description: 'プログラミングを始めました'
    }
  ];

  const professional: TimelineEvent[] = [
    {
      year: '2020 - Present',
      title: 'シニアエンジニア',
      description: 'フルスタック開発'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-12">MoRoFuJiの経歴</h2>
        <div className="max-w-4xl mx-auto flex justify-between">
          <div className="w-1/2 pr-8">
            <h3 className="font-bold mb-6">幼少期</h3>
            <div className="relative border-l-2 border-blue-500 pl-4">
              {education.map((item, index) => (
                <TimelineItem key={index} {...item} />
              ))}
            </div>
          </div>
          <div className="w-1/2 pl-8">
            <h3 className="font-bold mb-6">Professional Experience</h3>
            <div className="relative border-l-2 border-blue-500 pl-4">
              {professional.map((item, index) => (
                <TimelineItem key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};