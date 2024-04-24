import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminDashboardDataComponent } from './admin-dashboard-data/admin-dashboard-data.component';

const routes: Routes = [
  { path: '', redirectTo: '/profile', pathMatch: 'full' }, // Redirect to profile by default
  { path: 'profile', component: ProfileComponent },
  { path: 'admin/login', component: AdminLoginComponent },
  { path: 'admin/dashboard/data', component: AdminDashboardDataComponent },
  { path: '**', redirectTo: '/profile' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
