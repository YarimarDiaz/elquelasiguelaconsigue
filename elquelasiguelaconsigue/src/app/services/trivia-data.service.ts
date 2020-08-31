import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class TriviaDataService {

  constructor(private http: HttpClient) { }

  data = '../../assets/data/trivia.json'

  triviaData(){
    return this.http.get(this.data)
  }

}
