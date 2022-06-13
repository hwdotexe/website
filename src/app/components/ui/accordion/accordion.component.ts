import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  isExpanded: boolean;

  @Input() title: string;

  constructor() {
    this.isExpanded = false;
  }

  ngOnInit() {
  }

  toggleText() {
    this.isExpanded = !this.isExpanded;
  }
}
