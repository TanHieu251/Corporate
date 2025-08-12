import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProjectService } from '../../shared/services/project.service';
import { Subject, takeUntil } from 'rxjs';
import { Until_check } from '../../../p-lib/until/until';
interface Project {
  id: number;
  title: string;
  category: number;
  categoryName: string;
  location: string;
  date: string;
  image: string;
  description: string;
  featured: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: false,

  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit, OnDestroy {
  loading: boolean = false;
  searchTerm = '';
  selectedCategory = { id: -1, name: 'Tất cả' };
  projectList: Project[] = [];
  filteredProjects: any[] = [];
  showFilters = false;
  categories: any[] = [];
  Unsubscribe = new Subject<void>();

  //#region LIFECYCLE
  constructor(private apiService: ProjectService) {}
  ngOnDestroy(): void {
    this.Unsubscribe.next();
    this.Unsubscribe.complete();
  }

  ngOnInit(): void {
    this.APIGetAllCategory();
    this.APIGetAllProject();
    console.log(this.categories);
  }
  //#endregion

  //#region FILTERS
  onFiltersProject(): void {
    let result = this.projectList;

    // Filter by category
    if (this.selectedCategory && this.selectedCategory.id !== -1) {
      result = result.filter((project) => {
        return project.category === this.selectedCategory.id;
      });
    }
    this.filteredProjects = result;
  }

  // Process steps
  processSteps = [
    {
      step: 1,
      title: 'Initial Consultation',
      description:
        'We begin by understanding your requirements, challenges, and objectives through detailed discussions.',
    },
    {
      step: 2,
      title: 'Design & Planning',
      description:
        'Our engineers develop detailed designs and project plans, including timelines and resource allocation.',
    },
    {
      step: 3,
      title: 'Implementation',
      description:
        'Our skilled technicians execute the project according to the approved design, with regular progress updates.',
    },
    {
      step: 4,
      title: 'Testing & Handover',
      description:
        'We conduct thorough testing and provide comprehensive documentation and training before final handover.',
    },
  ];

  onCategoryChange(category: any): void {
    this.selectedCategory = category;
    this.onFiltersProject();
  }

  //#region API
  APIGetAllCategory(): void {
    this.loading = true;
    this.apiService
      .GetAllCategory()
      .pipe(takeUntil(this.Unsubscribe))
      .subscribe({
        next: (res) => {
          if (Until_check.hasValue(res)) {
            this.categories = res.data || [];
            this.categories.unshift({ id: -1, name: 'Tất cả' });
            this.loading = false;
          }
        },
        error: (error) => {
          console.error('Error loading services:', error);
          this.loading = false;
        },
      });
  }

  APIGetAllProject(): void {
    this.loading = true;
    this.apiService
      .GetAllProject()
      .pipe(takeUntil(this.Unsubscribe))
      .subscribe({
        next: (res) => {
          if (Until_check.hasValue(res)) {
            this.projectList = res.data;
            this.onFiltersProject();
            this.loading = false;
          }
        },
        error: (error) => {
          console.error('Error loading projects:', error);
          this.loading = false;
        },
      });
  }
  //#endregion
}
