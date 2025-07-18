import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Subject, takeUntil } from 'rxjs';
import { Until_check } from '../../../../p-lib/until/until';
import { CloudinaryService } from '../../services/cloudinary.service';

@Component({
  selector: 'app-product-detail',
  standalone: false,
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  productForm: FormGroup;
  loading = false;
  submitting = false;
  error = '';
  productId: number | null = null;
  isEditMode = false;
  Unsubscribe = new Subject<void>();
  categoryProduct: any[] = [];
  statusMode: string = '';
  serviceId: number = 0;

  //image
  imagePreview: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private APIService: ProductService,
    private cloudinaryService: CloudinaryService
  ) {
    this.productForm = this.formBuilder.group({
      id: [0],
      name: ['', Validators.required],
      category: [2, Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      images: this.formBuilder.array([]),
      description: ['', Validators.required],
      feature: this.formBuilder.array([]),
      specificationItems: this.formBuilder.array([]),
    });
  }

  //#region LIFECYCLE
  ngOnInit(): void {
    this.APIGetAllCategory();
    this.onCheckInitDetail();
  }

  ngOnDestroy(): void {
    this.Unsubscribe.next();
    this.Unsubscribe.complete();
  }
  //#endregion

  onCheckInitDetail() {
    this.statusMode = localStorage.getItem('status') || 'add';
    this.checkStatusMode(this.statusMode);
    if (this.isEditMode) {
      const idString = localStorage.getItem('productId');
      const id = idString ? parseInt(idString, 10) : -1;
      if (Until_check.hasValue(id)) {
        this.serviceId = id;
        this.APIGetProductById(this.serviceId);
      }
    }
  }

  checkStatusMode(status: string) {
    if (status == 'add') {
      this.isEditMode = false;
    } else if (status == 'edit') {
      this.isEditMode = true;
    }
  }

  get feature(): FormArray {
    return this.productForm.get('feature') as FormArray;
  }

  get specificationItems(): FormArray {
    return this.productForm.get('specificationItems') as FormArray;
  }

  get Image(): FormArray {
    return this.productForm.get('images') as FormArray;
  }

  get imageValues(): string[] {
    return this.Image.controls.map((control) => control.value);
  }

  onUploadImage(e: any) {
    // Clear existing images
    while (this.Image.length) {
      this.Image.removeAt(0);
    }
    // Add new images
    e.forEach((imageUrl: string) => {
      this.Image.push(this.formBuilder.control(imageUrl));
    });
  }

  addFeature(): void {
    this.feature.push(this.formBuilder.control('', Validators.required));
  }

  onFeatureInit(product: any) {
    while (this.feature.length) {
      this.feature.removeAt(0);
    }
    product.feature.forEach((f: any) => {
      this.feature.push(this.formBuilder.control(f, Validators.required));
    });
  }

  removeFeature(index: number): void {
    this.feature.removeAt(index);
  }

  addSpecification(): void {
    this.specificationItems.push(
      this.formBuilder.group({
        name: ['', Validators.required],
        description: ['', Validators.required],
      })
    );
  }

  onSpecificationInit(product: any) {
    while (this.specificationItems.length) {
      this.specificationItems.removeAt(0);
    }
    product.specificationItems.forEach((item: any) => {
      this.specificationItems.push(
        this.formBuilder.group({
          name: [item.name, Validators.required],
          description: [item.description, Validators.required],
        })
      );
    });

    if (product.images) {
      product.images.forEach((imageUrl: string) => {
        this.Image.push(this.formBuilder.control(imageUrl));
      });
    }
  }

  removeSpecification(index: number): void {
    this.specificationItems.removeAt(index);
  }

  onSubmit(): void {
    const data = this.productForm.value;

    this.isEditMode
      ? this.APIUpdateProduct(data.id, data)
      : this.APICreateProduct(data);

    this.loading = true;
  }

  //#region API

  APIGetAllCategory(): void {
    this.loading = true;
    this.APIService.GetAllCategory()
      .pipe(takeUntil(this.Unsubscribe))
      .subscribe({
        next: (res) => {
          if (Until_check.hasValue(res)) {
            this.categoryProduct = res.data;
            this.loading = false;
          }
        },
        error: (error) => {
          console.error('Error loading services:', error);
          this.loading = false;
        },
      });
  }

  APIGetProductById(id: number) {
    return this.APIService.GetProductById(id)
      .pipe(takeUntil(this.Unsubscribe))
      .subscribe(
        (res) => {
          if (Until_check.hasValue(res)) {
            const data = res.data;
            this.onFeatureInit(data);
            this.onSpecificationInit(data);
            this.productForm.patchValue(data);
            console.log(data);
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

  APIUpdateProduct(id: number, data: any) {
    this.loading = true;
    this.APIService.UpdateProduct(id, data)
      .pipe(takeUntil(this.Unsubscribe))
      .subscribe({
        next: (res) => {
          console.log('Update Product Response:', res);
          if (Until_check.hasValue(res)) {
            this.loading = false;
            this.router.navigate(['/admin/products']); // Chuyển trang sau khi thành công
          }
        },
        error: (error: Error) => {
          console.error('Error updating product:', error);
          this.loading = false;
        },
      });
  }

  APICreateProduct(data: any) {
    this.loading = true;
    console.log('Create Product Data:', data);
    this.APIService.CreateProduct(data)
      .pipe(takeUntil(this.Unsubscribe))
      .subscribe({
        next: (res) => {
          console.log('Create Product Response:', res);
          if (Until_check.hasValue(res)) {
            this.loading = false;
            this.router.navigate(['/admin/products']); // Chuyển trang sau khi thành công
          }
        },
        error: (error: Error) => {
          console.error('Error creating product:', error);
          this.loading = false;
        },
      });
  }

  //#endregion
}
