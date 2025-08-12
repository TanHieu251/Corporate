import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ServicesService } from '../../shared/services/services.service';
import { Until_check } from '../../../p-lib/until/until';
import { CommonModule } from '@angular/common';
import { ServiceCategoryModalComponent } from '../../shared/components/service-category-modal/service-category-modal.component';

@Component({
  selector: 'app-service-category',
  templateUrl: './service-category.component.html',
  styleUrl: './service-category.component.scss',
  standalone: false,
})
export class ServiceCategoryComponent implements OnInit, OnDestroy {
table=[
    { field: 'id', header: 'ID' },
    { field: 'name', header: 'Tên' },
 
]

  services: any[] = [];
  filteredServices: any[] = [];
  loading = false;
  searchTerm = '';
  categoryFilter = 'all';
  statusFilter = 'all';
  Unsubscribe = new Subject<void>();

  // Modal state
  isModalOpen = false;
  isEditMode = false;
  selectedCategory: any = null;

  constructor(
    private router: Router,
    private servicesService: ServicesService
  ) {}

  //#region LIFECYCLE
  ngOnInit(): void {
    this.APIGetAllCategory();
  }

  ngOnDestroy(): void {
    this.Unsubscribe.next();
    this.Unsubscribe.complete();
  }

  //#endregion

  //#region HANLDE SEARCH

  applyFilters(): void {
    let result = this.services;

    if (this.searchTerm) {
      const searchTermLower = this.searchTerm.toLowerCase();
      result = result.filter((service) =>
        (service.name?.toLowerCase() || '').includes(searchTermLower)
      );
    }

    this.filteredServices = result;
  }

  onSearch(event: Event): void {
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.applyFilters();
  }

  resetFilters(): void {
    this.searchTerm = '';
    this.categoryFilter = 'all';
    this.statusFilter = 'all';
    this.applyFilters();
  }
  //#endregion

  //#region MODEL
  // Modal handlers
  openCreateModal(): void {
    this.isEditMode = false;
    this.selectedCategory = null;
    this.isModalOpen = true;
  }

  openEditModal(category: any): void {
    console.log(category);
    this.isEditMode = true;
    this.selectedCategory = category;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.selectedCategory = null;
  }

  handleSave(categoryData: any): void {
    console.log(categoryData);
    if (this.isEditMode) {
      this.APIUpdateCategory(categoryData.id, categoryData.name);
    } else {
      this.APICreateCategory(categoryData);
    }
  }

  onDelete(data: any) {
    if (confirm('Bạn có chắc chắn muốn xóa danh mục này không?')) {
      this.APIDeleteCategory(data.id);
    }
  }
  //#endregion

  //#region API

  APIGetAllCategory(): void {
    this.loading = true;
    this.servicesService
      .GetAllCategory()
      .pipe(takeUntil(this.Unsubscribe))
      .subscribe({
        next: (res) => {
          if (Until_check.hasValue(res)) {
            this.services = res.data;
            this.applyFilters();
            this.loading = false;
          }
        },
        error: (error) => {
          console.error('Error loading services:', error);
          this.loading = false;
        },
      });
  }

  APICreateCategory(name: string): void {
    this.loading = true;
    this.servicesService
      .CreateCategory(name)
      .pipe(takeUntil(this.Unsubscribe))
      .subscribe({
        next: (res) => {
          if (Until_check.hasValue(res)) {
            this.APIGetAllCategory();
          }
        },
        error: (error) => {
          console.error('Error creating services:', error);
          this.loading = false;
        },
      });
  }

  APIUpdateCategory(id: number, name: string): void {
    this.loading = true;
    this.servicesService
      .UpdateCategory(id, name)
      .pipe(takeUntil(this.Unsubscribe))
      .subscribe({
        next: (res) => {
          if (Until_check.hasValue(res)) {
            this.APIGetAllCategory();
          }
        },
        error: (error) => {
          console.error('Error update services:', error);
          this.loading = false;
        },
      });
  }

  APIDeleteCategory(id: number): void {
    this.servicesService
      .DeleteCategory(id)
      .pipe(takeUntil(this.Unsubscribe))
      .subscribe({
        next: (res) => {
          if (Until_check.hasValue(res)) {
            this.APIGetAllCategory();
          }
        },
        error: (error) => {
          console.error('Error deleting category:', error);
        },
      });
  }

  //#endregion
}
