import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './Usuario';
import { UsuarioLogin } from './Login';
import { Cliente } from './Cliente';
import { Equipamento } from './Equipamento';
import { Lote } from './Lote';



@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private apiUrl = 'https://localhost:7237/';
  constructor(private http: HttpClient) { }
  
  getLogin(login : UsuarioLogin): Observable<boolean> {
    return this.http.post<boolean>(this.apiUrl + 'login', login);
  }

  //Clientes
  getClientes(): Observable<Cliente> {
    return this.http.get<Cliente>(this.apiUrl + 'clientes');
  }
  createCliente(cliente : Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.apiUrl + 'clientes', cliente);
  }
  updateCliente(cliente : Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.apiUrl}clientes/${cliente.id}`, cliente);
  }
  deleteCliente(cliente : Cliente): Observable<Cliente> {
    return this.http.delete<Cliente>(`${this.apiUrl}clientes/${cliente.id}`); 
  }


  //Equipamentos
  getEquipamentos(): Observable<Equipamento> {
    return this.http.get<Equipamento>(this.apiUrl + 'equipamentos');
  }

  createEquipamento(equipamento : Equipamento): Observable<Equipamento> {
    return this.http.post<Equipamento>(this.apiUrl + 'equipamentos', equipamento);
  }


  //Lotes
  getLotes(): Observable<Lote> {
    return this.http.get<Lote>(this.apiUrl + 'lotes');
  }

  createLote(lote : Lote): Observable<Lote> {
    return this.http.post<Lote>(this.apiUrl + 'lotes', lote);
  }

}
