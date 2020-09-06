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

  constructor(private router: Router,// Propiedad privada router que guarda clase importada Router 
              private http: HttpClient,// Propiedad privada http que guarda clase importada HttpClient
              private triviaDataService: TriviaDataService) { }
              // Propiedad triviaDataService guarda clase importada dle servicio TriviaDataService 
  
  // Función start de botón "Comenzar" que recibe UserName ingresado por usuario en esta vista            
  start(userName) {
    console.log('imprime nombre:' + userName);
    
    const data = '../../assets/data/trivia.json' // Guardamos en esta constante la data de la trivia.json
    
    this.http.get(data).subscribe(result => { // Método subscribe que nos retornará un observable de: 
      this.triviaDataService.reset(); // se ejecuta función reset para limpiar datos de juego anterior
      this.triviaDataService.userName = userName; // Se obtiene nombre usuario
      this.triviaDataService.updateTrivias = result['trivias']; // Se actualizan las preguntas según sus datos de trivia.json
      this.router.navigateByUrl('/trivia'); // Cambio de ruta a vista trivia
    })
  }

  ngOnInit(): void {
    
  }

}
