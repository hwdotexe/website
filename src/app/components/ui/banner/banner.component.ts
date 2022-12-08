import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  displayClass: string;

  showBanner$: Observable<boolean>;
  date: string;

  constructor(private router: Router, private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.displayClass = 'animate__delay-1s';
    this.date = this.datePipe.transform(new Date(), 'MM/YYYY');

    this.showBanner$ = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map((event: NavigationEnd) => {
        return this.date === '01/2023' && event.url !== '/note';
      })
    );
  }

  closeBanner() {
    this.displayClass = 'animate__slideOutDown';
  }
}
