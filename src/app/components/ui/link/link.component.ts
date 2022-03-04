import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hw-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
  @Input() isExternal: boolean = false;
  @Input() destination: string;
  @Input() display: string;

  constructor() { }

  ngOnInit(): void {

  }

}
