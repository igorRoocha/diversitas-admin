import { Component } from '@angular/core';
import { MenuService } from './menu/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  get isExpanded() {
    return this.menuService.isMenuExpanded$;
  }
  
  constructor(private menuService: MenuService) {}

  toggleMenu(): void {
    this.menuService.toggleMenu();
  }
}
