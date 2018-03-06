import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuariosService } from '../../services/usuarios/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {
  usuario: Usuario;
  mayor18: boolean;
  public errors: string[];
  constructor(private usuariosService: UsuariosService, private route: Router) {
    this.usuario = new Usuario();
  }

  ngOnInit() {
  }

  onSubmit() {
    this.usuariosService.postUsuarios(this.usuario).subscribe(
      data => {
        console.log(data);
        localStorage.setItem('identidad', JSON.stringify(data));
        this.route.navigate(['/solicitud-credito']);
      },
      error => {
        this.errors = error.error.message;
        console.log(this.errors);
      });
  }

  onChangeFecha():  void  {
    let  fechaNacimiento:  Date  =  new  Date(this.usuario.fechaNacimiento);
    this.mayor18  =  (new  Date(((new  Date().getFullYear()  -  18)  +  "/"  +  (new  Date().getMonth()  +  1)  +  "/"  +  new  Date().getDate()))  >  fechaNacimiento)

    if  (!this.mayor18) {
      this.usuario.fechaNacimiento  =  null;
    }
  }
}