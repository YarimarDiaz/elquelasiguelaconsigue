import { Component, OnInit } from '@angular/core';
import { TriviaDataService } from '../../services/trivia-data.service';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css']
})
export class TriviaComponent implements OnInit {

  triviaDataCall: any[] = [];

  constructor(private triviaDataService: TriviaDataService) {
    this.triviaDataService.triviaData().subscribe(result => {
      console.log(result);
      this.triviaDataCall = result['trivias']
    })
   }

  ngOnInit(): void {
  }

}
