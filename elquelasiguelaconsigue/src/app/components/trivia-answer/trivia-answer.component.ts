import { Component, OnInit } from '@angular/core';
import { TriviaDataService } from '../../services/trivia-data.service';

@Component({
  selector: 'app-trivia-answer',
  templateUrl: './trivia-answer.component.html',
  styleUrls: ['./trivia-answer.component.css']
})
export class TriviaAnswerComponent implements OnInit {

  get trivia(): any {
    return this.triviaDataService.trivia;
  }

  constructor(private triviaDataService: TriviaDataService) { }

  get isCurrentAnswerCorrect(): boolean {
    console.log(this.triviaDataService.isCurrentAnswerCorrect);
    return this.triviaDataService.isCurrentAnswerCorrect;
  }

  answer(option) {
    this.triviaDataService.answer(option);
  }

  ngOnInit(): void {
  }

}
