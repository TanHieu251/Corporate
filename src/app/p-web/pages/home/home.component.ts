import { Component, OnInit } from '@angular/core';
import { MockDataService } from '../../shared/services/mock-data.service';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  heroSection: any = {};
  services: any[] = [];
  projects: any[] = [];
  featuredProducts: any[] = [];
  testimonials: any[] = [];
  whyChooseUs: any = {};

  constructor(private mockDataService: MockDataService) {}

  ngOnInit() {
    this.heroSection = this.mockDataService.heroSection;
    this.services = this.mockDataService.services;
    this.projects = this.mockDataService.projects;
    this.featuredProducts = this.mockDataService.getFeaturedProducts();
    this.testimonials = this.mockDataService.testimonials;
    this.whyChooseUs = this.mockDataService.whyChooseUs;
  }
}
