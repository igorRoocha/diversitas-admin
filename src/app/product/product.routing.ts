import { Routes } from '@angular/router';
import { ProductChangeComponent } from './product-change/product-change.component';
import { ProductListComponent } from './product-list/product-list.component';

export const ProductRoutes: Routes = [
  { path: 'product', component: ProductListComponent },
  {
    path: 'product',
    children: [
      {
        path: 'edit',
        component: ProductChangeComponent,
      },
    ],
  },
];
