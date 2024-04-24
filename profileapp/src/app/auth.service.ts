import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn: boolean = false;
  constructor() { }

  login(email: string, password: string): boolean {

    if (email === 'admin@gmail.com' && password === 'pass1234') {
      this.isLoggedIn = true;
      return true;
    } else {
      this.isLoggedIn = false;
      return false;
    }
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  isAdminLoggedIn(): boolean {
    return this.isLoggedIn;
  }
}
