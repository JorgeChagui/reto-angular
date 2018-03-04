import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuariosService } from '../../services/usuarios/usuarios.service';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {
  usuario: Usuario;
  public errors: string[];
  constructor(private usuariosService: UsuariosService) {
    this.usuario = new Usuario();
  }

  ngOnInit() {
  }

  onSubmit() {
    this.usuariosService.postUsuarios(this.usuario).subscribe(
      data => {
        console.log(data);
        localStorage.setItem('identidad', JSON.stringify(data));
      },
      error => {
        this.errors = error.error.message;
        console.log(this.errors);
      });
  }

}
