import { Component, OnInit } from '@angular/core';
import { TriviaDataService } from '../../services/trivia-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css']
})
export class TriviaComponent implements OnInit {

  // Método get trivia de tipo any
  get trivia(): any {
    return this.triviaDataService.trivia;
  } // Retorna del triviaDataService el getter trivia(getter creado en el servicio)

  //  Método get lives de tipo número
  get lives(): number {
    return this.triviaDataService.lives;
  } // Retorna del triviaDataService el getter lives

  // Método get currentStepIndex de tipo string
  get currentStepIndex(): string {
    return this.triviaDataService.currentStepIndex + "/" + this.triviaDataService.totalTrivias;
  } // retorna del triviaDataService el getter currentStepIndex concatenando del servicio el getter totalTrivias
    // Nos muestra en qué pregunta de la trivia vamos

  constructor(private triviaDataService: TriviaDataService, // Propiedad triviaDataService guarda clase importada dle servicio TriviaDataService 
              private router: Router) {} // Propiedad privada router que guarda clase importada Router 

  // Función answer que recibe como parámetro option (true/false)
  // Y que se ejecuta en botones verdadero/falso           
  answer(option) {
    console.log(option);
    this.triviaDataService.answer(option); // Ejecuta función answer del servicio
    this.router.navigateByUrl('/trivia-answer'); // Cambia ruta a vista de respuesta de la trivia
  }

  ngOnInit(): void {
  }

}
