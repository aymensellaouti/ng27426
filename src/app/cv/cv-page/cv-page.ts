import { Component, signal } from '@angular/core';
import { Cv } from '../model/cv';
import { CvsList } from "../cvs-list/cvs-list";
import { CvCard } from "../cv-card/cv-card";

@Component({
  selector: 'app-cv-page',
  imports: [CvsList, CvCard],
  templateUrl: './cv-page.html',
  styleUrl: './cv-page.css',
})
export class CvPage {
  /**
   * La liste des cvs à afficher
   */
  cvs = signal<Cv[]>([
    new Cv(1, '	RANDRIANARIVELO', 'MIORA', 'Dev', '12345678', 'rotating_card_profile.png', 20),
    new Cv(2, '	KHATAL ', 'Sami', 'Dev', '12345679', 'rotating_card_profile2.png', 20),
  ]);
  /**
   * LE cv sélectionné
   */
  selectedCv = signal<Cv | null>(null);
}
