import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DarkModeService } from './services/dark-mode-service/dark-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  theme: string;

  constructor(private darkModeService: DarkModeService) {}

  ngOnInit() {
    const isMediaRequestingDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    this.darkModeService.setDarkMode(isMediaRequestingDarkMode);

    this.darkModeService.isDarkMode.subscribe(isDarkMode => {
      this.theme = isDarkMode ? 'dark' : '';
    })
  }
}
