import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-admin',
  templateUrl: './layout-admin.component.html',
  styleUrl: './layout-admin.component.scss',
  standalone: false,
})
export class LayoutAdminComponent {
  menuItems = [
    {
      label: 'Profile',
      icon: 'pi pi-user',
    },
    {
      label: 'Logout',
      icon: 'pi pi-sign-out',
    },
  ];

  toggleMenu() {
    // Implement menu toggle logic here
  }

  isSidebarOpen = true;

  constructor(private router: Router) {}

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  logout(): void {
    // this.authService.logout();
    this.router.navigate(['/admin/login']);
  }

  currentUser(): any {
    // return this.authService.getCurrentUser();
  }
}
