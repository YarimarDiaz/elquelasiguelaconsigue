import { Component, OnInit } from '@angular/core';
import { TriviaDataService } from '../../services/trivia-data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  
  get userName(): string {
    return this.triviaDataService.userName;
  }

  get correctCount(): string {
    return this.triviaDataService.correctCount + "/" + this.triviaDataService.totalTrivias;
  }

  constructor(private triviaDataService: TriviaDataService) { }

  ngOnInit(): void {
  }

}
