import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ProductService } from '../../shared/services/product.service';
import { Until_check } from '../../../p-lib/until/until';

@Component({
  selector: 'app-product-category',
  standalone: false,
  templateUrl: './product-category.component.html',
  styleUrl: './product-category.component.scss',
})
export class ProductCategoryComponent implements OnInit, OnDestroy {
  categoryProduct: any[] = [];
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

  constructor(private router: Router, private APIService: ProductService) {}

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
    let result = this.categoryProduct;

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

  onDelete(id: number) {
    if (confirm('Bạn có chắc chắn muốn xóa danh mục này không?')) {
      this.APIDeleteCategory(id);
    }
  }
  //#endregion

  //#region API

  APIGetAllCategory(): void {
    this.loading = true;
    this.APIService.GetAllCategory()
      .pipe(takeUntil(this.Unsubscribe))
      .subscribe({
        next: (res) => {
          if (Until_check.hasValue(res)) {
            this.categoryProduct = res.data;
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
    this.APIService.CreateCategory(name)
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
    this.APIService.UpdateCategory(id, name)
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
    this.APIService.DeleteCategory(id)
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
