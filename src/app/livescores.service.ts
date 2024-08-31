import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ApiResponse } from './match';

@Injectable({
  providedIn: 'root'
})
export class LivescoreService {

  private apiUrl = 'https://livescore-api.com/api-client/matches/live.json?competition_id=3&key=35tyB6Xl68d0bAJi&secret=6HKmfJEQOCLIAisEnVcZ2al8iz9t9SMf';

  constructor(private http: HttpClient) { }

  getMatches(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred!';
    
    if (error.status === 401) {
      errorMessage = 'Unauthorized access. Please check your API key and secret.';
    } else if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `An error occurred: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Server returned code: ${error.status}, error message is: ${error.message}`;
    }

    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
