import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './Usuario';
import { UsuarioLogin } from './Login';



@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
  private apiUrl = 'https://localhost:7288/Usuario';
  constructor(private http: HttpClient) { }

  // Exemplo de método que retorna dados de uma API
  getUsuarios(): Observable<Usuario> {
    return this.http.get<Usuario>(this.apiUrl + '/listar');

  }
  getUsuarioById(id: string): Observable<Usuario> {
    return this.http.get<Usuario>(this.apiUrl + `/listar/${id}`);
  }

  createUsuario(usuario : Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl + '/registrar', usuario);
  }

  getLogin(login : UsuarioLogin): Observable<boolean> {
    return this.http.post<boolean>(this.apiUrl + '/login', login);
  }
}
