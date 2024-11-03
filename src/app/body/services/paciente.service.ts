import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from '../models/patient-Interfaz';
import { environment } from 'environments/env-desarollo';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private api = `${environment.apiUrl}api/ListaPacienteControllers`;

  constructor(
    private _httpClient: HttpClient
  ) {}

  getPacientes(): Observable<Paciente[]>{
    return this._httpClient.get<Paciente[]>(this.api)
  }
}
