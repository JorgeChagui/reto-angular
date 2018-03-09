import { Component, OnInit } from '@angular/core';
import { Solicitud } from '../../models/solicitud.model';
import { Empresa } from '../../models/empresa.model';
import { SolicitudService } from '../../services/Solicitud/solicitud.service';
import { validateConfig } from '@angular/router/src/config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitud-credito',
  templateUrl: './solicitud-credito.component.html',
  styleUrls: ['./solicitud-credito.component.css']
})
export class SolicitudCreditoComponent implements OnInit {
  today:boolean;
  disable = false;
  disable2 = false;
  show = false;
  nitOption = '2';
  empresa: Empresa;
  solicitud: Solicitud;
  public errors: string[];
  public mask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/];
  public respuesta;
  // public disabled: boolean;
  constructor(private solicitudService: SolicitudService, private route: Router) {
    this.empresa = new Empresa();
    this.solicitud = new Solicitud();
  }

  ngOnInit() {
    if (localStorage.getItem('identidad')) {
      console.log('Registrado');
    } else {
      this.route.navigate(['/home']);
    }
  }
  onSubmit() {
    let nit = null;
    let salario = null;

    if (this.solicitud.salario) {
      salario = this.solicitud.salario.toString().replace('$', '').replace(',', '');
    }

    if (this.empresa.nit) {
      nit = this.empresa.nit.toString().replace('-', '').replace('.', '').replace('.', '');
    }
    const json = {
      usuario: JSON.parse(localStorage.getItem('identidad')).id,
      empresa: {
        nit: nit,
        nombre: this.empresa.nombre
      },
      solicitud: {
        salario: salario,
        fechaIngreso: this.solicitud.fechaIngreso

      }

    };
    console.log(json);
    this.solicitudService.postSolicitud(json).subscribe(
      data => {
        console.log(data);
        this.respuesta = data;
        if (this.respuesta.estado === true) {
          document.getElementById('openModalApproved').click();
        }
        if (this.respuesta.estado === false) {
          document.getElementById('openModalDisapproved').click();
        }
        // localStorage.clear();
        // this.route.navigate(['/solicitud-credito']);
      },
      error => {
        this.errors = error.error.message;
        console.log(this.errors);
      });

  }
  terminar() {
    document.getElementById('close').click();
    // localStorage.clear();
    // this.route.navigate(['/solicitud-credito']);
  }

  terminar2() {
    document.getElementById('close2').click();
    // localStorage.clear();
    // this.route.navigate(['/solicitud-credito']);
  }

  fechaToday():  void  {
    const  fechaNacimiento:  Date  =  new  Date(this.solicitud.fechaIngreso);
    // tslint:disable-next-line:max-line-length
    this.today  =  (new  Date(((new  Date().getFullYear())  +  '/'  +  (new  Date().getMonth() + 1)  +  '/'  +  new  Date().getDate()))  >  fechaNacimiento);

    if  (!this.today) {
      this.solicitud.fechaIngreso  =  null;
    }

  }
}
