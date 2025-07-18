import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  serviceCount = 0;
  productCount = 0;
  projectCount = 0;
  featuredProjects = 0;

  constructor() // private serviceService: ServiceService,
  // private productService: ProductService,
  // private projectService: ProjectService
  {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  loadDashboardData(): void {
    // this.serviceService.getServices().subscribe((services) => {
    //   this.serviceCount = services.length;
    // });
    // this.productService.getProducts().subscribe((products) => {
    //   this.productCount = products.length;
    // });
    // this.projectService.getProjects().subscribe((projects) => {
    //   this.projectCount = projects.length;
    //   this.featuredProjects = projects.filter((p) => p.featured).length;
    // });
  }
}
