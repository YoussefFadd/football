import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from './match';  // Import the ApiResponse interface

@Injectable({
  providedIn: 'root'
})
export class LivematchesService {
  private apiKey = '35tyB6Xl68d0bAJi';
  private apiSecret = '6HKmfJEQOCLIAisEnVcZ2al8iz9t9SMf';
  private apiUrl = `https://livescore-api.com/api-client/competitions/list.json?key=${this.apiKey}&secret=${this.apiSecret}`;

  constructor(private http: HttpClient) { }

  getLiveMatches(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.apiUrl);
  }
}
