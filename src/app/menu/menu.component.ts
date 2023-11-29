import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { MenuService } from './menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  get isExpanded() {
    return this.menuService.isMenuExpanded$;
  }

  constructor(
    private router: Router,
    private menuService: MenuService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.menuService.isMenuExpanded$.subscribe((value) => {
      console.log(value);
      this.cdr.detectChanges();
    });
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
