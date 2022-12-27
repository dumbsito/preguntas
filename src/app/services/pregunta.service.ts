import { Injectable } from '@angular/core';
import { Pregunta } from '../shared/Pregunta';
import { Respuesta } from '../shared/Respuesta';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {

index=0;
seleccionada:Respuesta
disabledBtn=true;
isCorrect=false;
indexRespuesta=null;
respuetasUsuario:number[]=[]


  preguntas: Pregunta[] = [
    new Pregunta('Cual es la capital de Argentina', [
      new Respuesta('Buenos Aires', 1),
      new Respuesta('Montevideo', 0),
      new Respuesta('Santiago', 0),
      new Respuesta('Lima', 0),
    ]),
    new Pregunta('Cual es la capital de Francia', [
      new Respuesta('Roma', 0),
      new Respuesta('Paris', 1),
      new Respuesta('Dublin', 0),
      new Respuesta('Atenas', 0),
    ]),
    new Pregunta('Cual es la capital de Egipto', [
      new Respuesta('Londres', 0),
      new Respuesta('Berlin', 0),
      new Respuesta('El Cairo', 1),
      new Respuesta('Casablanca', 0),
    ]),
  ];

  constructor() { }

  getPreguntas(){
    return this.preguntas.slice()
  }
}
