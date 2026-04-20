import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-color',
  imports: [],
  templateUrl: './color.html',
  styleUrl: './color.css',
})
export class Color {
  private defaultColor = 'red';
  color = signal(this.defaultColor);

  changeColor(colorInput: HTMLInputElement) {
    this.color.set(colorInput.value);
    colorInput.value = '';
  }

  reset() {
    this.color.set(this.defaultColor);
  }
}
