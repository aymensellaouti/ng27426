import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-fils',
  imports: [],
  templateUrl: './fils.html',
  styleUrl: './fils.css',
})
export class Fils {
  // fils (x) {}
  messageDePapa = input.required<string>({
    alias: 'message'
  });

  sendMessageToPapa = output<string>();

  triggerSendMessageToPapa() {
    this.sendMessageToPapa.emit("Ok mais je garde la monnaie :D")
  }
}
