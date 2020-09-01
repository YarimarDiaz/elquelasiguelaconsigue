import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TriviaComponent } from './components/trivia/trivia.component';
import { TriviaAnswerComponent } from './components/trivia-answer/trivia-answer.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
