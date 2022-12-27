import { Component, OnInit } from '@angular/core';
import { PreguntaService } from 'src/app/services/pregunta.service';
import { Pregunta } from 'src/app/shared/Pregunta';
import { Respuesta } from 'src/app/shared/Respuesta';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit{
listPregunta:Pregunta[];
  constructor(public servi:PreguntaService){

  }  
  ngOnInit(): void {
    this.listPregunta=this.servi.getPreguntas()
  }

  getPregunta(){
    return this.listPregunta[this.servi.index].descripcion
  }

  mo(){
    console.log(this.listPregunta);
    
  }

  respSeleccionada(resp:Respuesta,index:number){
    if(this.servi.isCorrect===true){
      return;
    }
    this.servi.seleccionada=resp;
    this.servi.disabledBtn=false
    this.servi.indexRespuesta=index;
  }

  addClass(resp:Respuesta){
    if(resp===this.servi.seleccionada && !this.servi.isCorrect){
      return "active text-light"
    }
   
 
  if(resp===this.servi.seleccionada && this.servi.isCorrect && this.servi.seleccionada.esCorrecta===1){
 return "list-group-item-success"

  }
  if(resp===this.servi.seleccionada && this.servi.isCorrect && this.servi.seleccionada.esCorrecta===0){
    return "list-group-item-danger"
   
     }

  else {return ""

}
}

iconCorrecta(resp:Respuesta){
  if(resp===this.servi.seleccionada && this.servi.isCorrect && this.servi.seleccionada.esCorrecta===1){
    return true;
     }else{
      return false;
     }
}

iconIncorrecta(resp:Respuesta){
  if(resp===this.servi.seleccionada && this.servi.isCorrect && this.servi.seleccionada.esCorrecta===0){
    return true;
     }else{
      return false;
     }
}
}
