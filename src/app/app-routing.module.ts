import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./p-admin/p-admin.module').then((m) => m.PAdminModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./p-web/p-web.module').then((m) => m.PWebModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
