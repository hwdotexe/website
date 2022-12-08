import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteRouteGuardService implements CanActivate {
  constructor(private router: Router, private datePipe: DatePipe) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    let isDateValid = this.datePipe.transform(new Date(), 'MM/YYYY') === '01/2023';

    if (!isDateValid) {
      this.router.navigate(['/not-found']);
    }

    return isDateValid;
  }
}
