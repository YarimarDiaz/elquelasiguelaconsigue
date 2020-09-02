import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TriviaComponent } from './components/trivia/trivia.component';
import { TriviaAnswerComponent } from './components/trivia-answer/trivia-answer.component';
import { InfomemesComponent } from './components/infomemes/infomemes.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { ResultsComponent } from './components/results/results.component';
import { GameOverComponent } from './components/game-over/game-over.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'trivia',
    component: TriviaComponent
  },
  {
    path: 'trivia-answer',
    component: TriviaAnswerComponent
  },
  {
    path: 'infomemes',
    component: InfomemesComponent
  },
  {
    path: 'ranking',
    component: RankingComponent
  },
  {
    path: 'results',
    component: ResultsComponent
  },
  {
    path: 'game-over',
    component: GameOverComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
