import { Component, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ttc',
  templateUrl: './ttc.component.html',
  styleUrl: './ttc.component.css',
  imports: [FormsModule]
})
export class TtcComponent {
  // State
  priceHt = signal(0);
  taxe = signal(18);
  qty = signal(1);
  #errorEffect = effect(() => {
    if (this.totalTtc() > 800 && this.totalTtc() <1000) {
    console.info('Attention vous allez bientot dépasser votre solde seuil');
    } else if (this.totalTtc() >= 1000) {
      console.error('ATTENTION: Vous allez expolser votre budget, sortez vite courrez !!!!')
    }
  })
  // à vérifier
  unitaireTtc = computed(() => (this.priceHt() * (100 + this.taxe())) / 100);
  discount = computed(() => {
    let discountPercent = 0;
    if (this.qty() >= 10 && this.qty() <= 15) {
      discountPercent = 20;
    } else if (this.qty() > 15) {
      discountPercent = 30;
    }
    return (this.unitaireTtc() * discountPercent * this.qty()) / 100;
  });
  totalTtc = computed(() => (this.unitaireTtc() * this.qty()) - this.discount());
}
