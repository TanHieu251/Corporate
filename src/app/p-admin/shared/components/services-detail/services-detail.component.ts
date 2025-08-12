import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ServicesService } from '../../services/services.service';
import { Subject, takeUntil } from 'rxjs';
import { Until_check } from '../../../../p-lib/until/until';
import { CloudinaryService } from '../../services/cloudinary.service';

@Component({
  selector: 'app-services-detail',
  standalone: false,
  templateUrl: './services-detail.component.html',
  styleUrl: './services-detail.component.scss',
})
export class ServicesDetailComponent implements OnInit, OnDestroy {
  serviceForm: FormGroup;
  loading = false;
  submitting = false;
  error = '';
  serviceId: number = 0;
  isEditMode = false;
  Unsubscribe = new Subject<void>();
  service: any = [];
  serviceCategory: any[] = [];
  statusMode: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private serviceService: ServicesService,
    private router: Router
  ) {
    this.serviceForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      category: [0, Validators.required],
      image: this.formBuilder.array([]),
      feature: this.formBuilder.array([]),
    });
  }

  ngOnInit(): void {
    this.APIGetAllCategory();
    this.statusMode = localStorage.getItem('status') || 'add';
    this.checkStatusMode(this.statusMode);
    if (this.isEditMode) {
      const idString = localStorage.getItem('serviceId');
      const id = idString ? parseInt(idString, 10) : -1;
      if (Until_check.hasValue(id)) {
        this.serviceId = id;
        this.APIGetServiceById(this.serviceId);
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

  ngOnDestroy(): void {
    this.Unsubscribe.next();
    this.Unsubscribe.complete();
  }

  get feature(): FormArray {
    return this.serviceForm.get('feature') as FormArray;
  }

  get Image(): FormArray {
    return this.serviceForm.get('image') as FormArray;
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

  removeFeature(index: number): void {
    this.feature.removeAt(index);
  }

  onFeatureInit(service: any) {
    while (this.feature.length) {
      this.feature.removeAt(0);
    }
    service.feature.forEach((f: any) => {
      this.feature.push(this.formBuilder.control(f, Validators.required));
    });

    this.Image.push(
      this.formBuilder.control(service.image, Validators.required)
    );
  }

  onSubmit(): void {
    const data = this.serviceForm.value;
    if (Until_check.hasListValue(data.image)) {
      data.image = this.imageValues[0];
    }
    this.isEditMode
      ? this.APIUpdateService(data.id, data)
      : this.APICreateService(data);

    this.loading = true;
  }

  //#region API
  APIGetAllCategory(): void {
    this.loading = true;
    this.serviceService
      .GetAllCategory()
      .pipe(takeUntil(this.Unsubscribe))
      .subscribe({
        next: (res) => {
          if (Until_check.hasValue(res)) {
            this.serviceCategory = res.data;

            this.loading = false;
          }
        },
        error: (error) => {
          console.error('Error loading services:', error);
          this.loading = false;
        },
      });
  }

  APIGetServiceById(id: number) {
    return this.serviceService
      .GetServiceById(id)
      .pipe(takeUntil(this.Unsubscribe))
      .subscribe(
        (res) => {
          if (Until_check.hasValue(res)) {
            const data = res.data;
            this.onFeatureInit(data);
            this.serviceForm.patchValue(data);
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

  APIUpdateService(id: number, data: any) {
    this.loading = true;
    console.log('Update Service Data:', data);
    this.serviceService
      .UpdateService(id, data)
      .pipe(takeUntil(this.Unsubscribe))
      .subscribe({
        next: (res) => {
          console.log('Update Service Response:', res);
          if (Until_check.hasValue(res)) {
            this.loading = false;
            this.router.navigate(['/admin/service']);
          }
        },
        error: (error: Error) => {
          console.error('Error updating service:', error);
          this.loading = false;
        },
      });
  }

  APICreateService(data: any) {
    this.loading = true;
    console.log('Create Service Data:', data);
    this.serviceService
      .CreateService(data)
      .pipe(takeUntil(this.Unsubscribe))
      .subscribe({
        next: (res) => {
          console.log('Create Service Response:', res);
          if (Until_check.hasValue(res)) {
            this.loading = false;
            this.router.navigate(['/admin/service']);
          }
        },
        error: (error: Error) => {
          console.error('Error creating service:', error);
          this.loading = false;
        },
      });
  }
}
//#endregion
