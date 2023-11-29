// menu.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private isMenuExpandedSubject = new BehaviorSubject<boolean>(false);
  isMenuExpanded$ = this.isMenuExpandedSubject.asObservable();

  toggleMenu(): void {
    this.isMenuExpandedSubject.next(!this.isMenuExpandedSubject.value);
  }
}
