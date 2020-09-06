import { Component, OnInit } from '@angular/core';
import { TriviaDataService } from '../../services/trivia-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trivia-answer',
  templateUrl: './trivia-answer.component.html',
  styleUrls: ['./trivia-answer.component.css']
})
export class TriviaAnswerComponent implements OnInit {

  // Método get trivia de tipo any
  get trivia(): any {
    return this.triviaDataService.trivia;
  } // Retorna del triviaDataService el getter trivia(getter creado en el servicio)

  constructor(private triviaDataService: TriviaDataService, // Propiedad triviaDataService guarda clase importada dle servicio TriviaDataService
              private router: Router) { } // Propiedad privada router que guarda clase importada Router

  // Método get isCurrentAnswerCorrect del triviaDataService, tipo boolean            
  get isCurrentAnswerCorrect(): boolean { // Lo usamos con el ngIf del template
    return this.triviaDataService.isCurrentAnswerCorrect;
  } // Retorna getter isCurrentAnswerCorrect del triviaDataService
  
  // Método get lives de tipo number
  get lives(): number {
    return this.triviaDataService.lives;
  } // Retorna del servicio el getter lives
  
  // Función answer que recibe como parámetro option (true/false)
  // Y que se ejecuta en botones verdadero/falso 
  answer(option) {
    this.triviaDataService.answer(option);
  }

  // Función next(), la flecha en el template que me permite pasar a la siguiente pregunta
  next() { // Siempre referenciando al service
    this.triviaDataService.next(); // Se ejecuta el getter next proveniente del servicio

    if (this.triviaDataService.gameHasFinishedWithError) { // Si el juegoHaTerminadoConError
      this.router.navigateByUrl('/game-over');  // Nos lleva a vista game-over
      return; // Si no se coloca este return, pasa a la pregunta siguiente 
    }

    if (this.triviaDataService.gamehasFinishedSuccessfully) { // Si elJuegoHaTerminadoExitosamente 
      this.router.navigateByUrl('/result'); // Nos lleva a ruta de vista de resultados
      return; // Si no se coloca, vuelve a ruta trivia, pero ya no aparecen más preguntas, sólo aumenta el step
    }


    this.router.navigateByUrl('/trivia'); // Nos permite volver a la pregunta siguiente en la vista trivia
  }

  ngOnInit(): void {
  }

}
