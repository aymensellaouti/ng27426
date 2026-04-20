import { Component } from '@angular/core';

@Component({
  selector: 'app-color',
  imports: [],
  templateUrl: './color.html',
  styleUrl: './color.css',
})
export class Color {
  private defaultColor = 'red';
  color = this.defaultColor;

  changeColor(colorInput: HTMLInputElement) {
    this.color = colorInput.value;
    colorInput.value = '';
  }

  reset() {
    this.color = this.defaultColor;
  }
}
