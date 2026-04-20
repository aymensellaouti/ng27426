import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-first-signal',
  imports: [],
  templateUrl: './first-signal.html',
  styleUrl: './first-signal.css',
})
export class FirstSignal {
  counter = signal(0);
  names = signal(['Alexandre', 'Pedro', 'Miora', 'El Mehdi', 'Sami', 'Karim'])
  namesLegth = computed(() => this.names().length);

  addAymen() {
    this.names.update(
      (nameArray) => [...nameArray, 'aymen']
    )
  }
  incremet() {
    this.counter.update(
      (valeurActuelle) => valeurActuelle + 1
    )
  }
  reset() {
    this.counter.set(0);
  }
}
