import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService,
    private router: Router
  ) { }

  login(): void {
    if (this.authService.login(this.email, this.password)) {
      this.router.navigateByUrl('admin/dashboard/data');
    } else {
      alert('Invalid email or password.');
      this.errorMessage = 'Invalid email or password.';
    }
  }
}
