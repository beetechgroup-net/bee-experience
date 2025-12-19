import { ExperienceService, type IExperienceService } from '@/services/experience.service';
import { experiencesData } from '@/data/experiences.data';
import { ProjectService, type IProjectService } from '@/services/project.service';
import { projectsData } from '@/data/projects.data';

class DIContainer {
  private experienceService: IExperienceService;
  private projectService: IProjectService;

  constructor() {
    this.experienceService = new ExperienceService(experiencesData);
    this.projectService = new ProjectService(projectsData);
  }

  getExperienceService(): IExperienceService {
    return this.experienceService;
  }

  getProjectService(): IProjectService {
    return this.projectService;
  }
}

export const container = new DIContainer();

