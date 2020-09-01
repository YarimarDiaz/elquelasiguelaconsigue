import { Component, OnInit } from '@angular/core';
import { TriviaDataService } from '../../services/trivia-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css']
})
export class TriviaComponent implements OnInit {

  get trivia(): any {
    return this.triviaDataService.trivia;
  } 

  get lives(): number {
    return this.triviaDataService.lives;
  }

  constructor(private triviaDataService: TriviaDataService, 
              private router: Router) {}

  answer(option) {
    console.log(option);
    this.triviaDataService.answer(option);
    this.router.navigateByUrl('/trivia-answer');
  }

  ngOnInit(): void {
  }

}
