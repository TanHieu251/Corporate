import { NgModule } from '@angular/core';
import { CommonModule, IMAGE_CONFIG } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PAdminRoutingModule } from './p-admin-routing.module';
import { LayoutAdminComponent } from './shared/components/layout-admin/layout-admin.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { CompanyAdminComponent } from './pages/company-admin/company-admin.component';

import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { CarouselModule } from 'primeng/carousel';
import { AvatarModule } from 'primeng/avatar';
import { DividerModule } from 'primeng/divider';
import { MenuModule } from 'primeng/menu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { TooltipModule } from 'primeng/tooltip';
import { ServicesAdminComponent } from './pages/services-admin/services-admin.component';
import { ServicesDetailComponent } from './shared/components/services-detail/services-detail.component';
import { ProductDetailComponent } from './shared/components/product-detail/product-detail.component';
import { ProductAdminComponent } from './pages/product-admin/product-admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HttpClient } from '@angular/common/http';
import { ServiceCategoryComponent } from './pages/service-category/service-category.component';
import { ServiceCategoryModalComponent } from './shared/components/service-category-modal/service-category-modal.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductCategoryComponent } from './pages/product-category/product-category.component';
import { UploadImageComponent } from './shared/components/upload-image/upload-image.component';
import { TableComponent } from './shared/components/table/table.component';
import { TableModule } from 'primeng/table';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { SelectModule } from 'primeng/select';
import { ProjectComponent } from './pages/project/project.component';
import { ProjectDetailComponent } from './shared/components/project-detail/project-detail.component';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { BadgeModule } from 'primeng/badge';
import { MessageService } from 'primeng/api';
import { ProjectCategoryComponent } from './pages/project-category/project-category.component';
import { DrawerModule } from 'primeng/drawer';
@NgModule({
  declarations: [
    LayoutAdminComponent,
    SidebarComponent,
    CompanyAdminComponent,
    ServicesAdminComponent,
    ServicesDetailComponent,
    ProductDetailComponent,
    ProductAdminComponent,
    DashboardComponent,
    ServiceCategoryComponent,
    ServiceCategoryModalComponent,
    LoginComponent,
    ProductCategoryComponent,
    UploadImageComponent,
    TableComponent,
    ProjectComponent,
    ProjectDetailComponent,
    ProjectCategoryComponent,
  ],
  imports: [
    CommonModule,
    PAdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    ImageModule,
    CardModule,
    ScrollPanelModule,
    CarouselModule,
    AvatarModule,
    DividerModule,
    MenuModule,
    PanelMenuModule,
    TooltipModule,
    TableModule,
    IconFieldModule,
    InputIconModule,
    SelectModule,
    FileUploadModule,
    ToastModule,
    BadgeModule,
    DrawerModule
  ],
  providers: [
    HttpClient,
    MessageService,
    {
      provide: IMAGE_CONFIG,
      useValue: {
        disableImageSizeWarning: true,
        disableImageLazyLoadWarning: true,
      },
    },
  ],
  exports: [],
})
export class PAdminModule {}
