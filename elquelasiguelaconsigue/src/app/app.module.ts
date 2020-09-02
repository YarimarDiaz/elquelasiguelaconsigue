import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TriviaComponent } from './components/trivia/trivia.component';
import { TriviaAnswerComponent } from './components/trivia-answer/trivia-answer.component';
import { InfomemesComponent } from './components/infomemes/infomemes.component';
import { GameOverComponent } from './components/game-over/game-over.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { ResultComponent } from './components/result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    TriviaComponent,
    TriviaAnswerComponent,
    InfomemesComponent,
    GameOverComponent,
    RankingComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
