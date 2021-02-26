import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dropexpand',
  templateUrl: './dropexpand.component.html',
  styleUrls: ['./dropexpand.component.css']
})
export class DropexpandComponent implements OnInit {
  showText: boolean;
  dropText: string;

  @Input() title: string;

  constructor() {
    this.dropText = "+";
    this.showText = false;
  }

  ngOnInit() {
  }

  toggleText() {
    this.showText = !this.showText;
    this.dropText = this.showText ? "-" : "+";
  }
}
