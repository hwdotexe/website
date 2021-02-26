import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { take, takeUntil, tap } from 'rxjs/operators';
import { PageCategory } from 'src/app/models/page-category.interface';
import { Page } from 'src/app/models/page.interface';
import { ScrollsService } from 'src/app/services/scrolls.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {
  private takeUntilDestroy$ = new Subject();

  @Input() currentPage: string;

  pageList$: Observable<Page[]>;
  categoryList$: Observable<PageCategory[]>;

  constructor(private router: Router, private scrollsService: ScrollsService) {}

  ngOnInit() {
    this.pageList$ = this.scrollsService.getPages();
    this.categoryList$ = this.scrollsService.getCategories();
  }

  ngOnDestroy() {
    this.takeUntilDestroy$.next();
    this.takeUntilDestroy$.unsubscribe();
  }

  goToWelcome() {
    this.router.navigate(['./scrolls']);
  }

  linkClick(page: string) {
    if (page.length >= 0) {
      this.router.navigate(['./scrolls'], {fragment: page});
    } else {
      this.router.navigate(['./scrolls']);
    }
  }
}
