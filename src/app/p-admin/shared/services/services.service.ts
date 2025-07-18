import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { apiUrl, url } from '../../../p-lib/config';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  constructor(private http: HttpClient) {}

  //#region CATEGORY SERVICE
  GetAllCategory(): Observable<any> {
    return this.http.get<any>(`${apiUrl + url.GetAllCategory}`).pipe(
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
    return this.http.get<any>(`${apiUrl + url.GetCategoryById}/${id}`).pipe(
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
    return this.http.post<any>(`${apiUrl + url.CategoryService}`, data).pipe(
      map((res) => {
        return res;
      })
    );
  }

  UpdateCategory(id: number, name: string): Observable<any> {
    const dataUpdate = { name };
    return this.http
      .put<any>(`${apiUrl + url.UpdateCategory}/${id}`, dataUpdate, {
        headers: { 'Content-Type': 'application/json' },
      })
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  DeleteCategory(id: number): Observable<any> {
    return this.http.delete<any>(`${apiUrl + url.DeleteCategory}/${id}`).pipe(
      map((res) => {
        return res;
      })
    );
  }
  //#endregion

  //#region SERVICE
  CreateService(data: any): Observable<any> {
    return this.http.post<any>(`${apiUrl + url.CreateService}`, data).pipe(
      map((res) => {
        return res;
      })
    );
  }
  GetAllService(): Observable<any> {
    return this.http.get<any>(`${apiUrl + url.GetAllService}`).pipe(
      map((res) => {
        return res;
      }),
      catchError((error) => {
        console.log(error);

        throw error;
      })
    );
  }

  GetServiceById(id: number): Observable<any> {
    return this.http.get<any>(`${apiUrl + url.GetServiceById}/${id}`).pipe(
      map((res) => {
        return res;
      }),
      catchError((error) => {
        console.log(error);

        throw error;
      })
    );
  }

  UpdateService(id: number, data: any): Observable<any> {
    const dataUpdate = data;
    return this.http
      .put<any>(`${apiUrl + url.UpdateService}/${id}`, dataUpdate, {
        headers: { 'Content-Type': 'application/json' },
      })
      .pipe(
        map((res) => {
          console.log('res');
          return res;
        })
      );
  }

  DeleteService(id: number): Observable<any> {
    return this.http.delete<any>(`${apiUrl + url.DeleteService}/${id}`).pipe(
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
