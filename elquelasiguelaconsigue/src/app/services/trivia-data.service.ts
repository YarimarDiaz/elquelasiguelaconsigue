import { Injectable } from '@angular/core';

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
    if (this.incorrectTrivias.length == this.maximum_incorrect_answers) {
      return true;
    } 
    
    if (this.step > this.trivias.length) {
      return true;
    }

    return false;
  }

  get isCurrentAnswerCorrect(): boolean {
    return !this.incorrectTrivias.includes(this.trivia);
  }

  get lives(): number {
    return this.maximum_incorrect_answers - this.incorrectTrivias.length;
  }

  constructor() { }

  next() {
    this.step++;
  }

  answer(option) {
    if (this.trivia.answer != option) {
      this.incorrectTrivias.push(this.trivia);
    }
  }

  reset() {
    this.step = 0;
    this.incorrectTrivias = [];
  }

}
