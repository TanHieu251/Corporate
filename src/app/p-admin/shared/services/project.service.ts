import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';

import { apiUrl, url } from '../../../p-lib/config';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private http: HttpClient) {}

  //#region CATEGORY SERVICE
  GetAllCategory(): Observable<any> {
    return this.http.get<any>(`${apiUrl + url.GetAllCategoryProject}`).pipe(
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
    return this.http.get<any>(`${apiUrl + url.GetCategoryProject}/${id}`).pipe(
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
    return this.http.post<any>(`${apiUrl + url.AddCategoryProject}`, data).pipe(
      map((res) => {
        return res;
      })
    );
  }

  UpdateCategory(id: number, name: string): Observable<any> {
    const dataUpdate = { name };
    return this.http
      .put<any>(`${apiUrl + url.UpdateCategoryProject}/${id}`, dataUpdate, {
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
      .delete<any>(`${apiUrl + url.DeleteCategoryProject}/${id}`)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }
  //#endregion

  //#region  Project
  GetAllProject(): Observable<any> {
    return this.http.get<any>(`${apiUrl + url.GetAllProject}`).pipe(
      map((res) => {
        return res;
      }),
      catchError((error) => {
        console.log(error);

        throw error;
      })
    );
  }

  GetProjectById(id: number): Observable<any> {
    return this.http.get<any>(`${apiUrl + url.GetProjectById}/${id}`).pipe(
      map((res) => {
        return res;
      }),
      catchError((error) => {
        console.log(error);

        throw error;
      })
    );
  }

  CreateProject(data: any): Observable<any> {
    return this.http.post<any>(`${apiUrl + url.AddProject}`, data).pipe(
      map((res) => {
        return res;
      })
    );
  }

  UpdateProject(id: number, data: any): Observable<any> {
    const dataUpdate = data;
    return this.http
      .put<any>(`${apiUrl + url.UpdateProject}/${id}`, dataUpdate, {
        headers: { 'Content-Type': 'application/json' },
      })
      .pipe(
        map((res) => {
          console.log('res');
          return res;
        })
      );
  }

  DeleteProject(id: number): Observable<any> {
    return this.http.delete<any>(`${apiUrl + url.DeleteProject}/${id}`).pipe(
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
