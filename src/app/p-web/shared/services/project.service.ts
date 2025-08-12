import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { apiUrl, url } from '../../../p-lib/config';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private http: HttpClient) {}

  //#region  PROJECT
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
}
