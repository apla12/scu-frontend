import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  apiURL: string = environment.apiURLBase + '/api/usuarios';

  constructor( private http: HttpClient ) {}

  salvar( usuario: Usuario ) : Observable<Usuario> {
    return this.http.post<Usuario>( `${this.apiURL}` , usuario);
  }

  getUsuarios() : Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiURL);
  }
  
}
