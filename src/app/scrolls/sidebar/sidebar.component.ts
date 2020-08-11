import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Pages } from '../pageConstants';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  pages = Pages;
  currentPage = -1;

  @Output() pageUrlOut: EventEmitter<string> = new EventEmitter();

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      let id = Pages.getID(fragment);

      if (id >= 0) {
        this.currentPage = id;
        this.pageUrlOut.emit(Pages.pages[id].url);
      } else {
        this.currentPage = -1;
        this.pageUrlOut.emit('../assets/scrolls/pages/welcome.md');
      }
    });
  }

  goToWelcome() {
    this.router.navigate(['./scrolls']);
  }

  linkClick(page: number) {
    if (page >= 0) {
      this.router.navigate(['./scrolls'], {fragment: Pages.pages[page].id});
    } else {
      this.router.navigate(['./scrolls']);
    }
  }
}
