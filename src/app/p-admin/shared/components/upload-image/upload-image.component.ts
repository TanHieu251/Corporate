import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  OnDestroy,
  OnInit,
  ChangeDetectorRef,
  NgZone,
} from '@angular/core';
import { CloudinaryService } from '../../services/cloudinary.service';
import { Subject, takeUntil } from 'rxjs';
import { Until_check } from '../../../../p-lib/until/until';
import { PrimeNG } from 'primeng/config';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-upload-image',
  standalone: false,
  templateUrl: './upload-image.component.html',
  styleUrl: './upload-image.component.scss',
})
export class UploadImageComponent implements OnInit, OnChanges, OnDestroy {
  @Input({ required: true }) isMulti: boolean = false;
  uploadingImage: boolean = false;
  selectedFiles: File[] = [];
  Unsubscribe = new Subject<void>();
  @Output() imageUploaded = new EventEmitter<string[]>();
  @Input({ required: true }) ListImage: string[] = [];
  imagePreviews: string[] = [];
  files: [] = [];
  fileUpload: string[] = [];

  //#region LIFECYCLE

  constructor(
    private apiService: CloudinaryService,
    private messageService: MessageService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // Ensure ListImage is always an array
    // if (!this.ListImage) {
    //   this.ListImage = [];
    // }
    this.onCheckListImageInit();
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
      this.fileUpload = this.ListImage;
    }
  }

  //#region HANDLE
  choose(event: any, callback: any) {
    callback();
  }

  onRemoveTemplatingFile(
    event: any,
    file: any,
    removeFileCallback: any,
    index: any
  ) {
    removeFileCallback(event, index);
  }

  onClearTemplatingUpload(clear: any) {
    clear();
  }

  onTemplatedUpload() {
    this.messageService.add({
      severity: 'info',
      summary: 'Success',
      detail: 'File Uploaded',
      life: 3000,
    });
  }

  onSelectedFiles(event: any) {
    this.files = event.currentFiles;
  }

  uploadEvent(callback: any) {
    callback();
    for (const file of this.files) {
      if (Until_check.hasValue(file)) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'Corporate');
        formData.append('cloud_name', 'ecpr');
        this.APIUploadImage(formData);
      }
    }
    this.files = [];
    this.uploadingImage = true;
    this.cd.detectChanges();
  }

  formatFileNameFromUrl(url: string): string {
    const regex = /\/([^\/]+)\.(jpg|png|jpeg|gif|webp)$/i;
    const match = url.match(regex);

    if (match && match[1]) {
      return match[1];
    }

    return '';
  }

  onRemoveImageSingle(url: string): void {
    const publicId = this.formatFileNameFromUrl(url);
    this.APIDeleteImage(publicId);
    this.selectedFiles = [];
  }
  //#endregion

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
