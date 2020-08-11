import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(private title: Title) {
    title.setTitle("Haden Watne | 404 Not Found");
  }

  ngOnInit() {
  }

}
