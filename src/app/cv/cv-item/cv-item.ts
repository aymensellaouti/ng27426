import { Component, input, output } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-cv-item',
  imports: [],
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
