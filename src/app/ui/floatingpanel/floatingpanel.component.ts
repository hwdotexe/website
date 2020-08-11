import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-floatingpanel',
  templateUrl: './floatingpanel.component.html',
  styleUrls: ['./floatingpanel.component.css']
})
export class FloatingpanelComponent implements OnInit {

  @Input() cssClass: string;

  constructor() { }

  ngOnInit() {
  }

}
