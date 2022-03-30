import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  data: any[] = [];
  url: string = 'https://jsonplaceholder.typicode.com/users'
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>(this.url).pipe(catchError(this.errorHandler))
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.url+`/${id}`).pipe(catchError(this.errorHandler))
  }

  update(user: any): Observable<any> {
    return this.http.put(this.url+`/${user.id}`, user).pipe(catchError(this.errorHandler))
  }

  add(user: any): Observable<any> {
    return this.http.post(this.url, user).pipe(catchError(this.errorHandler)) 
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(() => new Error(error.message || "Server error"))
  }
}
