import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Solicitud } from '../../models/solicitud.model';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class SolicitudService {

  private solicitudUrl = 'http://localhost:3000/solicitud';
  constructor(private http: HttpClient) {

  }
  public postSolicitud (peticion) {
    return this.http.post(this.solicitudUrl, peticion, httpOptions);
  }

}
