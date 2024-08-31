import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { LivescoresComponent } from './livescores/livescores.component';
import { LiveMatchesComponent } from './livematches/livematches.component';
import { PlayersComponent } from './players/players.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LivescoreService } from './livescores.service';
import { SchedulesService } from './schedules.service';
import { PlayersService } from './players.service';
import { LaligaComponent } from './laliga/laliga.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    LivescoresComponent,
    LiveMatchesComponent,
    PlayersComponent,
    SchedulesComponent,
    HomeComponent,
    LaligaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [LivescoreService, SchedulesService, PlayersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
