// screen-name.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {
  private screenNameSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  setScreenName(name: string): void {
    this.screenNameSubject.next(name);
  }

  get screenName(): Observable<string> {
    return this.screenNameSubject.asObservable();
  }
}
