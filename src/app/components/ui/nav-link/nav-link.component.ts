import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hw-nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.css']
})
export class NavLinkComponent implements OnInit {
  @Input() currentPage: string;
  @Input() destinationPage: string;
  @Input() display: string;

  constructor() { }

  ngOnInit(): void {
  }

}
