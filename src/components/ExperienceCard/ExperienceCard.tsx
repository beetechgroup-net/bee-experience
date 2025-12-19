import type { Experience } from '@/types/experience.types';
import { CalendarIcon, BuildingOfficeIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

interface ExperienceCardProps {
  experience: Experience;
  onClick: () => void;
}

export const ExperienceCard = ({ experience, onClick }: ExperienceCardProps) => {
  return (
    <div 
      className="card cursor-pointer group"
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-bee-yellow transition-colors">
              {experience.title}
            </h3>
            <ArrowRightIcon className="w-5 h-5 text-gray-400 group-hover:text-bee-yellow group-hover:translate-x-1 transition-all" />
          </div>
          <div className="flex items-center gap-4 text-gray-600 text-sm mb-4">
            <div className="flex items-center gap-1.5">
              <BuildingOfficeIcon className="w-4 h-4 text-bee-yellow" />
              <span className="font-medium">{experience.company}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CalendarIcon className="w-4 h-4 text-bee-yellow" />
              <span>{experience.period}</span>
            </div>
          </div>
        </div>
        <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700 border border-purple-200 ml-2 shrink-0">
          Experiência
        </span>
      </div>
      
      <p className="text-gray-600 mb-5 line-clamp-3 leading-relaxed">{experience.description}</p>
      
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {experience.technologies.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-50 rounded-full text-xs font-medium text-gray-700 border border-gray-200 hover:border-bee-yellow/50 transition-colors"
            >
              {tech.name}
            </span>
          ))}
          {experience.technologies.length > 4 && (
            <span className="px-3 py-1.5 bg-gradient-to-r from-bee-yellow/10 to-yellow-50 rounded-full text-xs font-semibold text-bee-yellow border border-bee-yellow/30">
              +{experience.technologies.length - 4}
            </span>
          )}
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-100">
        <span className="text-xs font-semibold text-bee-yellow group-hover:underline">
          Ver detalhes →
        </span>
      </div>
    </div>
  );
};
