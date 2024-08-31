import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlayersService } from '../players.service';
import { Match, ApiResponse } from '../match';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit, OnDestroy {
  liveMatches: Match[] = [];

  private subscription: Subscription | undefined;

  constructor(private playersService: PlayersService) { }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  ngOnInit() {
    this.subscription = this.playersService.getLiveMatches().subscribe((response: ApiResponse) => {
      this.liveMatches = response.data.match;
    });
  }
}