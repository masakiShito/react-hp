// src/components/sections/About.tsx
import React from 'react';
import { Calendar, Globe, MapPin, Mail, Award, Briefcase } from 'lucide-react';

interface ProfileDetail {
  icon: typeof Calendar;
  label: string;
  value: string;
}

export const About: React.FC = () => {
  const leftDetails: ProfileDetail[] = [
    { icon: Calendar, label: "生年月日", value: "1997/07/15" },
    { icon: Globe, label: "Webサイト", value: "https://xxx.com" },
    { icon: MapPin, label: "居住地", value: "大阪, 日本" },
  ];

  const rightDetails: ProfileDetail[] = [
    { icon: Mail, label: "フリーランス", value: "対応可能" },
    { icon: Award, label: "経験年数", value: "6年" },
    { icon: Briefcase, label: "職種", value: "フルスタックエンジニア" },
  ];

  const ProfileItem = ({ icon: Icon, label, value }: ProfileDetail) => (
    <div className="flex items-center space-x-4 mb-6">
      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
        <Icon size={20} className="text-blue-600" />
      </div>
      <div>
        <p className="text-sm text-gray-600">{label}</p>
        <p className="font-medium text-gray-800">{value}</p>
      </div>
    </div>
  );

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">MoRoFuJiについて</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            MoRoFuJiに興味を持っていただきありがとうございます。
            以下、MoRoFuJiについて詳しく記載させていただきます。
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/api/placeholder/600/600"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-2xl opacity-20"></div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Full Stack Engineer</h3>
              <p className="text-gray-600 mb-8">
                私はシステムエンジニアとして主にバックエンドで戦ってきました。
                エンジニアになって6年目に突入しますが、まだまだわからないことばかりです。
                もっと多くのことを学び、学んだことを還元できるように日々の学習を行っていきたいと思っています。
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  {leftDetails.map((detail, index) => (
                    <ProfileItem key={index} {...detail} />
                  ))}
                </div>
                <div>
                  {rightDetails.map((detail, index) => (
                    <ProfileItem key={index} {...detail} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};