import { Component } from '@angular/core';
import { Color } from "./components/color/color";
// métadonnée un décorateur qui informe le compilateur
// que cette classe c'est un composant
@Component({
  // Le sélécteur css qui va identifier le composant
  selector: 'app-root',
  // J'importe les dépendances de mon template
  imports: [Color],
  // le lien vers le HTML que je gére
  templateUrl: './app.html',
  // Le css associé à ce composant
  styleUrl: './app.css'
})
export class App {

}
