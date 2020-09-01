import { Component, OnInit } from '@angular/core';
import { TriviaDataService } from '../../services/trivia-data.service';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css']
})
export class TriviaComponent implements OnInit {

  get trivia(): any {
    return this.triviaDataService.trivia;
  } 

  constructor(private triviaDataService: TriviaDataService) {}

  answer(option) {
    this.triviaDataService.answer(option);
    
  }

  ngOnInit(): void {
  }

}
