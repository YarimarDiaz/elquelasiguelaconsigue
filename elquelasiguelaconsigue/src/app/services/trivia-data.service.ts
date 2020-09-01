import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class TriviaDataService {
  private maximum_incorrect_answers: number = 5

  private trivias: any[]
  private incorrectTrivias: any[] = []
  private name: string

  private step: number = 0;

  get trivia(): any {
    return this.trivias[this.step];
  }

  get userName(): string {
    return this.name;
  }

  set updateTrivias(newTrivias: any[]) {
    this.trivias = newTrivias
  }

  set userName(userName: string) {
    this.name = userName;
  }

  get gameHasFinished(): boolean {
    return this.incorrectTrivias.length == this.maximum_incorrect_answers;
  }

  get isCurrentAnswerCorrect(): boolean {
    return !this.incorrectTrivias.includes(this.trivia);
  }

  constructor(private http: HttpClient) { }

  answer(option) {
    if (this.trivia.answer != option) {
      this.incorrectTrivias.push(this.trivia);
    }
  }

}
