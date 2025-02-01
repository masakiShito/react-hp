// src/components/layout/Footer.tsx
import { SocialLink } from '../../types';

export const Footer: React.FC = () => {
  const socialLinks: SocialLink[] = [
    { platform: 'Twitter', url: '#' },
    { platform: 'Github', url: '#' },
    { platform: 'Mail', url: '#' },
    { platform: 'LinkedIn', url: '#' }
  ];

  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6">Brandon Johnson</h2>
        <div className="flex justify-center space-x-4 mb-6">
          {socialLinks.map(({ platform, url }) => (
            <a
              key={platform}
              href={url}
              className="text-blue-500 hover:text-blue-600"
            >
              <div className="w-6 h-6" />
            </a>
          ))}
        </div>
        <p className="text-center text-gray-600">
          Copyright © {new Date().getFullYear()}. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};