import { Component } from '@angular/core';
import { HangarComponent } from '../../ui/hangar/hangar.component';
import { SocialButtonComponent } from '../../ui/social-button/social-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SocialButtonComponent, HangarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {}
