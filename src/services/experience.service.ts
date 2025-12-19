import type { Experience } from '@/types/experience.types';

export interface PaginatedResponse {
  data: Experience[];
  page: number;
  pageSize: number;
  total: number;
  hasMore: boolean;
}

export interface IExperienceService {
  getAllExperiences(): Promise<Experience[]>;
  getExperienceById(id: string): Promise<Experience | null>;
  getExperiencesPaginated(page: number, pageSize: number, searchQuery?: string, selectedTechnologies?: string[]): Promise<PaginatedResponse>;
}

export class ExperienceService implements IExperienceService {
  private experiences: Experience[] = [];
  private readonly delayMs: number = 800; // Delay simulado de 800ms

  constructor(experiences: Experience[]) {
    this.experiences = experiences;
  }

  private async simulateDelay(): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, this.delayMs));
  }

  async getAllExperiences(): Promise<Experience[]> {
    await this.simulateDelay();
    return Promise.resolve([...this.experiences]);
  }

  async getExperienceById(id: string): Promise<Experience | null> {
    await this.simulateDelay();
    const experience = this.experiences.find(exp => exp.id === id);
    return Promise.resolve(experience || null);
  }

  async getExperiencesPaginated(page: number, pageSize: number, searchQuery?: string, selectedTechnologies: string[] = []): Promise<PaginatedResponse> {
    await this.simulateDelay();

    let filteredData = this.experiences;

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filteredData = filteredData.filter(exp =>
        (exp.title && exp.title.toLowerCase().includes(query)) ||
        (exp.description && exp.description.toLowerCase().includes(query)) ||
        (exp.company && exp.company.toLowerCase().includes(query)) ||
        (exp.technologies && exp.technologies.some(tech => tech.name.toLowerCase().includes(query)))
      );
    }

    if (selectedTechnologies.length > 0) {
      filteredData = filteredData.filter(exp =>
        exp.technologies.some(tech => selectedTechnologies.includes(tech.name))
      );
    }

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedData = filteredData.slice(startIndex, endIndex);
    const total = filteredData.length;
    const hasMore = endIndex < total;

    return {
      data: paginatedData,
      page,
      pageSize,
      total,
      hasMore
    };
  }
}

