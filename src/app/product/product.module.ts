import { CommonModule, CurrencyPipe } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { CurrencyFormatDirective } from '../common/directive/currency-format.directive';
import { CurrencyFormatPipe } from '../common/pipes/currency-format.pipe';
import { ProductRoutingModule } from '../product/product-routing.module';
import { ProductChangeComponent } from './product-change/product-change.component';
import { ProductListComponent } from './product-list/product-list.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

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
    ReactiveFormsModule,
    MatCheckboxModule, 
    ProductRoutingModule
  ],
  exports: [
    ProductChangeComponent,
    ProductListComponent  
  ],
  providers: [
    CurrencyPipe
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ProductModule { }
