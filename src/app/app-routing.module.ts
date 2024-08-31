import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { LivescoresComponent } from './livescores/livescores.component';
import { LiveMatchesComponent } from './livematches/livematches.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { PlayersComponent } from './players/players.component';
import { HomeComponent } from './home/home.component';
import { LaligaComponent } from './laliga/laliga.component';

const routes: Routes = [
  {path:'Bundesliga', component:NewsComponent},
  {path:'laliga', component:LaligaComponent},
  {path:'livescores', component:LivescoresComponent},
  {path:'livematches', component:LiveMatchesComponent},
  {path:'standing', component:SchedulesComponent},
  {path:'UEFA', component:PlayersComponent},
  {path:'home', component:HomeComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
