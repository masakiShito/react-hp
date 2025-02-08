import React from 'react';
import { User, Code, BookOpen, Award, Home } from 'lucide-react';

interface NavItemProps {
  href: string;
  icon: React.ComponentType<{ size: number }>;
  isActive?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ href, icon: Icon, isActive = false }) => (
  <a
    href={href}
    className={`block p-4 rounded-full transition-all duration-300
    ${isActive
      ? 'bg-blue-600 text-white shadow-lg'
      : 'bg-white text-gray-600 shadow-md hover:bg-blue-600 hover:text-white'}`}
  >
    <Icon size={20} />
  </a>
);

export const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = React.useState('home');

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'portfolio'];
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
      <NavItem href="#home" icon={Home} isActive={activeSection === 'home'} />
      <NavItem href="#about" icon={User} isActive={activeSection === 'about'} />
      <NavItem href="#skills" icon={Code} isActive={activeSection === 'skills'} />
      <NavItem href="#experience" icon={BookOpen} isActive={activeSection === 'experience'} />
      <NavItem href="#portfolio" icon={Award} isActive={activeSection === 'portfolio'} />
    </nav>
  );
};