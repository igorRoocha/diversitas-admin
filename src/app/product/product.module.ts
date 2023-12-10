import { CommonModule, CurrencyPipe } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { CurrencyFormatDirective } from '../common/directive/currency-format.directive';
import { CurrencyFormatPipe } from '../common/pipes/currency-format.pipe';
import { ProductChangeComponent } from './product-change/product-change.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRoutes } from './product.routing';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CurrencyFormatDirective,
    CurrencyFormatPipe,
    ProductChangeComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatFormFieldModule, 
    MatInputModule, 
    FormsModule, 
    MatAutocompleteModule,
    MatButtonModule, 
    MatIconModule, 
    MatTableModule,
    MatTabsModule,
    MatChipsModule,
    MatGridListModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatCheckboxModule, 
    RouterModule.forChild(ProductRoutes)
  ],
  exports: [
    ProductListComponent,
    ProductChangeComponent,
  ],
  providers: [
    CurrencyPipe
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ProductModule { }
