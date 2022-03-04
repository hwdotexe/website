import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hw-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {
  @Input() pageTitle: string;
  @Input() imageUrl: string;
  @Input() imageCaption: string;

  constructor() { }

  ngOnInit(): void {
  }

}
