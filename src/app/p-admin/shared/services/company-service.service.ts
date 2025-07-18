import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { apiUrl, url } from '../../../p-lib/config';

@Injectable({
  providedIn: 'root',
})
export class CompanyServiceService {
  constructor(private http: HttpClient) {}

  //#region GET COMPANY
  GetCompany(): Observable<any> {
    return this.http.get<any>(`${apiUrl + url.GetCompany}`).pipe(
      map((res) => {
        return res;
      }),
      catchError((error) => {
        console.log(error);

        // this.noficiService.error(`Error when get list Type Product: ${error}`);
        throw error;
      })
    );
  }
  //#endregion

  //#region UPDATE COMPANY
  UpdateCompany(data: any): Observable<any> {
    return this.http.post<any>(`${apiUrl + url.UpdateCompany}`, data).pipe(
      map((res) => {
        return res;
      }),
      catchError((error) => {
        console.log(error);

        // this.noficiService.error(`Error when update company: ${error}`);
        throw error;
      })
    );
  }
}
