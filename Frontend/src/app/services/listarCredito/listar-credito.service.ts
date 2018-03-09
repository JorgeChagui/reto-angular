
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Solicitud } from '../../models/solicitud.model';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, tap } from 'rxjs/operators';
import { Credito } from '../../models/credito.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ListarCreditoService {
  private userUrl = 'http://localhost:3000/credito';

  constructor(private http: HttpClient) {
  }

  public getSolicitudes (idUser: string) {
    return this.http.get<Solicitud[]>(this.userUrl+'/'+idUser, httpOptions);
  }
  public getCreditos (idCredito: string) {
    return this.http.get<Credito>(this.userUrl, httpOptions);
  }

}
