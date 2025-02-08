// src/components/sections/Experience.tsx
import React from 'react';
import { TimelineEvent } from '../../types';

interface TimelineCardProps extends TimelineEvent {
  isLeft?: boolean;
}

const TimelineCard: React.FC<TimelineCardProps> = ({ year, title, description, isLeft = true }) => (
  <div className={`relative flex items-center ${isLeft ? 'justify-end' : 'justify-start'} w-full mx-auto`}>
    <div className={`w-full md:w-1/2 ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
          {year}
        </span>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
    <div className="absolute inset-y-0 w-1 bg-blue-200 left-1/2 transform -translate-x-1/2 md:block hidden"></div>
    <div className="absolute w-4 h-4 bg-blue-600 rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
  </div>
);

export const Experience: React.FC = () => {
  const timeline: TimelineEvent[] = [
    {
      year: '2010 - 2015',
      title: 'プログラミングとの出会い',
      description: '高校時代にプログラミングと出会い、独学で基礎を学び始めました。この時期にHTMLとCSSを使用してWebサイトを作成する経験を積みました。'
    },
    {
      year: '2015 - 2019',
      title: '大学での学び',
      description: '情報工学を専攻し、プログラミングの基礎から応用まで体系的に学習。研究では機械学習を活用したプロジェクトに携わりました。'
    },
    {
      year: '2019 - 2020',
      title: 'システム開発会社での経験',
      description: 'バックエンドエンジニアとしてキャリアをスタート。Javaを使用した大規模システムの開発に参加し、実務経験を積みました。'
    },
    {
      year: '2020 - 現在',
      title: 'フルスタックエンジニアへ',
      description: 'フロントエンド技術も習得し、フルスタックエンジニアとして活動。複数のプロジェクトでリーダーを務め、チーム開発の経験を重ねています。'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">MoRoFuJiの経歴</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            プログラミングとの出会いから現在までの経歴をご紹介します。
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            {timeline.map((event, index) => (
              <TimelineCard
                key={index}
                {...event}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};