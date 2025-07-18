import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service-category-modal',
  standalone: false,
  templateUrl: './service-category-model.html',
  styles: [],
})
export class ServiceCategoryModalComponent implements OnInit, OnChanges {
  @Input() isOpen = false;
  @Input() isEditMode = false;
  @Input() categoryData: any = null;
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<any>();

  categoryForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required],
    });
  }

  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (this.isEditMode && this.categoryData) {
      this.categoryForm.patchValue(this.categoryData);
    }
  }

  onClose() {
    this.categoryForm.reset();
    this.close.emit();
  }

  onSubmit() {
    if (this.categoryForm.valid) {
      const formData = this.categoryForm.value;
      if (this.isEditMode && this.categoryData) {
        formData.id = this.categoryData.id;
      }
      this.save.emit(formData);
      this.onClose();
    }
  }
}
