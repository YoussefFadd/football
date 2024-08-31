import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ApiResponse } from './match';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiKey = '35tyB6Xl68d0bAJi';
  private apiSecret = '6HKmfJEQOCLIAisEnVcZ2al8iz9t9SMf';
  private apiUrl = 'https://livescore-api.com/api-client/fixtures/matches.json';

  constructor(private http: HttpClient) { }

  getMatches(): Observable<ApiResponse> {
    const params = new HttpParams()
      .set('competition_id', '1')
      .set('key', this.apiKey)
      .set('secret', this.apiSecret);
  
    return this.http.get<ApiResponse>(this.apiUrl, { params })
      .pipe(
        catchError(error => {
          console.error(error);
          return throwError(error);
        })
      );
  }
}