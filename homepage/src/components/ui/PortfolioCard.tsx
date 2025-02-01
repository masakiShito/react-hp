// src/components/ui/PortfolioCard.tsx
import { Project } from '../../types';

type PortfolioCardProps = Project;

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ title, description, iconUrl }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
    <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
      <img src={iconUrl} alt={title} className="w-8 h-8" />
    </div>
    <h3 className="text-xl font-bold text-center mb-2">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);