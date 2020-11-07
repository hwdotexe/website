import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  theme: string;
  texture: string;

  isChristmas = false;
  hour = 0;

  ngOnInit() {
    let date = new Date();
    this.hour = date.getHours();
    this.isChristmas = date.getMonth() == 11;
    
    if(this.hour <= 7 || this.hour >= 19) {
      this.setDarkTheme();
    } else {
      this.setLightTheme();
    }
  }

  toggleTheme() {
    if(this.theme.startsWith("light")) {
      this.setDarkTheme();
    }else{
      this.setLightTheme();
    }
  }

  setDarkTheme() {
    this.theme = "dark-theme";

    if(this.isChristmas){
      this.texture = "bg-christmas-dark";
    } else {
      this.texture = "bg-cogs";
    }
  }

  setLightTheme() {
    this.theme = "light-theme";
    
    if(this.isChristmas){
      this.texture = "bg-christmas-light";
    } else {
      this.texture = "bg-shapes";
    }
  }
}
