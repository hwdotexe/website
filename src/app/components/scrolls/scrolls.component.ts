import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { take, takeUntil, tap } from 'rxjs/operators';
import { ScrollsService } from 'src/app/services/scrolls.service';

@Component({
  selector: 'app-scrolls',
  templateUrl: './scrolls.component.html',
  styleUrls: ['./scrolls.component.css']
})
export class ScrollsComponent implements OnInit, OnDestroy {
  private takeUntilDestroy$ = new Subject();
  
  scrollFragment: string;
  scrollPageUrl: string;

  constructor(private route: ActivatedRoute, private scrollsService: ScrollsService, title: Title, ) {
    title.setTitle("Haden Watne | Scrolls");
  }

  ngOnInit() {
    this.route.fragment.pipe(
      tap(fragment => {
        this.scrollsService.getPageFromFragment(fragment).pipe(
          tap(page => {
            this.scrollFragment = page.fragment;
            this.scrollPageUrl = page.pageUrl;
          }),
          take(1),
          takeUntil(this.takeUntilDestroy$)
        ).subscribe();
      }),
      takeUntil(this.takeUntilDestroy$)
    ).subscribe();
  }

  ngOnDestroy() {
    this.takeUntilDestroy$.next();
    this.takeUntilDestroy$.unsubscribe();
  }
}
