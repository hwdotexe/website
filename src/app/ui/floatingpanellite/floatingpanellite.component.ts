import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-floatingpanellite',
  templateUrl: './floatingpanellite.component.html',
  styleUrls: ['./floatingpanellite.component.css']
})
export class FloatingpanelliteComponent implements OnInit {
  @Input() cssClass: string;
  
  constructor() { }

  ngOnInit() {
  }

}
