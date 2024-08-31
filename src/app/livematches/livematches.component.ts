import { Component, OnInit } from '@angular/core';
import { LivematchesService } from '../livematches.service';
import { Match } from '../match';  // Import the Match interface

@Component({
  selector: 'app-livematches',
  templateUrl: './livematches.component.html',
  styleUrls: ['./livematches.component.css']
})
export class LiveMatchesComponent implements OnInit {
  matches: Match[] = [];
  errorMessage: string = '';

  constructor(private liveMatchesService: LivematchesService) { }

  ngOnInit(): void {
    this.fetchLiveMatches();
  }

  fetchLiveMatches(): void {
    this.liveMatchesService.getLiveMatches().subscribe(
      (data: any) => {
        if (data.success && data.data && data.data.fixtures) {
          this.matches = data.data.fixtures;
        } else {
          this.errorMessage = data.error || 'No matches found.';
        }
      },
      (error) => {
        console.error('Error fetching live matches:', error);
        this.errorMessage = 'Failed to load matches. Please try again later.';
      }
    );
  }
}
