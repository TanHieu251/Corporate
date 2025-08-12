import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MockDataService } from '../../shared/services/mock-data.service';
import { ProductService } from '../../shared/services/product.service';
import { Subject, takeUntil } from 'rxjs';
import { Until_check } from '../../../p-lib/until/until';
import { name } from '@cloudinary/url-gen/actions/namedTransformation';

interface Product {
  id: number;
  name: string;
  category: number;
  price: number;
  rating: number;
  image: string;
  description: string;
}

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit, OnDestroy {
  sortPrice = [
    { label: 'Mặc định', value: 'featured' },
    { label: 'Giá thấp đến cao', value: 'price-low' },
    { label: 'Giá cao đến thấp', value: 'price-high' },
  ];

  menuItems = [
    {
      label: 'Mail',
      icon: 'pi pi-envelope',
      items: [
        {
          label: 'Compose',
          icon: 'pi pi-file-edit',
          shortcut: '⌘+N',
        },
      ],
    },
    {
      label: 'Reports',
      icon: 'pi pi-chart-bar',
      shortcut: '⌘+R',
      items: [
        {
          label: 'Sales',
          icon: 'pi pi-chart-line',
          badge: '3',
        },
        {
          label: 'Products',
          icon: 'pi pi-list',
          badge: '6',
        },
      ],
    },
  ];

  searchTerm = '';
  selectedCategory = [{ id: -1, name: 'Tất cả' }];
  productList: Product[] = [];
  sortBy = 'featured';
  filteredProducts: any[] = [];
  showFilters = false;
  categories: any[] = [];
  loading = false;
  Unsubscribe = new Subject<void>();
  rangePrice: number[] = [0, 10000000];
  isRangePrice: boolean = false;

  //#region LIFECYCLE
  constructor(private apiService: ProductService) {}

  ngOnInit(): void {
    this.APIGetAllProduct();
    this.APIGetAllCategory();
  }

  ngOnDestroy(): void {
    this.Unsubscribe.next();
    this.Unsubscribe.complete();
  }
  //#endregion

  //#region FILTERS
  filterProducts(): void {
    let result = this.productList;

    // Filter by search term
    if (this.searchTerm) {
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          product.description
            .toLowerCase()
            .includes(this.searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (
      this.selectedCategory.length > 0 &&
      this.selectedCategory[0].id !== -1
    ) {
      result = result.filter((product) =>
        this.selectedCategory.some(
          (category) => product.category === category.id
        )
      );
    }

    // Filter by price range
    if (this.rangePrice && this.rangePrice.length === 2) {
      result = result.filter(
        (product) =>
          product.price >= this.rangePrice[0] &&
          product.price <= this.rangePrice[1]
      );
    }

    // Sort products
    if (this.sortBy === 'price-low') {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (this.sortBy === 'price-high') {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (this.sortBy === 'rating') {
      result = [...result].sort((a, b) => b.rating - a.rating);
    }

    this.filteredProducts = result;
  }

  onSearchChange(event: any): void {
    this.searchTerm = event.target.value;
    this.filterProducts();
  }

  onRangeChange(event: any): void {
    this.rangePrice = event.value;
    this.filterProducts();
  }
  onSortChange(event: any): void {
    this.sortBy = event.value;
    this.filterProducts();
  }

  onDropdownChange(event: any): void {
    this.selectedCategory = [];
    const select = event.value;
    const lastItem = select[select.length - 1];
    if (Until_check.hasValue(lastItem) && lastItem.id != -1) {
      const selectedOptions = select.filter((item: any) => item.id !== -1);
      this.selectedCategory = selectedOptions;
    } else {
      this.selectedCategory = [{ id: -1, name: 'Tất cả' }];
    }
    this.filterProducts();
  }

  resetFilters(): void {
    this.searchTerm = '';
    this.selectedCategory = [{ id: -1, name: 'Tất cả' }];
    this.sortBy = 'featured';
    this.filterProducts();
  }

  toggleFilters(): void {
    this.showFilters = !this.showFilters;
  }

  //#endregion

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

  APIGetAllProduct(): void {
    this.loading = true;
    this.apiService
      .GetAllProduct()
      .pipe(takeUntil(this.Unsubscribe))
      .subscribe({
        next: (res) => {
          if (Until_check.hasValue(res)) {
            this.productList = res.data;
            this.filterProducts();
            this.loading = false;
          }
        },
        error: (error) => {
          console.error('Error loading products:', error);
          this.loading = false;
        },
      });
  }
  //#endregion
}
