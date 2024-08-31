import { Component, OnInit } from '@angular/core';
import { LaligaService } from '../laliga.service';
import { ApiResponse } from '../match';

@Component({
  selector: 'app-laliga',
  templateUrl: './laliga.component.html',
  styleUrls: ['./laliga.component.css']
})
export class LaligaComponent implements OnInit {
  apiResponse: ApiResponse | null = null;

  constructor(private laligaService: LaligaService) { }

  ngOnInit(): void {
    this.laligaService.getMatches()
      .subscribe(response => {
        this.apiResponse = {
          success: response.success,
          data: response.data
        };
      });
  }

}