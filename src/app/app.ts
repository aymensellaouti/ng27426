import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// métadonnée un décorateur qui informe le compilateur
// que cette classe c'est un composant
@Component({
  // Le sélécteur css qui va identifier le composant
  selector: 'app-root',
  // J'importe les dépendances de mon template
  imports: [RouterOutlet],
  // le lien vers le HTML que je gére
  templateUrl: './app.html',
  // Le css associé à ce composant
  styleUrl: './app.css'
})
export class App {

}
