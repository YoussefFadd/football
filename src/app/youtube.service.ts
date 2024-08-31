// src/app/youtube.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private apiKey = 'AIzaSyB9XYXcPEt0fBiymAIAbGKjKIOojLp9TDs'; // Replace with your API key
  private channelId = 'UC4z99eE6ybqgY5k2E8h6C_g'; // beIN Sports channel ID

  private apiUrl = `https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics&id=${this.channelId}&key=${this.apiKey}`;

  constructor(private http: HttpClient) { }

  getChannelData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
