import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { DarkModeService } from 'src/app/services/dark-mode-service/dark-mode.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  showNav: boolean;
  currentPage: string;

  constructor(private darkModeService: DarkModeService, private router: Router) {
    this.showNav = window.innerWidth >= 900;
    
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map((event: NavigationEnd) => event.url)
    ).subscribe(url => {
      this.currentPage = url.substring(1);
    })
  }

  toggleDarkMode(): void {
    this.darkModeService.toggleDarkMode();
  }
}
