import { Component, OnInit } from '@angular/core';
import { TriviaDataService } from '../../services/trivia-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trivia-answer',
  templateUrl: './trivia-answer.component.html',
  styleUrls: ['./trivia-answer.component.css']
})
export class TriviaAnswerComponent implements OnInit {

  get trivia(): any {
    return this.triviaDataService.trivia;
  }

  constructor(private triviaDataService: TriviaDataService,
              private router: Router) { }

  get isCurrentAnswerCorrect(): boolean {
    console.log(this.triviaDataService.isCurrentAnswerCorrect);
    return this.triviaDataService.isCurrentAnswerCorrect;
  }
  
  get lives(): number {
    return this.triviaDataService.lives;
  }
  
  answer(option) {
    this.triviaDataService.answer(option);
  }

  next() {
    this.triviaDataService.next();

    if (this.triviaDataService.gameHasFinishedWithError) {
      this.router.navigateByUrl('/game-over');
      return;
    }

    if (this.triviaDataService.gamehasFinishedSuccessfully) {
      this.router.navigateByUrl('/results');
      return;
    }


    this.router.navigateByUrl('/trivia');
  }

  ngOnInit(): void {
  }

}
