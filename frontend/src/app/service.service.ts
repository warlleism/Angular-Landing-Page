import { usuario } from './usuarios.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  constructor(public http: HttpClient) { }

  create(user: usuario): Observable<usuario> {
    return this.http.post<usuario>("http://localhost:3001/usuarios", user)
  }
}




