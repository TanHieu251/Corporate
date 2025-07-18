import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { CloudinaryService } from '../../services/cloudinary.service';
import { Subject, takeUntil } from 'rxjs';
import { Until_check } from '../../../../p-lib/until/until';

@Component({
  selector: 'app-upload-image',
  standalone: false,
  templateUrl: './upload-image.component.html',
  styleUrl: './upload-image.component.scss',
})
export class UploadImageComponent implements OnInit, OnChanges, OnDestroy {
  @Input({ required: true }) isMulti: boolean = false;
  uploadingImage: boolean = false;
  imagePreviews: string[] = [];
  selectedFiles: File[] = [];
  Unsubscribe = new Subject<void>();
  @Output() imageUploaded = new EventEmitter<string[]>();
  @Input({ required: true }) ListImage: string[] = [];

  //#region LIFECYCLE

  constructor(private apiService: CloudinaryService) {}

  ngOnInit(): void {
    // Ensure ListImage is always an array
    // if (!this.ListImage) {
    //   this.ListImage = [];
    // }
    // this.onCheckListImageInit();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['ListImage']) {
      if (!this.ListImage) {
        this.ListImage = [];
      }
      this.onCheckListImageInit();
    }
  }

  ngOnDestroy(): void {
    this.Unsubscribe.next();
    this.Unsubscribe.complete();
  }

  //#endregion

  onCheckListImageInit() {
    if (Until_check.hasListValue(this.ListImage)) {
      this.imagePreviews = this.ListImage;
    }
  }

  formatFileNameFromUrl(url: string): string {
    const regex = /\/([^\/]+)\.(jpg|png|jpeg|gif|webp)$/i;
    const match = url.match(regex);

    if (match && match[1]) {
      return match[1];
    }

    return '';
  }

  removeImage(): void {
    this.ListImage.forEach((i) => {
      const publicId = this.formatFileNameFromUrl(i);
      this.APIDeleteImage(publicId);
    });
    this.selectedFiles = [];
    this.imagePreviews = [];
  }

  onFileSelected(event: any) {
    const files = event.target.files[0];
    console.log(this.isMulti);

    this.isMulti
      ? this.onMutilFileSelected(files)
      : this.onSingleFileSelected(files);

    if (Until_check.hasValue(files)) {
      const formData = new FormData();
      formData.append('file', files);
      formData.append('upload_preset', 'Corporate');
      formData.append('cloud_name', 'ecpr');
      this.APIUploadImage(formData);
    }
  }

  onMutilFileSelected(file: any) {
    console.log('mutil');
    if (Until_check.hasValue(file)) {
      this.selectedFiles.push(file);
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagePreviews.push(e.target.result);
      };
      reader.readAsDataURL(file);
      // for (let i = 0; i < file.length; i++) {
      //   const f = file[i];
      //   this.selectedFiles.push(f);
      //   // Tạo preview
      //   const reader = new FileReader();
      //   reader.onload = (e: any) => {
      //     this.imagePreviews.push(e.target.result);
      //   };
      //   reader.readAsDataURL(f);
      // }
    }
  }

  onSingleFileSelected(file: any) {
    console.log('sing');

    this.removeImage();

    if (Until_check.hasValue(file)) {
      this.selectedFiles = [file];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagePreviews = [e.target.result];
      };
      reader.readAsDataURL(file);
    }
  }

  handleImagePreview(file: File) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imagePreviews.push(e.target.result);
    };
    reader.readAsDataURL(file);
  }

  //#region API

  APIUploadImage(data: FormData) {
    this.uploadingImage = true;
    this.apiService
      .uploadImage(data)
      .pipe(takeUntil(this.Unsubscribe))
      .subscribe({
        next: (res: any) => {
          this.uploadingImage = false;
          if (this.isMulti) {
            this.ListImage.push(res.url);
          } else {
            this.ListImage = [res.url];
          }
          this.imageUploaded.emit(this.ListImage);
        },
        error: (error) => {
          console.error('Error uploading image:', error);
          this.uploadingImage = false;
        },
      });
  }

  APIDeleteImage(id: string) {
    return this.apiService
      .deleteImage(id)
      .pipe(takeUntil(this.Unsubscribe))
      .subscribe(
        (res) => {
          if (Until_check.hasValue(res)) {
            console.log(res);
            this.ListImage = this.ListImage.filter((img) => !img.includes(id));

            this.imageUploaded.emit(this.ListImage);
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
