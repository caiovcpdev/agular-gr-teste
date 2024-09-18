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

export class UsuarioService {
  private apiUrl = 'https://localhost:7288/Usuario';
  constructor(private http: HttpClient) { }

  // Exemplo de método que retorna dados de uma API
  getClientes(): Observable<Cliente> {
    return this.http.get<Cliente>('https://localhost:7237/' + 'Clientes');

  }
  getUsuarioById(id: string): Observable<Usuario> {
    return this.http.get<Usuario>(this.apiUrl + `/listar/${id}`);
  }

  createCliente(cliente : Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.apiUrl + '/cliente', cliente);
  }

  getLogin(login : UsuarioLogin): Observable<boolean> {
    return this.http.post<boolean>(this.apiUrl + '/login', login);
  }

  getEquipamentos(): Observable<Equipamento> {
    return this.http.get<Equipamento>(this.apiUrl + 'equipamento');
  }

  createEquipamento(equipamento : Equipamento): Observable<Equipamento> {
    return this.http.post<Equipamento>(this.apiUrl + '/equipamento', equipamento);
  }

  getLotes(): Observable<Lote> {
    return this.http.get<Lote>(this.apiUrl + 'lote');
  }

  createLote(lote : Lote): Observable<Lote> {
    return this.http.post<Lote>(this.apiUrl + '/equipamento', lote);
  }

}
