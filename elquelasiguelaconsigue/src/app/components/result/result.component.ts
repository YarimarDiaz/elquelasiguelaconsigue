import { Component, OnInit } from '@angular/core';
import { TriviaDataService } from '../../services/trivia-data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  
  // Nos permite interpolar en template el nombre del usuario
  get userName(): string {
    return this.triviaDataService.userName;
  }

  // Nos permite ver el número de preguntas correctas de las totales n/10
  get correctCount(): string {
    return this.triviaDataService.correctCount + "/" + this.triviaDataService.totalTrivias;
  }

  constructor(private triviaDataService: TriviaDataService) { }

  ngOnInit(): void {
  }

}
