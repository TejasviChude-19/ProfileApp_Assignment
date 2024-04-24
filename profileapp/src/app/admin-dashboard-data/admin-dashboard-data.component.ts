import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { ProfileService } from '../profile.service';
import { Profile } from '../models/Profile.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard-data',
  templateUrl: './admin-dashboard-data.component.html',
  styleUrl: './admin-dashboard-data.component.css'
})
export class AdminDashboardDataComponent {

  profiles: Profile[] = [];
  noProfiles: any;

  constructor(private authService: AuthService,
    private profileService: ProfileService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadProfiles();
  }

  isAdminLoggedIn(): boolean {
    return this.authService.isAdminLoggedIn();
  }

  logout() {
    this.router.navigateByUrl('admin/login');
    this.authService.logout();
    }

    loadProfiles(): void {
      this.profiles = this.profileService.getProfiles();
    }

    deleteProfile(id: number): void {
    if (confirm('Are you sure you want to delete this profile?')) {
      this.profileService.deleteProfile(id);
    }
  }
  updateProfile(updatedProfile: Profile): void {
    this.profileService.updateProfile(updatedProfile);
    this.profileService.getProfiles(); 
  }
}
