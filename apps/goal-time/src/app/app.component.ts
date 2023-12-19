import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {HeaderComponent} from "@semver-multi-apps/header";

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, HeaderComponent],
  selector: 'semver-multi-apps-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'goal time';
}
