import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { apiUrl, url } from '../../../p-lib/config';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  //#region CATEGORY SERVICE
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

  GetCategoryById(id: number): Observable<any> {
    return this.http
      .get<any>(`${apiUrl + url.GetCategorProductyById}/${id}`)
      .pipe(
        map((res) => {
          return res;
        }),
        catchError((error) => {
          console.log(error);

          throw error;
        })
      );
  }

  CreateCategory(data: any): Observable<any> {
    return this.http.post<any>(`${apiUrl + url.CategoryProduct}`, data).pipe(
      map((res) => {
        return res;
      })
    );
  }

  UpdateCategory(id: number, name: string): Observable<any> {
    const dataUpdate = { name };
    return this.http
      .put<any>(`${apiUrl + url.UpdateCategoryProduct}/${id}`, dataUpdate, {
        headers: { 'Content-Type': 'application/json' },
      })
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  DeleteCategory(id: number): Observable<any> {
    return this.http
      .delete<any>(`${apiUrl + url.DeleteCategoryProduct}/${id}`)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }
  //#endregion

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

  CreateProduct(data: any): Observable<any> {
    return this.http.post<any>(`${apiUrl + url.AddProduct}`, data).pipe(
      map((res) => {
        return res;
      })
    );
  }

  UpdateProduct(id: number, data: any): Observable<any> {
    const dataUpdate = data;
    return this.http
      .put<any>(`${apiUrl + url.UpdateProduct}/${id}`, dataUpdate, {
        headers: { 'Content-Type': 'application/json' },
      })
      .pipe(
        map((res) => {
          console.log('res');
          return res;
        })
      );
  }

  DeleteProduct(id: number): Observable<any> {
    return this.http.delete<any>(`${apiUrl + url.DeleteProduct}/${id}`).pipe(
      map((res) => {
        return res;
      }),
      catchError((error) => {
        console.log(error);

        throw error;
      })
    );
  }

  //#endregion
}
