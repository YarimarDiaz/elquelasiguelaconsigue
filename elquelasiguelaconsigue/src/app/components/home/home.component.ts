import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { TriviaDataService } from '../../services/trivia-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient, private triviaDataService: TriviaDataService) { }

  start(userName) {
    console.log('imprime nombre:' + userName);
    
    const data = '../../assets/data/trivia.json'
    
    this.http.get(data).subscribe(result => {
      this.triviaDataService.userName = userName;
      this.triviaDataService.updateTrivias = result['trivias'];
      this.router.navigateByUrl('/trivia');
    })
  }

  ngOnInit(): void {
    
  }

}
