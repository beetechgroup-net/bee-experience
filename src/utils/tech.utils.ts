import { experiencesData } from '@/data/experiences.data';
import { projectsData } from '@/data/projects.data';

export const getAllTechnologies = (): string[] => {
    const techSet = new Set<string>();

    experiencesData.forEach(exp => {
        exp.technologies.forEach(tech => {
            techSet.add(tech.name);
        });
    });

    projectsData.forEach(proj => {
        proj.technologies.forEach(tech => {
            techSet.add(tech.name);
        });
    });

    return Array.from(techSet).sort();
};
