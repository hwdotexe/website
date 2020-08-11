import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  showBanner: boolean;
  title: string;
  link: string;

  constructor(private pTitle: Title) {
    this.showBanner = false;
    pTitle.setTitle("Haden Watne | Contact");
  }

  ngOnInit() {
  }

  updateBanner(title: string, link: string){
    this.showBanner = true;
    this.title = title;
    this.link = link;
  }
}
