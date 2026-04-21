import { Component, input } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-cv-card',
  imports: [],
  templateUrl: './cv-card.html',
  styleUrl: './cv-card.css',
})
export class CvCard {
  cv = input<Cv|null>(null);
}
