import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardInterface} from "./card.interface";

@Component({
  selector: 'semver-multi-apps-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() card!: CardInterface;
}
