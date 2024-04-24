import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  
  constructor(private authService: AuthService,
    private router: Router
  ) {}

  isAdminLoggedIn(): boolean {
    return this.authService.isAdminLoggedIn();
  }

  showAdminLoginForm(): void {
    console.log('Admin Login clicked');
    this.router.navigateByUrl('/admin/login'); 
  }

  showAdminDashboard(): void {
  
    console.log('Admin Dashboard clicked');
  }
}
