import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  imports: [NgClass],
  templateUrl: './ngclass.html',
  styleUrl: './ngclass.css',
})
export class Ngclass {
  isOn = signal(false);

  interrupteur() {
    this.isOn.update(on => !on);
  }
}
