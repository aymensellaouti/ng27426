import { Component, input, output } from '@angular/core';
import { Cv } from '../model/cv';
import { DefaultImagePipe } from '../pipes/default-image-pipe';

@Component({
  selector: 'app-cv-item',
  imports: [DefaultImagePipe],
  templateUrl: './cv-item.html',
  styleUrl: './cv-item.css',
})
export class CvItem {
  // L'état de notre composant
  /**
   * @var le cv à afficher
   */
  cv = input.required<Cv>();

  selectCv = output<Cv>();

  onClickCv() {
    this.selectCv.emit(this.cv());
  }
}
