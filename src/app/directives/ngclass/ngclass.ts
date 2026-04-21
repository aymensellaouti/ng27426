import { Component, signal } from '@angular/core';
import { Highlight } from '../highlight';

@Component({
  selector: 'app-ngclass',
  imports: [Highlight],
  templateUrl: './ngclass.html',
  styleUrl: './ngclass.css',
})
export class Ngclass {
  isOn = signal(false);

  interrupteur() {
    this.isOn.update(on => !on);
  }
}
