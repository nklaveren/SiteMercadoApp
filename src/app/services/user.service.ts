import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token: string;

  constructor() { }

  saveToken(token: string) {
    localStorage.clear()
    localStorage.setItem('token', JSON.stringify(token))
  }
  loadToken() {
    var tokenString = localStorage.getItem('token');
    if (tokenString) {
      this.token = tokenString;
    }
    return this.token;
  }

  static logout() {
    localStorage.removeItem('token');
  }

  limparDados() {
    localStorage.clear();
  }
  isAuthenticated() {
    return !!this.loadToken();
  }
}
