import { Component } from '@angular/core';
import { Second } from "../second/second";

@Component({
  selector: 'app-first',
  imports: [Second],
  templateUrl: './first.html',
  styleUrl: './first.css',
})
export class First {
  /**
   * @var c'est le nom a afficher
   */
  name = "aymen";
  isHidden = false;
  message = '';

  constructor() {
    // setTimeout(() => {
    //   // this.name = "Alexandre"
    // },3000);

    // setInterval(() => {
    //   console.log('cc');

    //   // this.isHidden = !this.isHidden
    // },2000)
  }

  /**
   * Cette méthode elle affiche ou cache l'element cible
   */
  showHide() {
    this.isHidden = !this.isHidden;
  }
  /**
   * Elle affecte une nouvelle valeur au message
   * @param newMessage : la nouvelle valeur du message
   */
  changeMessage(newMessage:string){
    this.message = newMessage;
  }
}
