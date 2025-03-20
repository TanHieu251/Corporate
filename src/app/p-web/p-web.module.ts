import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PWebRoutingModule } from './p-web-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CompanyComponent } from './pages/company/company.component';
import { ServicesComponent } from './pages/services/services.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductItemComponent } from './shared/components/product-item/product-item.component';
import { ProjectItemComponent } from './shared/components/project-item/project-item.component';


@NgModule({
  declarations: [
    HomeComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    CompanyComponent,
    ServicesComponent,
    ProductsComponent,
    ProjectsComponent,
    ContactComponent,
    ProductItemComponent,
    ProjectItemComponent
  ],
  imports: [
    CommonModule,
    PWebRoutingModule
  ]
})
export class PWebModule { }
