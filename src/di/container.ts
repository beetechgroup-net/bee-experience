import { ExperienceService, type IExperienceService } from '@/services/experience.service';
import { experiencesData } from '@/data/experiences.data';

class DIContainer {
  private experienceService: IExperienceService;

  constructor() {
    this.experienceService = new ExperienceService(experiencesData);
  }

  getExperienceService(): IExperienceService {
    return this.experienceService;
  }
}

export const container = new DIContainer();

