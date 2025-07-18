import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  items: MenuItem[] = [
    {
      label: 'Company',
      icon: 'pi pi-building',
      routerLink: ['/admin/dashboard'],
    },
    {
      label: 'Services Category',
      icon: 'pi pi-cog',
      routerLink: ['/admin/serviceCategory'],
    },
    {
      label: 'Services',
      icon: 'pi pi-cog',
      routerLink: ['/admin/dashboard'],
    },
    {
      label: 'Products',
      icon: 'pi pi-box',
      routerLink: ['/admin/dashboard'],
    },
    {
      label: 'Projects',
      icon: 'pi pi-trophy',
      routerLink: ['/admin/dashboard'],
    },
  ];
  toggleSidebar() {}
}
