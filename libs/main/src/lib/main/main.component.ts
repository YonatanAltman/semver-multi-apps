import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardComponent, cardList} from "@semver-multi-apps/card";

@Component({
  selector: 'page-main',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  list = cardList;
}
