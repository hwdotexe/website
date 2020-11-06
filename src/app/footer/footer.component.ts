import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  year = new Date().getFullYear();

  @Output() toggleTheme: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  emitToggle() {
    this.toggleTheme.emit(true);
  }
}
