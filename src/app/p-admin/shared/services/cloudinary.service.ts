import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs';
import { apiUrl, url } from '../../../p-lib/config';

@Injectable({
  providedIn: 'root',
})
export class CloudinaryService {
  constructor(private http: HttpClient) {}

  private cloudName = 'ecpr';
  private apiKey = '865693634927447';
  private apiSecret = '7G-QsWTBfevze86liIHdXrhCiXI';

  // uploadImage(file: File) {
  //   const formData = new FormData();
  //   formData.append('file', file);
  //   formData.append('upload_preset', 'ml_default');
  //   return this.http
  //     .post('https://api.cloudinary.com/v1_1/dxxzqzqz/image/upload', formData)
  //     .pipe(
  //       map((res) => {
  //         return res;
  //       }),
  //       catchError((error) => {
  //         throw error;
  //       })
  //     );
  // }

  uploadImage(data: FormData) {
    // const formData = new FormData();
    // formData.append('file', file);
    // formData.append('upload_preset', 'ml_default');
    return this.http
      .post('https://api.cloudinary.com/v1_1/ecpr/upload', data)
      .pipe(
        map((res) => {
          return res;
        }),
        catchError((error) => {
          throw error;
        })
      );
  }

  deleteImage(imageId: string) {
    // const formData = new FormData();
    // formData.append('file', file);
    // formData.append('upload_preset', 'ml_default');
    const data = { publicId: imageId };
    return this.http.post(`${apiUrl + url.ImageDelete}`, data).pipe(
      map((res) => {
        return res;
      }),
      catchError((error) => {
        throw error;
      })
    );
  }
}
