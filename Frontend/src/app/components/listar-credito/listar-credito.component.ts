import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Solicitud } from '../../models/solicitud.model';
import { ListarCreditoService } from '../../services/listarCredito/listar-credito.service';
import { validateConfig } from '@angular/router/src/config';
import { Usuario } from '../../models/usuario.model';
import { Credito } from '../../models/credito.model';

import { Pipe, PipeTransform } from '@angular/core';

    @Pipe({
        name: 'thousandsPipe'
    })

export class ThousandsPipe implements PipeTransform {

    public transform(value: any) {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");;
    }
}






@Component({

  selector: 'app-listar-credito',
  templateUrl: './listar-credito.component.html',
  styleUrls: ['./listar-credito.component.css']
  
})
export class ListarCreditoComponent implements OnInit {
 
  
  public errors: string[];
  public mask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/];
  public solicitudes: Solicitud[];
  public creditos:Credito;
  public usuario: Usuario;
  public hola: string;
  constructor(private listarCreditoService: ListarCreditoService, private ruta: Router) {
    
 }

  ngOnInit() {
    if (localStorage.getItem('identidad')) {
      console.log('Registrado');
     this.usuario= JSON.parse(localStorage.getItem('identidad'));
      this.listarCreditoService.getSolicitudes(this.usuario.id+'').subscribe(
        data => {
          console.log(data);
          
          this.solicitudes=data
        },
        error => {
          this.errors = error.error.message;
          console.log(this.errors);
        });




        this.listarCreditoService.getCreditos(this.hola).subscribe(
          data => {
            console.log(data);
            this.creditos=data
          },
          error => {
            this.errors = error.error.message;
            console.log(this.errors);
          });
      
    } 
  
  
  }

  
/**
* Función para poner puntos
* ejemplo @param valor recibe 1000000 retorna 10,000.00
*/
ponerPuntos(valor: string): string {
valor += ""; //convierte en string todo dato que entre
let con = 0;
let numFinal: string = "";
let ban: boolean = false;
if (valor.length <= 2) {
return valor;
} else {
//voltea el string 
valor = valor.split("").reverse().join("");
//recorro el string 
for (let num of valor) {
if (ban) {
if (con == 4) {
if (num == ",") {
con -= 1;
} else {
numFinal += ",";
con = 1;
}
}
} else {
if (con == 2) {
if (num == ".") {
con -= 1;
} else {
numFinal += ".";
con = 1;
ban = true;
}
}
}
con += 1;
numFinal += num;
}
}
numFinal = numFinal.split("").reverse().join("");
return numFinal;
} 
 

  
  


}
