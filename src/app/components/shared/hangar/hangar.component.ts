import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hangar',
  templateUrl: './hangar.component.html',
  styleUrls: ['./hangar.component.css']
})
export class HangarComponent implements OnInit {

  @Input() title: string;
  @Input() tagline: string;
  @Input() color: string;
  @Input() imgUrl: string;

  constructor() { }

  ngOnInit() {
  }

}
