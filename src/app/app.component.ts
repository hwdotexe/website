import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  theme = "light-theme bg-shapes";

  ngOnInit() {
    let hour = new Date().getHours();

    if(hour <= 7 || hour >= 19) {
      this.theme = "dark-theme bg-cogs";
    }
  }

  toggleTheme() {
    if(this.theme.startsWith("light")) {
      this.theme = "dark-theme bg-cogs";
    }else{
      this.theme = "light-theme bg-shapes";
    }
  }
}
