import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from './match';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  private apiKey = '35tyB6Xl68d0bAJi';
  private apiSecret = '6HKmfJEQOCLIAisEnVcZ2al8iz9t9SMf';
  private apiUrl = 'https://livescore-api.com/api-client/matches/live.json';

  constructor(private http: HttpClient) { }

  getLiveMatches(): Observable<ApiResponse> {
    const params = new HttpParams()
      .set('key', this.apiKey)
      .set('secret', this.apiSecret);
    return this.http.get<ApiResponse>(this.apiUrl, { params });
  }
}
//https://livescore-api.com/api-client/matches/live.json?&key=35tyB6Xl68d0bAJi&secret=6HKmfJEQOCLIAisEnVcZ2al8iz9t9SMf
//https://livescore-api.com/api-client/competitions/list.json?&key=35tyB6Xl68d0bAJi&secret=6HKmfJEQOCLIAisEnVcZ2al8iz9t9SMf