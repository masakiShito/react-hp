// src/components/ui/TimelineItem.tsx
import { TimelineEvent } from '../../types';

type TimelineItemProps = TimelineEvent;

export const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description }) => (
  <div className="mb-8">
    <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 mt-1.5"></div>
    <p className="text-sm text-gray-600">{year}</p>
    <p className="font-medium">{title}</p>
    {description && <p className="text-gray-600 mt-2">{description}</p>}
  </div>
);