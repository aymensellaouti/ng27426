import {  Injectable, Signal, signal } from '@angular/core';
import { Cv } from '../model/cv';



@Injectable({
  providedIn: 'root',
})
export class CvService {
  #cvs = signal<Cv[]>([
    new Cv(1, 'RANDRIANARIVELO', 'MIORA', 'Dev', '12345678', 'rotating_card_profile.png', 20),
    new Cv(2, 'KHATAL', 'Sami', 'Dev', '12345679', 'rotating_card_profile2.png', 20),
    new Cv(3, 'VAN HYLCKAMA VLIEG', 'Pedro', 'Dev', '12345680', 'rotating_card_profile3.png', 20),
    new Cv(4, 'DE RYCKE', 'ALEXANDRE', 'Dev', '12345688', 'rotating_card_profile2.png', 20),
    new Cv(5, 'MOUSSAOUI', 'EL MEHDI', 'Dev', '12345655', '      ', 20),
    new Cv(6, 'CARSOULE', 'KARIM', 'Dev', '12345642', '', 20),
  ]);

  #selectedCv = signal<Cv | null>(null);
  // Pattern 2
  // selectedCv = this.#selectedCv.asReadonly();
  /**
   * Retourne la liste des cvs
   * @returns Signal<Cv[]>
   */
  getCvs(): Signal<Cv[]> {
    return this.#cvs.asReadonly();
  }
  /**
   * Retourne le selectedCv
   * @returns Signal<Cv>
   */
  getSelectedCv(): Signal<Cv | null> {
    return this.#selectedCv.asReadonly();
  }

  /**
   * Selectionne un cv
   * @param cv Le cv séléctionné
   */
  selectCv(cv: Cv): void {
    this.#selectedCv.set(cv);
  }

  /**
   *
   * Cherche un cv avec son id dans lai liste fictive de cvs
   *
   * @param id
   * @returns Cv | null
   */
  findCvById(id: number): Cv | null {
    return this.#cvs().find(cv => cv.id == id) ?? null;
  }

  /**
   *
   * Supprime un cv s'il le trouve
   *
   * @param cv : Cv
   * @returns boolean
   */
  deleteCv(cv: Cv): void {
     this.#cvs.update((cvs) => cvs.filter((actualCv) => actualCv != cv));
  }
}
