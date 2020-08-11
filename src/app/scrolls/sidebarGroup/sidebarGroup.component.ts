import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Pages } from '../pageConstants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebarGroup',
  templateUrl: './sidebarGroup.component.html',
  styleUrls: ['./sidebarGroup.component.css']
})
export class SidebarGroupComponent implements OnInit{
  isCollapsed: boolean;
  pages: any[];

  @Input() title: string;
  @Input() currentPage: number;
  @Input() categoryID: string;

  @Output() pageUrlOut: EventEmitter<string> = new EventEmitter();

  constructor(private router: Router) {
    this.isCollapsed = true;
    this.pages = Pages.pages;
  }

  ngOnInit(): void {
    this.isCollapsed = this.currentPage >= 0 ? Pages.pages[this.currentPage].category !== this.categoryID : true;
  }

  toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;
  }

  linkClick(page: number) {
    if (page >= 0) {
      this.router.navigate(['./scrolls'], {fragment: Pages.pages[page].id});
    } else {
      this.router.navigate(['./scrolls']);
    }
  }
}
