import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ProjectService } from '../../services/project.service';
import { CloudinaryService } from '../../services/cloudinary.service';
import { Until_check } from '../../../../p-lib/until/until';

@Component({
  selector: 'app-project-detail',
  standalone: false,
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss',
})
export class ProjectDetailComponent implements OnInit, OnDestroy {
  projectForm: FormGroup;
  loading = false;
  submitting = false;
  error = '';
  projectId: number | null = null;
  isEditMode = false;
  Unsubscribe = new Subject<void>();
  categoryProject: any[] = [];
  statusMode: string = '';
  serviceId: number = 0;

  //image
  imagePreview: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ProjectService,
    private cloudinaryService: CloudinaryService
  ) {
    this.projectForm = this.formBuilder.group({
      id: [0],
      name: ['', Validators.required],
      category: [2, Validators.required],
      images: this.formBuilder.array([]),
      description: ['', Validators.required],
      client: ['', Validators.required],
      location: ['', Validators.required],
      solution: ['', Validators.required],
      result: this.formBuilder.array([]),
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
      const idString = localStorage.getItem('projectId');
      const id = idString ? parseInt(idString, 10) : -1;
      if (Until_check.hasValue(id)) {
        this.serviceId = id;
        this.APIGetProjectById(this.serviceId);
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

  get result(): FormArray {
    return this.projectForm.get('result') as FormArray;
  }

  get Image(): FormArray {
    return this.projectForm.get('images') as FormArray;
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

  onAddResult(): void {
    this.result.push(this.formBuilder.control('', Validators.required));
  }

  onResultInit(product: any) {
    while (this.result.length) {
      this.result.removeAt(0);
    }
    product.result.forEach((f: any) => {
      this.result.push(this.formBuilder.control(f, Validators.required));
    });
  }

  onRemoveResult(index: number): void {
    this.result.removeAt(index);
  }

  onSpecificationInit(product: any) {
    if (product.images) {
      product.images.forEach((imageUrl: string) => {
        this.Image.push(this.formBuilder.control(imageUrl));
      });
    }
  }

  onSubmit(): void {
    const data = this.projectForm.value;
    this.isEditMode
      ? this.APIUpdateProject(data.id, data)
      : this.APICreateProject(data);

    this.loading = true;
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
            this.categoryProject = res.data;
            this.loading = false;
          }
        },
        error: (error) => {
          console.error('Error loading services:', error);
          this.loading = false;
        },
      });
  }

  APIGetProjectById(id: number) {
    console.log(id);

    return this.apiService
      .GetProjectById(id)
      .pipe(takeUntil(this.Unsubscribe))
      .subscribe(
        (res) => {
          if (Until_check.hasValue(res)) {
            const data = res.data;
            this.onResultInit(data);
            this.onSpecificationInit(data);
            this.projectForm.patchValue(data);
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

  APIUpdateProject(id: number, data: any) {
    this.loading = true;
    this.apiService
      .UpdateProject(id, data)
      .pipe(takeUntil(this.Unsubscribe))
      .subscribe({
        next: (res) => {
          console.log('Update Project Response:', res);
          if (Until_check.hasValue(res)) {
            this.loading = false;
            this.router.navigate(['/admin/projects']); // Chuyển trang sau khi thành công
          }
        },
        error: (error: Error) => {
          console.error('Error updating project:', error);
          this.loading = false;
        },
      });
  }

  APICreateProject(data: any) {
    this.loading = true;
    console.log('Create Project Data:', data);
    this.apiService
      .CreateProject(data)
      .pipe(takeUntil(this.Unsubscribe))
      .subscribe({
        next: (res) => {
          console.log('Create Project Response:', res);
          if (Until_check.hasValue(res)) {
            this.loading = false;
            this.router.navigate(['/admin/projects']); // Chuyển trang sau khi thành công
          }
        },
        error: (error: Error) => {
          console.error('Error creating project:', error);
          this.loading = false;
        },
      });
  }

  //#endregion
}
