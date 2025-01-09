import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  isLoading$ = new BehaviorSubject<boolean>(false);

  constructor() {}

  beginLoad(): void {
    this.isLoading$.next(true);
  }

  stopLoad(): void {
    this.isLoading$.next(false);
  }
}
