import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  api = environment.api;

  constructor(
    private http: HttpClient
  ) { }

  public countBus() {
    return this.http.get(`${this.api}/onibus/countBus`);
  }
  public countSensor() {
    return this.http.get(`${this.api}/sensores/countSensor`);
  }

  public countLocation() {
    return this.http.get(`${this.api}/localizacoes/countLocation`);
  }

  public countAllLocation() {
    return this.http.get(`${this.api}/localizacoes/countAllLocation`);
  }

  obterDadosUltimos7Dias(): Observable<any> {
    return this.http.get<number[]>(`${this.api}/localizacoes/countAllLocation7Days`);
  }
}
