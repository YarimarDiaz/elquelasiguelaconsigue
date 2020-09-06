import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

/* NOTA: los getters y setters son métodos que nos permiten acceder y utilizar propiedades, 
variables o funciones privadas o públicas, son ampliamente utilizados en la POO */
export class TriviaDataService {
  // Propiedad privada máxRespuestasIncorrectas = 5
  // Nuestras 5 vidas (corazones)
  private maximum_incorrect_answers: number = 5

  // Propiedad privada trivias arreglo de tipo any (cualquiera)
  private trivias: any[]

  // Propiedad privada triviasIncorrectas, de tipo array any y array vacío
  private incorrectTrivias: any[] = []

  // Propiedad privada nombre de tipo string
  private name: string

  /*Propiedad privada step (paso) de tipo número = 0
  Nos referimos aquí al número de pregunta en la que estamos en la trivia
  nos servirá más adelante para avanzar las preguntas que rescatamos del JSON */
  private step: number = 0;

  // Método get trivia de tipo any, obtiene la trivia actual que se ve en la vista
  get trivia(): any {
    return this.trivias[this.step]; // retorna propiedad trivias y en su array los step
  }

  // Método get nombre usuario tipo string, obtiene el nombre que el usuario ingresa en pantalla
  get userName(): string {
    return this.name; // retorna propiedad nombre
  }

  // Método set actualiza trivias y que cambia los datos
  set updateTrivias(newTrivias: any[]) { 
    this.trivias = newTrivias // en este caso, esta trivias es igual a newTrivias
  } // Nos ayudará a cambiar el estado de las trivias de una pregunta a otra

  // Método set userName que actualiza el nombre del usuario al empezar una nueva ronda de juego
  set userName(userName: string) {
    this.name = userName;
  }

  // Método get elJuegoHaTerminadoConError, tipo boolean. 
  get gameHasFinishedWithError(): boolean {
    if (this.incorrectTrivias.length == this.maximum_incorrect_answers) {
      return true; // Si el length de triviasIncorrectas = máxPreguntasIncorrectas
    } // retorna true,  
    
    return false; // Si no se cumple la condición retorna false
  }

  // Método get juegoHaTerminadoExitosamente
  get gamehasFinishedSuccessfully() { 
    if (this.step >= this.trivias.length) { // Si el step es >= al length de trivias
      return true; //retorna true
    }

    return false; // Sino, retorna false
  }

  // Método get esCorrectaPreguntaActual tipo boolean
  get isCurrentAnswerCorrect(): boolean {
    return !this.incorrectTrivias.includes(this.trivia);
  } // retorna solamente las trivias correctas según step

  // Método get vidas tipo number
  get lives(): number {
    return this.maximum_incorrect_answers - this.incorrectTrivias.length;
  } // Retorna máxRespuestasIncorrectas - length triviasIncorrectas

  // Método get triviasTotal de tipo number
  get totalTrivias(): number {
    return this.trivias.length; // Retorna el length de trivias
  }

  // Método get cuentaCorrecta de tipo number
  get correctCount(): number {
    return this.totalTrivias - this.incorrectTrivias.length;
  } // retorna totalTrivias - el length de las triviasIncorrectas

  // Método get indexDelPasoActual tipo número 
  get currentStepIndex(): number {
    return this.step + 1; // Retorna step + 1, entrega resultado de esta sumas
  } 

  constructor() { } // El constructor se deja vacío, ya que consumiremos la data del JSON
                    // de una forma distinta que en el burguer queen

  // Función siguiente() 
  next() {
    this.step++; // Se le suma 1 a step
  }

  // Función respuesta que recibe como parámetro una opción (true/false)
  answer(option) {
    if (this.trivia.answer != option) { // Si la respuesta.respuesta no es igual a la opción
      this.incorrectTrivias.push(this.trivia);
    } // las triviasIncorrectas son pusheadas trivia
  }

  // Función resetear()
  reset() {
    this.step = 0; // Vuelve el valor de step a 0
    this.incorrectTrivias = []; // Vuelve el array de triviasIncorrectas a 0
  }

}
