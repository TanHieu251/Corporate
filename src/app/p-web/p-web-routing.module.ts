import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { CompanyComponent } from './pages/company/company.component';
import { ServicesComponent } from './pages/services/services.component';
import { ProductsComponent } from './pages/products/products.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectsComponent } from './pages/projects/projects.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'company',
        component: CompanyComponent,
      },
      {
        path: 'services',
        component: ServicesComponent,
      },
      {
        path: 'products',
        component: ProductsComponent,
      },
      // {
      //   path: 'products/:id',
      //   component: ProductDetailComponent,
      // },
      {
        path: 'projects',
        component: ProjectsComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PWebRoutingModule {}
