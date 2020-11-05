import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';

import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogService {


  constructor(private http: HttpClient) { }

  getBlogs(): Observable< Blog[]> {
    return this.http.get< Blog[]>('http://localhost:4200/assets/blog.json').
      pipe(
        catchError(this.handleError)
      );
    // return PRODUCTS;
  }
  handleError(error: HttpErrorResponse) {
    let ErrorMessage = ''
    if (error.error instanceof ErrorEvent) {
      ErrorMessage = 'client Side error ->' + error.error;
    } else {
      ErrorMessage = `status ->${error.status} , body -> ${error.error}`;
    }
    return throwError(ErrorMessage)
  }
}
