import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class appService{
    constructor(
        public http: HttpClient
    ){}
    getUsuario(): Observable<any>{
        return this.http.get('http://localhost:3000/usuarios')
    }
}