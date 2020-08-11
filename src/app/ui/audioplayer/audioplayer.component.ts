import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-audioplayer',
  templateUrl: './audioplayer.component.html',
  styleUrls: ['./audioplayer.component.css']
})
export class AudioplayerComponent implements OnInit {
  @Input() trackLink: string;
  @Input() trackName: string;
  @Input() trackDesc: string;

  playing: boolean;
  track: HTMLAudioElement;

  constructor() {
    this.playing = false;
    this.track = new Audio();
  }

  ngOnInit() {
  }

  togglePlay() {
    if(this.playing){
      this.playing = false;
      this.track.pause();
    } else {
      this.playing = true;
      this.track.src = this.trackLink;
      this.track.play();
    }
  }
}
