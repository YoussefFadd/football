import { Component, OnInit } from '@angular/core';
import { LivescoreService } from '../livescores.service';
import { Match ,ApiResponse} from '../match';

@Component({
  selector: 'app-livescores',
  templateUrl: './livescores.component.html',
  styleUrls: ['./livescores.component.css']
})
export class LivescoresComponent implements OnInit {
  liveMatches: Match[] = [];

  constructor(private liveScoreApiService: LivescoreService) { }

  ngOnInit(): void {
    this.liveScoreApiService.getMatches().subscribe((response: ApiResponse) => {
      this.liveMatches = response.data.match;
    });
  }

}
