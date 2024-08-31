import { Component, OnInit } from '@angular/core';
import { SchedulesService } from '../schedules.service';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})
export class SchedulesComponent implements OnInit {
  leagueTable: any[]=[];

  constructor(private schedulesService: SchedulesService) { }

  ngOnInit(): void {
    this.schedulesService.getLeagueTable(3).subscribe(
      (response: any) => {
        this.leagueTable = response.data.table.map((team: any) => {
          switch (team.name) {
            case 'Almería':
              team.logo = 'https://tse2.mm.bing.net/th?id=OIP.2GtC3pZPEEKmQh2lIuUT6gHaKC&pid=Api&P=0&h=180';
              break;
            case 'Athletic Club':
              team.logo = 'https://content.sportslogos.net/logos/130/4021/full/894_-athletic_bilbao-primary-.gif';
              break;
            case 'Atlético de Madrid':
              team.logo = 'https://content.sportslogos.net/logos/130/4020/full/1444__atletico_madrid-primary-2017.png';
              break;
            case 'Barcelona':
              team.logo = 'https://logoeps.com/wp-content/uploads/2011/05/barcelona-logo-vector.png';
              break;
            case 'Cádiz CF':
              team.logo = 'https://assets.laliga.com/assets/public/clubs/logos/cadiz-cf.png';
              break;
            case 'Celta Vigo':
              team.logo = 'https://content.sportslogos.net/logos/130/4022/full/748_-celta_vigo-primary-.gif';
              break;
            case 'Elche CF':
              team.logo = 'https://assets.laliga.com/assets/public/clubs/logos/elche-cf.png';
              break;
            case 'Getafe CF':
              team.logo = 'https://content.sportslogos.net/logos/130/4025/full/123_-getafe-primary-.gif';
              break;
            case 'Girona FC':
              team.logo = 'https://assets.laliga.com/assets/public/clubs/logos/girona-fc.png';
              break;
            case 'Las Palmas':
              team.logo = 'https://assets.laliga.com/assets/public/clubs/logos/las-palmas.png';
              break;
            case 'Mallorca':
              team.logo = 'https://content.sportslogos.net/logos/130/4030/full/665_-real_mallorca-primary-.gif';
              break;
            case 'Osasuna':
              team.logo = 'https://assets.laliga.com/assets/public/clubs/logos/osasuna.png';
              break;
              case 'Real Valladollid':
              team.logo = 'https://content.sportslogos.net/logos/130/4032/full/279_-real_valladollid-primary-.gif';
              break;
            case 'Rayo Vallecano':
              team.logo = 'https://content.sportslogos.net/logos/130/4029/full/361_-rayo_vallecano-primary-.gif';
              break;
            case 'Real Betis':
              team.logo = 'https://assets.laliga.com/assets/public/clubs/logos/real-betis.png';
              break;
            case 'Real Madrid':
              team.logo = 'https://content.sportslogos.net/logos/130/4017/full/643_-real_madrid-primary-.gif';
              break;
            case 'Real Sociedad':
              team.logo = 'https://content.sportslogos.net/logos/130/4031/full/417_-real_sociedad-primary-.gif';
              break;
            case 'Sevilla FC':
              team.logo = 'https://assets.laliga.com/assets/public/clubs/logos/sevilla-fc.png';
              break;
            case 'Valencia CF':
              team.logo = 'https://assets.laliga.com/assets/public/clubs/logos/valencia-cf.png';
              break;
            case 'Villarreal CF':
              team.logo = 'https://content.sportslogos.net/logos/130/4037/full/679_-villarreal-primary-.gif';
              break;
            default:
              team.logo = ''; // default logo or no logo
          }
          return team;
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }

 
}