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
      label: 'Thông tin công ty',
      icon: 'pi pi-building',
      routerLink: ['/admin/company'],
    },
    {
      label: 'Danh mục dịch vụ',
      icon: 'pi pi-cog',
      routerLink: ['/admin/serviceCategory'],
    },
    {
      label: 'Dịch vụ',
      icon: 'pi pi-cog',
      routerLink: ['/admin/service'],
    },
    {
      label: 'Danh mục sản phẩm',
      icon: 'pi pi-cog',
      routerLink: ['/admin/categoryProduct'],
    },
    {
      label: 'Sản phẩm',
      icon: 'pi pi-box',
      routerLink: ['/admin/products'],
    },
{
      label: 'Danh mục dự án',
      icon: 'pi pi-cog',
      routerLink: ['/admin/categoryProject'],
    },
    {
      label: 'Dự án',
      icon: 'pi pi-trophy',
      routerLink: ['/admin/projects'],
    },
  ];
  toggleSidebar() {}

  onMenuChange(event:any){
    console.log('Menu changed:', event);
  }
}
