import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class TriviaDataService {

  constructor(private http: HttpClient) { }

  triviaData(){
    return this.http.get('../../assets/data/trivia.json')
  }

}
