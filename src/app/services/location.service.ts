import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILocation } from '../interfaces/ILocation';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  endpoint = 'classes/Onibus/ultima';
  api = environment.api;
  constructor(
    private http: HttpClient
  ) { }


  listLocations(): Observable<ILocation[]> {
    return this.http.get<ILocation[]>(`${this.api}/${this.endpoint}`);
  }
}
