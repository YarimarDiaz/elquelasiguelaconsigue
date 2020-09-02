import { Component, OnInit } from '@angular/core';
import { TriviaDataService } from './../../services/trivia-data.service';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.css']
})
export class GameOverComponent implements OnInit {

  get userName(): string {
    return this.triviaDataService.userName;
  }

  constructor(private triviaDataService: TriviaDataService) { }

  ngOnInit(): void {
  }

}
