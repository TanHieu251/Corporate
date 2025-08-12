import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../../shared/services/services.service';
import { Subject, takeUntil } from 'rxjs';
import { Until_check } from '../../../p-lib/until/until';
interface Service {
  id: number;
  name: string;
  description: string;
  categoryName: string;
  category: number;
  image: string;
}
@Component({
  selector: 'app-services-admin',
  standalone: false,
  templateUrl: './services-admin.component.html',
  styleUrl: './services-admin.component.scss',
})
export class ServicesAdminComponent implements OnInit, OnDestroy {
table=[
    { field: 'id', header: 'ID' },
    { field: 'name', header: 'Tên' },
    { field: 'description', header: 'Mô tả' },
    { field: 'categoryName', header: 'Danh mục' },
    { field: 'image', header: 'Hình ảnh' },

]

  services: Service[] = [];
  filteredServices: Service[] = [];
  categories: any[] = [];
  loading = false;
  searchTerm = '';
  categoryFilter = 'all';
  statusFilter = 'all';
  Unsubscribe = new Subject<void>();

  constructor(
    private router: Router,
    private servicesService: ServicesService
  ) {}

  //#region  LIFECYCLE
  ngOnInit(): void {
    this.APIGetAllService();
    this.APIGetAllCategory();
    localStorage.removeItem('serviceId');
  }
  ngOnDestroy(): void {
    this.Unsubscribe.next();
    this.Unsubscribe.complete();
  }
  //#endregion

  applyFilters(): void {
    let result = this.services;

    // Apply search filter
    if (this.searchTerm) {
      const searchTermLower = this.searchTerm.toLowerCase();
      result = result.filter(
        (service) =>
          service.name.toLowerCase().includes(searchTermLower) ||
          service.description.toLowerCase().includes(searchTermLower)
      );
    }

    if (this.categoryFilter !== 'all') {
      result = result.filter(
        (service) => service.category === Number(this.categoryFilter)
      );
    }

    this.filteredServices = result;
  }

  onSearch(event: Event): void {
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.applyFilters();
  }

  onCategoryFilterChange(event: any): void {
    this.categoryFilter = event.value.id;
    this.applyFilters();
  }

  resetFilters(): void {
    this.searchTerm = '';
    this.categoryFilter = 'all';
    this.applyFilters();
  }

  onAddService() {
    localStorage.setItem('status', 'add');
    this.router.navigate(['/admin/services/detail']);
  }

  editService(data: any): void {
    localStorage.setItem('serviceId', `${data.id}`);
    localStorage.setItem('status', 'edit');
    this.router.navigate(['/admin/services/detail']);
  }

  deleteService(id: number): void {
    if (confirm('Bạn có chắc chắn muốn xóa dịch vụ này không?')) {
      this.APIDeleteService(id);
    }
  }

  onImageError(event: Event): void {
    const imgElement = event.target as HTMLImageElement;
    imgElement.style.display = 'none';
    const parent = imgElement.parentElement;
    if (parent) {
      parent.classList.add('text-gray-500');
      parent.textContent = 'Invalid image';
    }
  }

  //#region API

  APIGetAllCategory(): void {
    this.loading = true;
    this.servicesService
      .GetAllCategory()
      .pipe(takeUntil(this.Unsubscribe))
      .subscribe({
        next: (res) => {
          if (Until_check.hasValue(res)) {
            this.categories = res.data;
            this.categories.unshift({ id: 'all', name: 'Tất cả' });
            this.loading = false;
          }
        },
        error: (error) => {
          console.error('Error loading services:', error);
          this.loading = false;
        },
      });
  }

  APIGetAllService() {
    return this.servicesService
      .GetAllService()
      .pipe(takeUntil(this.Unsubscribe))
      .subscribe(
        (res) => {
          if (Until_check.hasValue(res)) {
            this.services = res.data;
            this.applyFilters();
            this.loading = false;
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

  APIDeleteService(id: number): void {
    this.servicesService
      .DeleteService(id)
      .pipe(takeUntil(this.Unsubscribe))
      .subscribe({
        next: (res) => {
          if (Until_check.hasValue(res)) {
            this.APIGetAllService();
          }
        },
        error: (error) => {
          console.error('Error deleting service:', error);
        },
      });
  }
}
