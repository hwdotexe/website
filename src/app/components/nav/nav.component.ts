import { Component, OnInit, HostListener } from '@angular/core';
import { DarkModeService } from 'src/app/services/dark-mode-service/dark-mode.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  showNav: boolean;

  constructor(private darkModeService: DarkModeService) {
    this.showNav = window.innerWidth >= 900;
  }

  toggleDarkMode(): void {
    this.darkModeService.toggleDarkMode();
  }
}
