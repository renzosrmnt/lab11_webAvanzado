import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private credentials = [
    { username: 'renzo', password: 'tecsup' },
    { username: 'reyner', password: 'tecsup' },
  ];

  login(username: string, password: string): Observable<any> {
    console.log('Credenciales ingresadas:', { username, password }); // Imprimir las credenciales ingresadas en la consola
    const user = this.credentials.find(cred => cred.username === username && cred.password === password);
    if (user) {
      return of({ success: true, message: 'Login successful' });
    } else {
      return throwError({ success: false, message: 'Invalid credentials' });
    }
  }
}
