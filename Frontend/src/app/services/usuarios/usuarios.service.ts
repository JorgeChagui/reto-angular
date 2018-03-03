import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Usuario } from '../../models/usuario.model';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UsuariosService {
  private userUrl = 'http://localhost:3000/usuarios';
  constructor(private http: HttpClient) {

  }
  public postUsuarios (usuario: Usuario) {
    return this.http.post<Usuario>(this.userUrl, usuario, httpOptions);
  }
}