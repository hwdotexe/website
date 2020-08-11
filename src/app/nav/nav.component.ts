import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  showNav: boolean;

  constructor() {
    this.showNav = window.innerWidth >= 900;
  }

  ngOnInit() {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.showNav = window.innerWidth >= 900;
  }

  mobileToggleNav() {
    this.showNav = !this.showNav;
  }

  mobileClickHideNav() {
    if(window.innerWidth < 900){
      this.showNav = false;
    }
  }
}
