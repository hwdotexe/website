import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { take, takeUntil, tap } from 'rxjs/operators';
import { PageCategory } from 'src/app/models/page-category.interface';
import { Page } from 'src/app/models/page.interface';
import { ScrollsService } from 'src/app/services/scrolls.service';

@Component({
  selector: 'app-sidebarGroup',
  templateUrl: './sidebarGroup.component.html',
  styleUrls: ['./sidebarGroup.component.css']
})
export class SidebarGroupComponent implements OnInit, OnDestroy{
  private takeUntilDestroy$ = new Subject();

  isCollapsed: boolean;

  @Input() title: string;
  @Input() currentPage: string;
  @Input() categoryID: string;

  pageList: Page[] = [];
  categoryList: PageCategory[] = [];

  constructor(private router: Router, private scrollsService: ScrollsService) {
    this.isCollapsed = true;
    
    scrollsService.getPages().pipe(
      tap(pages => {
        this.pageList = pages;
      }),
      take(1),
      takeUntil(this.takeUntilDestroy$)
    ).subscribe();

    scrollsService.getCategories().pipe(
      tap(categories => {
        this.categoryList = categories;
      }),
      take(1),
      takeUntil(this.takeUntilDestroy$)
    ).subscribe();
  }

  ngOnInit(): void {
    this.scrollsService.getPageFromFragment(this.currentPage).pipe(
      tap(page => {
        this.isCollapsed = page.category !== this.categoryID;
      }),
      take(1),
      takeUntil(this.takeUntilDestroy$)
    ).subscribe();
  }

  ngOnDestroy() {
    this.takeUntilDestroy$.next();
    this.takeUntilDestroy$.unsubscribe();
  }

  toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;
  }

  linkClick(page: string) {
    if (page.length >= 0) {
      this.router.navigate(['./scrolls'], {fragment: page});
    } else {
      this.router.navigate(['./scrolls']);
    }
  }
}
