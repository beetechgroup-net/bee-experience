import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon, SparklesIcon } from '@heroicons/react/24/outline';
import type { Experience } from '@/types/experience.types';

interface ExperienceModalProps {
  experience: Experience | null;
  isOpen: boolean;
  onClose: () => void;
}

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    frontend: 'bg-blue-50 text-blue-700 border-blue-200',
    backend: 'bg-green-50 text-green-700 border-green-200',
    database: 'bg-purple-50 text-purple-700 border-purple-200',
    devops: 'bg-orange-50 text-orange-700 border-orange-200',
    mobile: 'bg-pink-50 text-pink-700 border-pink-200',
    other: 'bg-gray-50 text-gray-700 border-gray-200',
  };
  return colors[category] || colors.other;
};

export const ExperienceModal = ({ experience, isOpen, onClose }: ExperienceModalProps) => {
  if (!experience) return null;

  const technologiesByCategory = experience.technologies.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = [];
    }
    acc[tech.category].push(tech);
    return acc;
  }, {} as Record<string, typeof experience.technologies>);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-3xl bg-white p-8 text-left align-middle shadow-2xl transition-all border border-gray-100">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex-1">
                    <Dialog.Title
                      as="h3"
                      className="text-3xl font-bold gradient-text mb-3"
                    >
                      {experience.title}
                    </Dialog.Title>
                    <div className="flex items-center gap-4 text-gray-600 mb-4">
                      <span className="font-semibold text-gray-900">{experience.company}</span>
                      <span className="text-gray-400">•</span>
                      <span>{experience.period}</span>
                    </div>
                  </div>
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <XMarkIcon className="w-6 h-6" />
                  </button>
                </div>

                <div className="mb-8">
                  <p className="text-gray-700 leading-relaxed text-lg">{experience.description}</p>
                </div>

                <div className="mb-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-br from-bee-yellow to-yellow-400 rounded-lg">
                      <SparklesIcon className="w-6 h-6 text-bee-black" />
                    </div>
                    Destaques
                  </h4>
                  <div className="space-y-4">
                    {experience.highlights.map((highlight, index) => (
                      <div 
                        key={index} 
                        className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-5 border-l-4 border-bee-yellow shadow-sm hover:shadow-md transition-shadow"
                      >
                        <h5 className="font-bold text-gray-900 mb-2 text-lg">{highlight.title}</h5>
                        <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Tecnologias</h4>
                  <div className="space-y-5">
                    {Object.entries(technologiesByCategory).map(([category, techs]) => (
                      <div key={category}>
                        <h5 className="text-sm font-bold text-gray-500 mb-3 uppercase tracking-wider">
                          {category}
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {techs.map((tech, index) => (
                            <span
                              key={index}
                              className={`px-4 py-2 rounded-xl text-sm font-medium border ${getCategoryColor(tech.category)} shadow-sm hover:shadow-md transition-shadow`}
                            >
                              {tech.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

