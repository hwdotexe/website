import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-widepanel',
  templateUrl: './widepanel.component.html',
  styleUrls: ['./widepanel.component.css']
})
export class WidepanelComponent implements OnInit {
  @Input() cssClass;
  
  constructor() { }

  ngOnInit() {
  }

}
