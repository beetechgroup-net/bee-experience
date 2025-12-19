import { useState, useEffect, useRef, useCallback } from 'react';
import type { Experience } from '@/types/experience.types';
import { ExperienceCard } from '../ExperienceCard/ExperienceCard';
import { ExperienceModal } from '../ExperienceModal/ExperienceModal';
import { container } from '@/di/container';

const PAGE_SIZE = 6; // Número de experiências por página

interface ExperienceListProps {
  searchQuery?: string;
  selectedTechs?: string[];
}


export const ExperienceList = ({ searchQuery, selectedTechs }: ExperienceListProps) => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const observerTarget = useRef<HTMLDivElement>(null);

  const loadExperiences = useCallback(async (page: number, append: boolean = false) => {
    try {
      if (append) {
        setLoadingMore(true);
      } else {
        setLoading(true);
      }

      const experienceService = container.getExperienceService();
      const response = await experienceService.getExperiencesPaginated(page, PAGE_SIZE, searchQuery, selectedTechs);

      if (append) {
        setExperiences(prev => [...prev, ...response.data]);
      } else {
        setExperiences(response.data);
      }

      setHasMore(response.hasMore);
      setCurrentPage(page);
    } catch (error) {
      console.error('Erro ao carregar experiências:', error);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  }, [searchQuery, selectedTechs]);

  useEffect(() => {
    loadExperiences(1, false);
  }, [loadExperiences, searchQuery, selectedTechs]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loadingMore && !loading) {
          loadExperiences(currentPage + 1, true);
        }
      },
      { threshold: 0.1 }
    );

    const currentTarget = observerTarget.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [hasMore, loadingMore, loading, currentPage, loadExperiences]);

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

      {/* Elemento observado para scroll infinito */}
      <div ref={observerTarget} className="h-20 flex items-center justify-center">
        {loadingMore && (
          <div className="flex flex-col items-center gap-4">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-bee-yellow border-t-transparent"></div>
            <p className="text-gray-600 text-sm">Carregando mais experiências...</p>
          </div>
        )}
        {!hasMore && experiences.length > 0 && (
          <p className="text-gray-500 text-sm">Todas as experiências foram carregadas</p>
        )}
      </div>

      <ExperienceModal
        experience={selectedExperience}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

