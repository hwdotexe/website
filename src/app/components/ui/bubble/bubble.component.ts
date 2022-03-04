import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hw-bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.css']
})
export class BubbleComponent implements OnInit {
  @Input() bgColor: string;
  @Input() bgColorDark: string;
  @Input() textColor: string;

  constructor() { }

  ngOnInit(): void {
  }

}
