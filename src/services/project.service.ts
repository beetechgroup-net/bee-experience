import type { Project } from '@/types/project.types';

export interface PaginatedResponse {
  data: Project[];
  page: number;
  pageSize: number;
  total: number;
  hasMore: boolean;
}

export interface IProjectService {
  getAllProjects(): Promise<Project[]>;
  getProjectById(id: string): Promise<Project | null>;
  getProjectsPaginated(page: number, pageSize: number, searchQuery?: string): Promise<PaginatedResponse>;
}

export class ProjectService implements IProjectService {
  private projects: Project[] = [];
  private readonly delayMs: number = 800; // Delay simulado de 800ms

  constructor(projects: Project[]) {
    this.projects = projects;
  }

  private async simulateDelay(): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, this.delayMs));
  }

  async getAllProjects(): Promise<Project[]> {
    await this.simulateDelay();
    return Promise.resolve([...this.projects]);
  }

  async getProjectById(id: string): Promise<Project | null> {
    await this.simulateDelay();
    const project = this.projects.find(proj => proj.id === id);
    return Promise.resolve(project || null);
  }

  async getProjectsPaginated(page: number, pageSize: number, searchQuery?: string): Promise<PaginatedResponse> {
    await this.simulateDelay();

    let filteredData = this.projects;

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filteredData = this.projects.filter(proj =>
        (proj.title && proj.title.toLowerCase().includes(query)) ||
        (proj.description && proj.description.toLowerCase().includes(query)) ||
        (proj.technologies && proj.technologies.some(tech => tech.name.toLowerCase().includes(query)))
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

