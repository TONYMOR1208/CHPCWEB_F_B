import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:3000/auth';

  constructor(private http: HttpClient) {}

  // Método para registrar un nuevo usuario
  register(data: { nombre: string; correo: string; contrasena: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, data);
  }

  // Método para iniciar sesión
  login(data: { correo: string; contrasena: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, data);
  }

  // Método para solicitar recuperación de contraseña
  resetPassword(correo: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/reset-password`, { correo });
  }
}
