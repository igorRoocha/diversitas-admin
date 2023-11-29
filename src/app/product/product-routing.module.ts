import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductChangeComponent } from './product-change/product-change.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'editar', component: ProductChangeComponent },
  // outras rotas se necessário
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
