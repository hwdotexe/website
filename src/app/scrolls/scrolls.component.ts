import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-scrolls',
  templateUrl: './scrolls.component.html',
  styleUrls: ['./scrolls.component.css']
})
export class ScrollsComponent {
  pageUrl: String;

  constructor(private title: Title) {
    title.setTitle("Haden Watne | Scrolls");
    this.pageUrl = "../assets/pages/welcome.md";
  }

  setPageURL(data: any){
    this.pageUrl = data;
  }
}
