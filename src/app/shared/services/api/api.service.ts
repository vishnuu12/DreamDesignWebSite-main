import { Inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ErrorService } from '../error/error.service';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  apiUrl = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private errorService: ErrorService,
  ) { }

  getAllData() {
    console.log(this.apiUrl);
    return this.http.get(this.apiUrl + 'Gender/all').pipe(
      tap((data) => { }),

      catchError((error: HttpErrorResponse) => {
        this.errorService.handleError(error);
        return throwError(error);
      }),

      map((data: any) => {
        return data;
      })
    );
  }

  getData(request: any) {
    return this.http.get(this.apiUrl + 'Gender/', request).pipe(
      tap((data) => { }),

      catchError((error: HttpErrorResponse) => {
        this.errorService.handleError(error);
        return throwError(error);
      }),

      map((data: any) => {
        return data;
      })
    );
  }

  setData(request : any) {
    return this.http.post(this.apiUrl + 'Gender/', request, this.httpOptions).pipe(
      tap((data) => { }),

      catchError((error: HttpErrorResponse) => {
        this.errorService.handleError(error);
        return throwError(error);
      }),

      map((data: any) => {
        return data;
      })
    );
  }

  deleteData(request: any) {
    console.log(request);
    return this.http.delete(this.apiUrl + 'Gender/' + request.id, request).pipe(
      tap((data) => { }),

      catchError((error: HttpErrorResponse) => {
        this.errorService.handleError(error);
        return throwError(error);
      }),

      map((data: any) => {
        return data;
      })
    );

  }

  upDateData(request: any) {
    return this.http.put(this.apiUrl + 'Gender/', request, this.httpOptions).pipe(
      tap((data) => { }),

      catchError((error: HttpErrorResponse) => {
        this.errorService.handleError(error);
        return throwError(error);
      }),

      map((data: any) => {
        return data;
      })
    );

  }
}
