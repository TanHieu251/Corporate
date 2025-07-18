import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { apiUrl, url } from '../../../p-lib/config';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  //#region  PRODUCT
  GetAllProduct(): Observable<any> {
    return this.http.get<any>(`${apiUrl + url.GetAllProduct}`).pipe(
      map((res) => {
        return res;
      }),
      catchError((error) => {
        console.log(error);

        throw error;
      })
    );
  }

  GetProductById(id: number): Observable<any> {
    return this.http.get<any>(`${apiUrl + url.GetProductById}/${id}`).pipe(
      map((res) => {
        return res;
      }),
      catchError((error) => {
        console.log(error);

        throw error;
      })
    );
  }

  GetAllCategory(): Observable<any> {
    return this.http.get<any>(`${apiUrl + url.GetAllCategoryProduct}`).pipe(
      map((res) => {
        return res;
      }),
      catchError((error) => {
        console.log(error);

        throw error;
      })
    );
  }
}
