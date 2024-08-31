import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { ApiResponse } from '../match';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  matches: ApiResponse | null = null;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getMatches().subscribe((response: ApiResponse) => {
      this.matches = response;
    });
  }
}