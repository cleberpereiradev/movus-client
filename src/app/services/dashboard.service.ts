import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  endpoint = 'dashboard';
  api = environment.api;

  constructor(
    private http: HttpClient
  ) { }

  
}
