import { Component, OnInit } from '@angular/core';
import { Solicitud } from '../../models/solicitud.model';
import { Empresa } from '../../models/empresa.model';
import { SolicitudService } from '../../services/Solicitud/solicitud.service';
import { validateConfig } from '@angular/router/src/config';

@Component({
  selector: 'app-solicitud-credito',
  templateUrl: './solicitud-credito.component.html',
  styleUrls: ['./solicitud-credito.component.css']
})
export class SolicitudCreditoComponent implements OnInit {
  empresa: Empresa;
  solicitud: Solicitud;
  constructor(private solicitudService: SolicitudService) {
    this.empresa = new Empresa();
    this.solicitud = new Solicitud();
  }

  ngOnInit() {
  }
  onSubmit() {
    const json = {
      usuario: JSON.parse(localStorage.getItem('identidad')).id,
      empresa: {
        nit: this.empresa.nit,
        nombre: this.empresa.nombre
      },
      solicitud: {
        salario: this.solicitud.salario,
        fechaIngreso: this.solicitud.fechaDeIngreso

      }

    };
    this.solicitudService.postSolicitud(json).subscribe(data => {


      console.log(data);

    });

  }

}
