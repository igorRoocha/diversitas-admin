import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ScreenService } from 'src/app/common/services/screen-service/screen.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements AfterViewInit {
  screenName: string = '';

  constructor(
    private router: Router,
    private screenService: ScreenService
  ) {
    this.screenService.setScreenName('Seus produtos');
  }

  ngAfterViewInit(): void {
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
  
}
