import { useState, useEffect } from 'react';
import type { Experience } from '@/types/experience.types';
import { ExperienceCard } from '../ExperienceCard/ExperienceCard';
import { ExperienceModal } from '../ExperienceModal/ExperienceModal';
import { container } from '@/di/container';

export const ExperienceList = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadExperiences = async () => {
      try {
        const experienceService = container.getExperienceService();
        const data = await experienceService.getAllExperiences();
        setExperiences(data);
      } catch (error) {
        console.error('Erro ao carregar experiências:', error);
      } finally {
        setLoading(false);
      }
    };

    loadExperiences();
  }, []);

  const handleCardClick = (experience: Experience) => {
    setSelectedExperience(experience);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedExperience(null);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-bee-yellow border-t-transparent"></div>
          <p className="text-gray-600 font-medium">Carregando experiências...</p>
        </div>
      </div>
    );
  }

  if (experiences.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 text-lg">Nenhuma experiência encontrada.</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiences.map((experience) => (
          <ExperienceCard
            key={experience.id}
            experience={experience}
            onClick={() => handleCardClick(experience)}
          />
        ))}
      </div>
      <ExperienceModal
        experience={selectedExperience}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

