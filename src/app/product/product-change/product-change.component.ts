import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { TOTAL_TAX } from 'src/app/common/const/tax.const';
import { ScreenService } from 'src/app/common/services/screen-service/screen.service';
import { UtilsCalculator } from 'src/app/common/utils/utils-calculator';
import { UtilsNumber } from 'src/app/common/utils/utils-number';

export interface ProductPrice {
  active: boolean;
  image: string;
  identification: string;
  variation: string;
  originalPrice: string;
  shippingPrice: string;
  totalTost: string;
  price: string;
  promotional: string;
  realProfit: string;
  stock: string;
}

const ELEMENT_DATA: ProductPrice[] = [
  { 
    active: true, 
    image: 'Imagem', 
    identification: '158610992', 
    variation: 'H',
    originalPrice: 'R$ 0,00',
    shippingPrice: 'R$ 0,00',
    totalTost: 'R$ 0,00',
    price: 'R$ 0,00',
    promotional: 'R$ 0,00',
    realProfit: 'R$ 0,00',
    stock: '0'
  },
];

export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-product-change',
  templateUrl: './product-change.component.html',
  styleUrls: ['./product-change.component.scss']
})
export class ProductChangeComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = [
    'active',   
    'variation',
    'originalPrice',
    'shippingPrice',
    'totalTost',
    'price',
    'promotional',
    'realProfit',
  ];
  dataSource = new MatTableDataSource<ProductPrice>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  fruits: string[] = ['Lemon'];
  allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  @ViewChild('fruitInput')
  fruitInput!: ElementRef<HTMLInputElement>;

  favoriteSeason: string = "";
  seasons: string[] = [
    'Ativar este produto para ser exibido na minha loja', 
    'Desativar este produto para não ser exibido na minha loja'
  ];


  constructor(
    private cdr: ChangeDetectorRef,
    private screenService: ScreenService
  ) {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => fruit ? this._filter(fruit) : this.allFruits.slice()));
  }

  ngOnInit(): void {
    this.screenService.setScreenName('Editar Produto');
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  updateTotalTost(element: ProductPrice): void {
    const originalPrice = UtilsNumber.convertStringToNumber(element.originalPrice) || 0;
    const shippingPrice = UtilsNumber.convertStringToNumber(element.shippingPrice) || 0;

    // Atualiza totalTost
    element.totalTost = (originalPrice + shippingPrice).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

    this.updateRealProfit(element)

    this.cdr.detectChanges();
  }

  updateRealProfit(element: ProductPrice): void {
    const originalPrice = UtilsNumber.convertStringToNumber(element.originalPrice) || 0;
    const shippingPrice = UtilsNumber.convertStringToNumber(element.shippingPrice) || 0;
    const price = UtilsNumber.convertStringToNumber(element.price) || 0;
    const promotional = UtilsNumber.convertStringToNumber(element.promotional) || 0;
    let taxInValue = 0;
    let profit = 0;

    if (promotional > 0) {
      taxInValue = UtilsCalculator.calculatePercent(promotional, TOTAL_TAX);
      profit = promotional - taxInValue - (originalPrice + shippingPrice);
    } else {
      taxInValue = UtilsCalculator.calculatePercent(price, TOTAL_TAX);
      profit = price - taxInValue - (originalPrice + shippingPrice)
    }

    // Atualiza realProfit
    element.realProfit = profit.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

    this.cdr.detectChanges();
  }

  colorRealProfit(element: ProductPrice): boolean {
    const realProfitValue = UtilsNumber.convertStringToNumber(element.realProfit) || 0

    if (realProfitValue > 0) {
      return true
    }

    return false
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().includes(filterValue));
  } 

}
