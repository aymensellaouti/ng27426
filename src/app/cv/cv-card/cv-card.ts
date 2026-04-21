import { Component, input } from '@angular/core';
import { Cv } from '../model/cv';
import { DefaultImagePipe } from '../pipes/default-image-pipe';

@Component({
  selector: 'app-cv-card',
  imports: [DefaultImagePipe],
  templateUrl: './cv-card.html',
  styleUrl: './cv-card.css',
})
export class CvCard {
  cv = input<Cv | null>(null);
}
