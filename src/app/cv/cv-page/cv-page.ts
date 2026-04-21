import { Component, signal,  } from '@angular/core';
import { Cv } from '../model/cv';
import { CvsList } from "../cvs-list/cvs-list";
import { CvCard } from "../cv-card/cv-card";
import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Btc2UsdPipe } from '../../pipes/btc2-usd-pipe';

@Component({
  selector: 'app-cv-page',
  imports: [CvsList, CvCard, DatePipe, UpperCasePipe, Btc2UsdPipe, CurrencyPipe],
  templateUrl: './cv-page.html',
  styleUrl: './cv-page.css',
})
export class CvPage {
  /**
   * La liste des cvs à afficher
   */
  cvs = signal<Cv[]>([
    new Cv(1, 'RANDRIANARIVELO', 'MIORA', 'Dev', '12345678', 'rotating_card_profile.png', 20),
    new Cv(2, 'KHATAL', 'Sami', 'Dev', '12345679', 'rotating_card_profile2.png', 20),
    new Cv(
      3,
      'VAN HYLCKAMA VLIEG',
      'Pedro',
      'Dev',
      '12345680',
      'rotating_card_profile3.png',
      20,
    ),
    new Cv(4, 'DE RYCKE', 'ALEXANDRE', 'Dev', '12345688', 'rotating_card_profile2.png', 20),
    new Cv(5, 'MOUSSAOUI', 'EL MEHDI', 'Dev', '12345655', '      ', 20),
    new Cv(6, 'CARSOULE', 'KARIM', 'Dev', '12345642', '', 20),
  ]);
  /**
   * Le cv sélectionné
   */
  selectedCv = signal<Cv | null>(null);
  today = signal(new Date());
  onForwardCv(cv: Cv) {
    this.selectedCv.set(cv);
  }
}
