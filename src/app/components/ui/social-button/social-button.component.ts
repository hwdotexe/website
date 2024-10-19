import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-button',
  standalone: true,
  imports: [],
  templateUrl: './social-button.component.html',
  styleUrls: ['./social-button.component.css']
})
export class SocialButtonComponent {
  @Input() icon: string = 'fa-solid fa-stop';
  @Input() color: string = 'bg-blue-300';
  @Input() link: string = '#';
  @Input() title: string = 'A button';
  @Input() blank: boolean = true;
}
