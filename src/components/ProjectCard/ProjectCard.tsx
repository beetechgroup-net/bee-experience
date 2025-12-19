import type { Project } from '@/types/project.types';
import { CalendarIcon, ArrowRightIcon, LinkIcon } from '@heroicons/react/24/outline';
import { TechIcon } from '../TechIcon/TechIcon';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const getStatusColor = (status: string) => {
  const colors: Record<string, string> = {
    completed: 'bg-green-50 text-green-700 border-green-200',
    'in-progress': 'bg-blue-50 text-blue-700 border-blue-200',
    archived: 'bg-gray-50 text-gray-700 border-gray-200',
  };
  return colors[status] || colors.completed;
};

const getStatusLabel = (status: string) => {
  const labels: Record<string, string> = {
    completed: 'Concluído',
    'in-progress': 'Em Desenvolvimento',
    archived: 'Arquivado',
  };
  return labels[status] || status;
};

export const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <div
      className="card cursor-pointer group"
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-bee-yellow transition-colors">
              {project.title}
            </h3>
            <ArrowRightIcon className="w-5 h-5 text-gray-400 group-hover:text-bee-yellow group-hover:translate-x-1 transition-all" />
          </div>
          <div className="flex items-center gap-4 text-gray-600 text-sm mb-4 flex-wrap">
            <div className="flex items-center gap-1.5">
              <CalendarIcon className="w-4 h-4 text-bee-yellow" />
              <span>{project.year}</span>
            </div>
            <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
              {project.category}
            </span>
            <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
              {getStatusLabel(project.status)}
            </span>
          </div>
        </div>
        <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 border border-blue-200 ml-2 shrink-0">
          Projeto
        </span>
      </div>

      <p className="text-gray-600 mb-5 line-clamp-3 leading-relaxed">{project.description}</p>

      <div className="flex items-center justify-between mb-4">
        <div className="flex flex-wrap gap-3">
          {project.technologies.slice(0, 8).map((tech, index) => (
            <TechIcon
              key={index}
              name={tech.name}
              className="w-6 h-6 text-gray-500 hover:text-bee-yellow transition-colors"
            />
          ))}
          {project.technologies.length > 8 && (
            <span className="flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold text-gray-500 bg-gray-100">
              +{project.technologies.length - 8}
            </span>
          )}
        </div>
      </div>

      {(project.projectUrl || project.githubUrl) && (
        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-4">
          {project.projectUrl && (
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 text-xs font-semibold text-bee-yellow hover:underline group/link"
            >
              <LinkIcon className="w-4 h-4" />
              Ver Projeto
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 hover:text-bee-yellow hover:underline"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          )}
        </div>
      )}

      <div className="mt-4 pt-4 border-t border-gray-100">
        <span className="text-xs font-semibold text-bee-yellow group-hover:underline">
          Ver detalhes →
        </span>
      </div>
    </div>
  );
};
