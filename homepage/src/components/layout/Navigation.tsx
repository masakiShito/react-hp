// src/components/layout/Navigation.tsx
import React from 'react';
import { User, Code, BookOpen, Award, Home } from 'lucide-react';

interface NavItemProps {
  href: string;
  icon: React.ComponentType<{ size: number }>;
  isActive?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ href, icon: Icon, isActive = false }) => (
  <div className="w-full mb-2">
    <a
      href={href}
      className={`w-14 h-14 flex items-center justify-center rounded-full transition-all duration-300
      ${isActive
        ? 'bg-lime-600 text-white shadow-lg'
        : 'bg-gray-100 text-gray-600 hover:bg-lime-600 hover:text-white'}`}
    >
      <Icon size={20} />
    </a>
  </div>
);

export const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = React.useState('header');

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ['header', 'about', 'skills', 'experience', 'portfolio'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed left-0 top-1/2 -translate-y-1/2 ml-6 space-y-6 z-50">
      <div className="w-[140px] flex flex-col items-start gap-2">
        <NavItem href="#header" icon={Home} isActive={activeSection === 'header'} />
        <NavItem href="#about" icon={User} isActive={activeSection === 'about'} />
        <NavItem href="#skills" icon={Code} isActive={activeSection === 'skills'} />
        <NavItem href="#experience" icon={BookOpen} isActive={activeSection === 'experience'} />
        <NavItem href="#portfolio" icon={Award} isActive={activeSection === 'portfolio'} />
      </div>
    </nav>
  );
};