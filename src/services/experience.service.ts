import type { Experience } from '@/types/experience.types';

export interface IExperienceService {
  getAllExperiences(): Promise<Experience[]>;
  getExperienceById(id: string): Promise<Experience | null>;
}

export class ExperienceService implements IExperienceService {
  private experiences: Experience[] = [];

  constructor(experiences: Experience[]) {
    this.experiences = experiences;
  }

  async getAllExperiences(): Promise<Experience[]> {
    return Promise.resolve([...this.experiences]);
  }

  async getExperienceById(id: string): Promise<Experience | null> {
    const experience = this.experiences.find(exp => exp.id === id);
    return Promise.resolve(experience || null);
  }
}

