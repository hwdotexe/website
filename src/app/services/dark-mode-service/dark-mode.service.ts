import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  isDarkMode = new BehaviorSubject<boolean>(false);

  constructor() { }

  setDarkMode(darkMode: boolean): void {
    this.isDarkMode.next(darkMode);
  }

  toggleDarkMode(): void {
    this.isDarkMode.next(!this.isDarkMode.getValue());
  }
}
