import { Component, signal } from '@angular/core';
import { Highlight } from '../highlight';
import { Rainbow } from '../rainbow';

@Component({
  selector: 'app-ngclass',
  imports: [Highlight, Rainbow],
  templateUrl: './ngclass.html',
  styleUrl: './ngclass.css',
})
export class Ngclass {
  isOn = signal(false);

  interrupteur() {
    this.isOn.update(on => !on);
  }
}
