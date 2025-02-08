import React, { useState, useEffect } from 'react';
import { Calendar, Building, GraduationCap } from 'lucide-react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  type: 'education' | 'work';
  details: string[];
}

export const Experience: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const timeline: TimelineEvent[] = [
    {
      year: '2015',
      title: 'プログラミングとの出会い',
      type: 'education',
      description: '高校時代にプログラミングと出会い、独学で基礎を学び始めました。',
      details: [
        'HTMLとCSSの基礎を習得',
        '簡単なWebサイトの作成',
        'プログラミング基礎の学習'
      ]
    },
    {
      year: '2016-2019',
      title: '大学での専門教育',
      type: 'education',
      description: '情報工学を専攻し、プログラミングの基礎から応用まで体系的に学習。',
      details: [
        'アルゴリズムとデータ構造',
        'データベース設計',
        '機械学習プロジェクト'
      ]
    },
    {
      year: '2019-2020',
      title: 'システム開発会社',
      type: 'work',
      description: 'バックエンドエンジニアとしてキャリアをスタート。',
      details: [
        'Java開発',
        'データベース設計',
        'APIの設計と実装'
      ]
    },
    {
      year: '2020-現在',
      title: 'フルスタックエンジニア',
      type: 'work',
      description: 'フロントエンド技術も習得し、フルスタックエンジニアとして活動。',
      details: [
        'React/Next.js開発',
        'マイクロサービス設計',
        'チームリーダー経験'
      ]
    }
  ];

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % timeline.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused, timeline.length]);

  const getIcon = (type: 'education' | 'work') => {
    return type === 'education' ? GraduationCap : Building;
  };

  const generatePath = () => {
    const startX = 80;
    const endX = 280;
    const startY = 120;
    const segmentHeight = 100;

    let path = '';
    timeline.forEach((_, index) => {
      const y = startY + (index * segmentHeight);
      if (index < timeline.length - 1) {
        const nextY = startY + ((index + 1) * segmentHeight);
        if (index % 2 === 0) {
          // 左から右へ
          path += `${index === 0 ? 'M' : 'L'} ${startX} ${y} L ${endX} ${nextY}`;
        } else {
          // 右から左へ
          path += `L ${startX} ${nextY}`;
        }
      }
    });

    return path;
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">MoRoFuJiの経歴</h2>
          <div className="w-20 h-1 bg-lime-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            プログラミングとの出会いから現在までの経歴をご紹介します。
          </p>
        </div>

        <div
          className="max-w-6xl mx-auto relative grid grid-cols-1 md:grid-cols-2 gap-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Timeline Visualization */}
          <div className="relative h-[500px]">
            <svg className="w-full h-full" viewBox="0 0 360 500" preserveAspectRatio="xMidYMid meet">
              {/* 上部の年表示 */}
              <text
                x="180"
                y="40"
                textAnchor="middle"
                className="text-2xl font-bold"
                fill="#84cc16"
              >
                {timeline[activeIndex].year}
              </text>

              {/* ジグザグのパス */}
              <path
                d={generatePath()}
                stroke="#84cc16"
                strokeWidth="3"
                fill="none"
                className="transition-all duration-300"
              />

              {/* タイムラインのポイント */}
              {timeline.map((event, index) => {
                const Icon = getIcon(event.type);
                const isActive = index === activeIndex;
                const y = 120 + (index * 100);
                const x = index % 2 === 0 ? 80 : 280;

                return (
                  <g
                    key={index}
                    transform={`translate(${x}, ${y})`}
                    className="cursor-pointer"
                    onClick={() => setActiveIndex(index)}
                  >
                    {/* ポイントの円 */}
                    <circle
                      r="22"
                      fill={isActive ? "#84cc16" : "white"}
                      stroke="#84cc16"
                      strokeWidth="2"
                      className="transition-all duration-300"
                    />

                    {/* アイコン */}
                    <foreignObject
                      x="-12"
                      y="-12"
                      width="24"
                      height="24"
                      className="transition-all duration-300"
                    >
                      <div className="flex items-center justify-center w-full h-full">
                        <Icon
                          size={16}
                          className={isActive ? "text-white" : "text-lime-600"}
                        />
                      </div>
                    </foreignObject>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Event Details */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="mb-6">
              <div className="flex items-center space-x-2 text-lime-600 mb-2">
                <Calendar size={16} />
                <span className="font-medium">{timeline[activeIndex].year}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {timeline[activeIndex].title}
              </h3>
              <p className="text-gray-600 mb-6">
                {timeline[activeIndex].description}
              </p>
              <div className="space-y-2">
                {timeline[activeIndex].details.map((detail, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 text-gray-700"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-lime-400" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;