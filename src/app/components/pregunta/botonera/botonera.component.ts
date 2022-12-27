import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PreguntaService } from 'src/app/services/pregunta.service';

@Component({
  selector: 'app-botonera',
  templateUrl: './botonera.component.html',
  styleUrls: ['./botonera.component.css']
})
export class BotoneraComponent {
  btnString="Aceptar"
constructor(public servi:PreguntaService,private router:Router){

}
next(){
  switch(this.btnString){
    case "Aceptar":{
      this.servi.isCorrect=true;
      this.btnString="Siguiente";

       if(this.servi.preguntas.length-1===this.servi.index){
        this.btnString="Finalizar";
       }

      break;
    }
    case "Siguiente":{
     this.servi.index++;
     this.servi.respuetasUsuario.push(this.servi.indexRespuesta)
     this.servi.disabledBtn=true;
     this.servi.isCorrect=false;
     this.btnString="Aceptar"
     break;
    }

    case "Finalizar":{
      this.servi.respuetasUsuario.push(this.servi.indexRespuesta)
      this.servi.seleccionada=null;
      this.servi.isCorrect=false;
      this.servi.index=0
    this.router.navigate(["/respuesta"])
    }
  }
}
}
