import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../shared/services/product.service';
import { Subject, takeUntil } from 'rxjs';
import { Until_check } from '../../../p-lib/until/until';
interface Product {
  id: number;
  name: string;
  category: string;
  categoryName: string;
  price: number;
  rating: number;
  images: string[];
  description: string;
  features: string[];
  specifications: { [key: string]: string };
  stock: number;
  isActive: boolean;
}
@Component({
  selector: 'app-product-admin',
  standalone: false,
  templateUrl: './product-admin.component.html',
  styleUrl: './product-admin.component.scss',
})
export class ProductAdminComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  categoryProduct: any[] = [];
  filteredProducts: Product[] = [];
  loading = false;
  searchTerm = '';
  categoryFilter = 'all';
  statusFilter = 'all';
  priceFilter = 'all';
  Unsubscribe = new Subject<void>();

  //#region LIFECYCLE

  constructor(
    // private productService: ProductService,
    private router: Router,
    private apiService: ProductService
  ) {}

  ngOnInit(): void {
    // this.loadProducts();
    this.APIGetAllProductCategory();
    this.APIGetAllProduct();
  }

  ngOnDestroy(): void {
    this.Unsubscribe.next();
    this.Unsubscribe.complete();
  }

  //#endregion

  //#region  OPEN DETAIL
  onAddProduct(): void {
    localStorage.setItem('status', 'add');
    this.router.navigate(['/admin/products/detail']);
  }
  //#endregion

  loadProducts(): void {
    this.loading = true;
    // this.productService.getProducts().subscribe({
    //   next: (products) => {
    //     this.products = products;
    //     this.applyFilters();
    //     this.loading = false;
    //   },
    //   error: (error) => {
    //     console.error('Error loading products', error);
    //     this.loading = false;
    //   },
    // });
  }

  applyFilters(): void {
    let result = this.products;

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
    if (this.categoryFilter !== 'all') {
      result = result.filter(
        (product) => product.category === this.categoryFilter
      );
    }

    // Apply status filter
    if (this.statusFilter !== 'all') {
      const isActive = this.statusFilter === 'active';
      result = result.filter((product) => product.isActive === isActive);
    }

    // Apply price filter
    if (this.priceFilter !== 'all') {
      if (this.priceFilter === 'under-500') {
        result = result.filter((product) => product.price < 500);
      } else if (this.priceFilter === '500-1000') {
        result = result.filter(
          (product) => product.price >= 500 && product.price <= 1000
        );
      } else if (this.priceFilter === '1000-2000') {
        result = result.filter(
          (product) => product.price > 1000 && product.price <= 2000
        );
      } else if (this.priceFilter === 'over-2000') {
        result = result.filter((product) => product.price > 2000);
      }
    }

    this.filteredProducts = result;
  }

  onSearch(event: Event): void {
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.applyFilters();
  }

  onCategoryFilterChange(event: Event): void {
    this.categoryFilter = (event.target as HTMLSelectElement).value;
    this.applyFilters();
  }

  onStatusFilterChange(event: Event): void {
    this.statusFilter = (event.target as HTMLSelectElement).value;
    this.applyFilters();
  }

  onPriceFilterChange(event: Event): void {
    this.priceFilter = (event.target as HTMLSelectElement).value;
    this.applyFilters();
  }

  resetFilters(): void {
    this.searchTerm = '';
    this.categoryFilter = 'all';
    this.statusFilter = 'all';
    this.priceFilter = 'all';
    this.applyFilters();
  }

  onEditProduct(id: number): void {
    localStorage.setItem('productId', `${id}`);
    localStorage.setItem('status', 'edit');
    this.router.navigate(['/admin/products/detail']);
  }

  deleteProduct(id: number): void {
    if (confirm('Bạn có chắc chắn muốn xóa sản phẩm này không?')) {
      this.APIDeleteProduct(id);
    }
  }

  //#region API

  APIGetAllProductCategory(): void {
    this.apiService
      .GetAllCategory()
      .pipe(takeUntil(this.Unsubscribe))
      .subscribe({
        next: (res) => {
          if (Until_check.hasValue(res)) {
            this.categoryProduct = res.data;
            this.categoryProduct.unshift({ id: 'all', name: 'Tất cả' });
          }
        },
        error: (error) => {
          console.error('Error loading category:', error);
          this.loading = false;
        },
      });
  }

  APIGetAllProduct(): void {
    this.loading = true;
    this.apiService
      .GetAllProduct()
      .pipe(takeUntil(this.Unsubscribe))
      .subscribe({
        next: (res) => {
          if (Until_check.hasValue(res)) {
            this.products = res.data;
            this.applyFilters();
            this.loading = false;
          }
        },
        error: (error) => {
          console.error('Error loading products:', error);
          this.loading = false;
        },
      });
  }

  APIDeleteProduct(id: number): void {
    this.apiService
      .DeleteProduct(id)
      .pipe(takeUntil(this.Unsubscribe))
      .subscribe({
        next: (res) => {
          if (Until_check.hasValue(res)) {
            this.APIGetAllProduct();
          }
        },
        error: (error) => {
          console.error('Error deleting product:', error);
        },
      });
  }
  //#endregion
}
