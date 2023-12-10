import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AdminLayoutComponent } from './design-system/admin-layout/admin-layout.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { DashboardComponent } from './design-system/dashboard/dashboard.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, 
  {
    path: '',
    children: [{
      path: '',
      loadChildren: () => import('./design-system/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }]
  },
  {
    path: '',
    children: [{
      path: '',
      loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
    }]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: []
})
export class AppRoutingModule { }
