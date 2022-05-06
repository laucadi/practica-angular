import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {
titulo="Mi calculadora"
num1!:number;
num2!:number;
resultado!:number;

mensaje_ok:any;
mensaje_error: any;

  constructor() { }

  ngOnInit(): void {
  }
sumar(){
(this.num1===null ? (this.mensaje_ok = "espera te falta el numero 1" ? this.mensaje_error = "espera, te falta el numero 2 ": this.resultado = this.num1+this.num2):)
}



//if(this.num1==null){
  //this.mensaje_ok="espera, te falta el numero 1"

//}if(this.num2==null){
  //this.mensaje_error="espera, te falta el numero 2"
//}
//else{
  //this.resultado = this.num1+this.num2
  //this.mensaje_ok="la operacion de la suma fue correcta"
//}

//}

//}


