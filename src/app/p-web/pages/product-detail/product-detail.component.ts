import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ProductService } from '../../shared/services/product.service';
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
  feature: string[];
  specificationItems: { name: string; description: string }[];
  relatedProducts: number[];
}
@Component({
  selector: 'app-product-detail',
  standalone: false,

  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  product: Product | undefined;
  quantity = 1;
  activeTab = 'description';
  relatedProducts: Product[] = [];
  Unsubscribe = new Subject<void>();
  imagePreview: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private apiService: ProductService
  ) {}

  ngOnInit(): void {
    this.onGetProductDetails();
  }

  ngOnDestroy(): void {
    this.Unsubscribe.next();
    this.Unsubscribe.complete();
  }

  onGetProductDetails(): void {
    this.route.paramMap.subscribe((params) => {
      const productId = Number(params.get('id'));
      this.APIGetProductById(productId);
      console.log(this.product);
    });
  }
  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
  addToCart(): void {
    console.log(`Added ${this.quantity} of ${this.product?.name} to cart`);
    // Implement actual cart functionality
  }

  //#region API
  APIGetProductById(id: number) {
    return this.apiService
      .GetProductById(id)
      .pipe(takeUntil(this.Unsubscribe))
      .subscribe(
        (res) => {
          if (Until_check.hasValue(res)) {
            this.product = res.data;
            console.log(this.product);
            this.APIGetAllProduct();
            // this.imagePreview = data.image;
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

  APIGetAllProduct() {
    return this.apiService
      .GetAllProduct()
      .pipe(takeUntil(this.Unsubscribe))
      .subscribe(
        (res) => {
          if (Until_check.hasValue(res)) {
            this.relatedProducts = res.data.filter(
              (product: Product) =>
                product.id !== this.product?.id &&
                product.category === this.product?.category
            );
            // this.imagePreview = data.image;
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
