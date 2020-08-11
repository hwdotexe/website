import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-voice',
  templateUrl: './voice.component.html',
  styleUrls: ['./voice.component.css']
})
export class VoiceComponent implements OnInit {
  
  constructor(private title: Title) {
    title.setTitle("Haden Watne | Voice");
  }

  ngOnInit() {
  }
}
