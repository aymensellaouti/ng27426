import { Directive, signal } from '@angular/core';

@Directive({
  selector: 'input[appRainbow][type=text]',
  host: {
    '[style.color]':'this.color()',
    '[style.borderColor]':'this.borderColor()',
    '(keyup)':'this.onKeyup()'
  },
})
export class Rainbow {
  color = signal('black');
  borderColor = signal('black');
  constructor() {
    console.log('appRainbow');
  }
  onKeyup() {
    this.color.set(this.getRandomColor());
    this.borderColor.set(this.getRandomColor());
  }
  private getRandomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return '#' + randomColor;
  }
}
