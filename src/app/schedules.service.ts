import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SchedulesService {

  private apiUrl = ' https://livescore-api.com/api-client/leagues/table.json';

  constructor(private http: HttpClient) { }

  getLeagueTable(competitionId: number) {
    const params = new HttpParams()
      .set('competition_id', competitionId.toString()) 
      .set('key', '35tyB6Xl68d0bAJi')
      .set('secret', '6HKmfJEQOCLIAisEnVcZ2al8iz9t9SMf');

    return this.http.get(this.apiUrl, { params });
  }
}
