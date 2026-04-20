import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-first-signal',
  imports: [],
  templateUrl: './first-signal.html',
  styleUrl: './first-signal.css',
})
export class FirstSignal {
  counter = signal(0);

  incremet() {
    this.counter.update(
      (valeurActuelle) => valeurActuelle + 1
    )
  }
  reset() {
    this.counter.set(0);
  }
}
