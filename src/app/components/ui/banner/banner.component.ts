import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { Observable } from "rxjs";
import { filter, map } from "rxjs/operators";

@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.css"],
})
export class BannerComponent implements OnInit {
  displayClass: string;

  showBanner$: Observable<boolean>;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.displayClass = "animate__delay-1s";

    this.showBanner$ = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map((event: NavigationEnd) => {
        return event.url !== "/note";
      })
    );
  }

  closeBanner() {
    this.displayClass = "animate__slideOutDown";
  }
}
