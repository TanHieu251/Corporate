import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Until_check } from '../../../p-lib/until/until';
import { ProjectService } from '../../shared/services/project.service';
import { CloudinaryService } from '../../shared/services/cloudinary.service';

@Component({
  selector: 'app-project',
  standalone: false,
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent implements OnInit, OnDestroy {
  project: any[] = [];
  categoryProject: any[] = [];
  filteredProjects: any[] = [];
  loading = false;
  searchTerm = '';
  categoryFilter = { id: -1, name: 'Tất cả' };
  Unsubscribe = new Subject<void>();

  table = [
    { field: 'id', header: 'ID' },
    { field: 'name', header: 'Tên dự án' },
    { field: 'category', header: 'Danh mục' },
    { field: 'description', header: 'Mô tả' },
    { field: 'client', header: 'Khách hàng' },
    { field: 'images', header: 'Hình ảnh' },
  ];

  //#region LIFECYCLE

  constructor(
    private router: Router,
    private apiService: ProjectService,
    private apiCloudinary: CloudinaryService
  ) {}

  ngOnInit(): void {
    this.APIGetAllProjectCategory();
    this.APIGetAllProject();
  }

  ngOnDestroy(): void {
    this.Unsubscribe.next();
    this.Unsubscribe.complete();
  }

  //#endregion

  //#region  OPEN DETAIL
  onAddProject(): void {
    localStorage.setItem('status', 'add');
    this.router.navigate(['/admin/project/detail']);
  }
  //#endregion

  //#region FILTERS
  applyFilters(): void {
    let result = this.project;

    // Apply search filter
    if (this.searchTerm) {
      const searchTermLower = this.searchTerm.toLowerCase();
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTermLower) ||
          product.description.toLowerCase().includes(searchTermLower)
      );
    }

    // Apply category filter
    if (this.categoryFilter.id !== -1) {
      result = result.filter(
        (product) => product.category === this.categoryFilter.id
      );
    }

    this.filteredProjects = result;
  }

  onSearch(event: Event): void {
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.applyFilters();
  }

  onCategoryFilterChange(event: any): void {
    this.categoryFilter = event.value;
    this.applyFilters();
  }

  resetFilters(): void {
    this.searchTerm = '';
    this.categoryFilter = { id: -1, name: 'Tất cả' };
    this.applyFilters();
  }
  //#endregion

  //#region HANDLE

  onEditProject(value: any): void {
    localStorage.setItem('projectId', `${value.id}`);
    localStorage.setItem('status', 'edit');
    this.router.navigate(['/admin/project/detail']);
  }

  deleteProject(data: any): void {
    if (confirm('Bạn có chắc chắn muốn xóa dự án này không?')) {
      if (Until_check.hasListValue(data.images)) {
        data.images.forEach((image: string) => {
          const publicId = this.formatFileNameFromUrl(image);
          this.APIDeleteImage(publicId);
        });
      }
      this.APIDeleteProject(data.id);
    }
  }

  formatFileNameFromUrl(url: string): string {
    const regex = /\/([^\/]+)\.(jpg|png|jpeg|gif|webp)$/i;
    const match = url.match(regex);

    if (match && match[1]) {
      return match[1];
    }

    return '';
  }
  //#endregion

  //#region API

  APIGetAllProjectCategory(): void {
    this.apiService
      .GetAllCategory()
      .pipe(takeUntil(this.Unsubscribe))
      .subscribe({
        next: (res) => {
          if (Until_check.hasValue(res)) {
            this.categoryProject = res.data;
            this.categoryProject.unshift({ id: -1, name: 'Tất cả' });
          }
        },
        error: (error) => {
          console.error('Error loading category:', error);
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
            this.project = res.data;
            this.applyFilters();
            this.loading = false;
          }
        },
        error: (error) => {
          console.error('Error loading projects:', error);
          this.loading = false;
        },
      });
  }

  APIDeleteProject(id: number): void {
    this.apiService
      .DeleteProject(id)
      .pipe(takeUntil(this.Unsubscribe))
      .subscribe({
        next: (res) => {
          if (Until_check.hasValue(res)) {
            this.APIGetAllProject();
          }
        },
        error: (error) => {
          console.error('Error deleting project:', error);
        },
      });
  }
  APIDeleteImage(id: string) {
    return this.apiCloudinary
      .deleteImage(id)
      .pipe(takeUntil(this.Unsubscribe))
      .subscribe(
        (res) => {
          if (Until_check.hasValue(res)) {
            console.log(res);
          } else {
            // this.nofiService.error(
            //   `Đã xảy ra lỗi khi lấy danh sách chính sách: ${res.ErrorString}`
            // );
          }
        },
        (error) => {
          // this.nofiService.error(
          //   `Đã xảy ra lỗi khi lấy danh sách chính sách: ${error}`
          // );
        }
      );
  }

  //#endregion
}
