import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-fils',
  imports: [],
  templateUrl: './fils.html',
  styleUrl: './fils.css',
})
export class Fils {
  // fils (x) {}
  messageDePapa = input.required({
    alias: 'message',
    transform: (value: string) => {
      'Papa a dit : ' + value;
    }
  })
}
