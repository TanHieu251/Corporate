import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutAdminComponent } from './shared/components/layout-admin/layout-admin.component';
import { CompanyAdminComponent } from './pages/company-admin/company-admin.component';
import { ServicesAdminComponent } from './pages/services-admin/services-admin.component';
import { ServicesDetailComponent } from './shared/components/services-detail/services-detail.component';
import { ProductAdminComponent } from './pages/product-admin/product-admin.component';
import { ProductDetailComponent } from './shared/components/product-detail/product-detail.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ServiceCategoryComponent } from './pages/service-category/service-category.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductCategoryComponent } from './pages/product-category/product-category.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutAdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'company',
        component: CompanyAdminComponent,
      },
      {
        path: 'service',
        component: ServicesAdminComponent,
      },
      {
        path: 'serviceCategory',
        component: ServiceCategoryComponent,
      },
      {
        path: 'categoryProduct',
        component: ProductCategoryComponent,
      },
      {
        path: 'services/detail',
        component: ServicesDetailComponent,
      },
      {
        path: 'products',
        component: ProductAdminComponent,
      },
      {
        path: 'products/detail',
        component: ProductDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PAdminRoutingModule {}
