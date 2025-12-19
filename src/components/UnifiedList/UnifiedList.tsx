import { useState, useEffect, useCallback } from 'react';
import type { Experience } from '@/types/experience.types';
import type { Project } from '@/types/project.types';
import { ExperienceCard } from '../ExperienceCard/ExperienceCard';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import { ExperienceModal } from '../ExperienceModal/ExperienceModal';
import { ProjectModal } from '../ProjectModal/ProjectModal';
import { container } from '@/di/container';



type UnifiedItem =
    | ({ type: 'experience' } & Experience)
    | ({ type: 'project' } & Project);

interface UnifiedListProps {
    searchQuery?: string;
    selectedTechs?: string[];
}

export const UnifiedList = ({ searchQuery, selectedTechs }: UnifiedListProps) => {
    const [items, setItems] = useState<UnifiedItem[]>([]);
    const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [loading, setLoading] = useState(true);


    // Helper to parse dates for sorting
    const getDateWeight = (item: UnifiedItem): number => {
        if (item.type === 'experience') {
            // Parse "Jan 2024" or "2024"
            const match = item.period.match(/(\d{4})/);
            return match ? parseInt(match[0]) : 0;
        } else {
            // Project year is just "2025" or similar
            return parseInt(item.year) || 0;
        }
    };

    const loadData = useCallback(async () => {
        setLoading(true);
        try {
            const expService = container.getExperienceService();
            const projService = container.getProjectService();

            // Load all for client-side merge/sort (simplest approach for now given the mock backend)
            // In a real app we'd need a unified backend endpoint
            const [expResponse, projResponse] = await Promise.all([
                expService.getExperiencesPaginated(1, 100, searchQuery, selectedTechs),
                projService.getProjectsPaginated(1, 100, searchQuery, selectedTechs)
            ]);

            const experiences: UnifiedItem[] = expResponse.data.map(e => ({ ...e, type: 'experience' }));
            const projects: UnifiedItem[] = projResponse.data.map(p => ({ ...p, type: 'project' }));

            const combined = [...experiences, ...projects].sort((a, b) => {
                return getDateWeight(b) - getDateWeight(a); // Descending
            });

            setItems(combined);
        } catch (error) {
            console.error('Error loading unified data:', error);
        } finally {
            setLoading(false);
        }
    }, [searchQuery, selectedTechs]);

    useEffect(() => {
        loadData();
    }, [loadData]);


    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[400px]">
                <div className="flex flex-col items-center gap-4">
                    <div className="animate-spin rounded-full h-16 w-16 border-4 border-bee-yellow border-t-transparent"></div>
                    <p className="text-gray-600 font-medium">Carregando...</p>
                </div>
            </div>
        );
    }

    if (items.length === 0) {
        return (
            <div className="text-center py-12">
                <p className="text-gray-600 text-lg">Nenhum resultado encontrado.</p>
            </div>
        );
    }

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item) => (
                    item.type === 'experience' ? (
                        <ExperienceCard
                            key={`exp-${item.id}`}
                            experience={item}
                            onClick={() => setSelectedExperience(item)}
                        />
                    ) : (
                        <ProjectCard
                            key={`proj-${item.id}`}
                            project={item}
                            onClick={() => setSelectedProject(item)}
                        />
                    )
                ))}
            </div>

            <ExperienceModal
                experience={selectedExperience}
                isOpen={!!selectedExperience}
                onClose={() => setSelectedExperience(null)}
            />

            <ProjectModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </>
    );
};
