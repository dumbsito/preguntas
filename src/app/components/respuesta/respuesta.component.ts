import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PreguntaService } from 'src/app/services/pregunta.service';
import { Pregunta } from 'src/app/shared/Pregunta';
import { Respuesta } from 'src/app/shared/Respuesta';

@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.component.html',
  styleUrls: ['./respuesta.component.css']
})
export class RespuestaComponent implements OnInit{
listPreguntas:Pregunta[];
respuestasUsuario:any[]
constructor(public servi:PreguntaService,private router:Router){

}
  ngOnInit(): void {
this.listPreguntas=this.servi.preguntas;
this.respuestasUsuario=this.servi.respuetasUsuario
  }

  volver(){
    this.servi.respuetasUsuario=[]
this.router.navigate(["/"])
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
