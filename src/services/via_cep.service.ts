import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Endereco } from './Usuario';


@Injectable({
    providedIn: 'root'
  })

  
  export class ViaCepService {
    private apiUrl = 'https://viacep.com.br/ws/';

    //40340580/json/
    constructor (private http: HttpClient) { }

    getCEP(cep:string): Observable<Endereco>{
        const url = `${this.apiUrl}${cep}/json/`;
        return this.http.get<Endereco>(url);
    }
  }