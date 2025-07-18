import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// PrimeNG Modules
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ImageModule } from 'primeng/image';
import { AvatarModule } from 'primeng/avatar';

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
import { PAdminModule } from '../p-admin/p-admin.module';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

import { DropdownModule } from 'primeng/dropdown';
import { SelectModule } from 'primeng/select';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';
import { PanelMenuModule } from 'primeng/panelmenu';
import { AccordionModule } from 'primeng/accordion';
import { CheckboxModule } from 'primeng/checkbox';
import { ListboxModule } from 'primeng/listbox';
import { SliderModule } from 'primeng/slider';
import { TabsModule } from 'primeng/tabs';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PWebRoutingModule,
    PAdminModule,
    // PrimeNG Modules
    ButtonModule,
    CardModule,
    CarouselModule,
    ScrollPanelModule,
    ImageModule,
    AvatarModule,
    FormsModule,
    DropdownModule,
    AutoCompleteModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    SelectModule,
    TagModule,
    PanelMenuModule,
    AccordionModule,
    CheckboxModule,
    ListboxModule,
    SliderModule,
    TabsModule,
  ],
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
    ProjectItemComponent,
    ProductDetailComponent,
    ProjectDetailComponent,
    NotFoundComponent,
  ],
  exports: [RouterModule],
})
export class PWebModule {}
