import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyServiceService } from '../../shared/services/company-service.service';
import { Subject, takeUntil } from 'rxjs';
import { Until_check } from '../../../p-lib/until/until';

@Component({
  selector: 'app-company-admin',
  standalone: false,
  templateUrl: './company-admin.component.html',
  styleUrl: './company-admin.component.scss',
})
export class CompanyAdminComponent implements OnInit, OnDestroy {


  companyForm: FormGroup;
  loading = false;
  error = '';
  Unsubscribe = new Subject<void>();
  dataCompany: any = {};

  //#region LIFECYCLE
  constructor(
    private formBuilder: FormBuilder,
    private companyService: CompanyServiceService
  ) {
    this.companyForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      description: this.formBuilder.array([]),
      mission: ['', Validators.required],
      vision: ['', Validators.required],
      value: ['', Validators.required],
      foundedYear: [
        null,
        [
          Validators.required,
          Validators.min(1900),
          Validators.max(new Date().getFullYear()),
        ],
      ],
    });
  }

  ngOnInit(): void {
    this.APIGetCompany();
  }
  ngOnDestroy(): void {
    this.Unsubscribe.next();
    this.Unsubscribe.complete();
  }
  //#endregion

  //#region HANDLE FORM

  get descriptions(): FormArray {
    return this.companyForm.get('description') as FormArray;
  }

  addDescription() {
    this.descriptions.push(this.formBuilder.control(''));
  }
  removeDescription(index: number) {
    this.descriptions.removeAt(index);
  }

  addDescriptionInit(company: any) {
    company.description.forEach((description: any) => {
      this.descriptions.push(
        this.formBuilder.control(description, Validators.required)
      );
    });
  }
  //#endregion

  onSubmit(): void {
    if (this.companyForm.invalid) {
      return;
    }

    this.UpdateCompany(this.companyForm.value);
  }

  //#region API
  APIGetCompany() {
    return this.companyService
      .GetCompany()
      .pipe(takeUntil(this.Unsubscribe))
      .subscribe(
        (res) => {
          if (Until_check.hasValue(res)) {
            this.dataCompany = res.data;
            console.log(this.dataCompany);
            this.addDescriptionInit(this.dataCompany);
            this.companyForm.patchValue(this.dataCompany);
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

  UpdateCompany(data: any) {
    if (this.companyForm.invalid) {
      return;
    }
    this.loading = true;
    this.error = '';
    this.companyService
      .UpdateCompany(data)
      .pipe(takeUntil(this.Unsubscribe))
      .subscribe(
        (res) => {
          if (Until_check.hasValue(res)) {
            this.loading = false;
          } else {
            // this.nofiService.error(`Đã xảy ra lỗi khi cập nhật công ty: ${res.ErrorString}`);
          }
        },
        (error) => {
          // this.nofiService.error(`Đã xảy ra lỗi khi cập nhật công ty: ${error}`);
        }
      );
  }

  //#endregion
}
