import { Component } from '@angular/core';
import { Color } from "./components/color/color";
import { Two } from "./components/two/two";
import { RotatingCard } from "./components/rotating-card/rotating-card";
import { FirstSignal } from "./signals/first-signal/first-signal";
import { Som } from "./signals/som/som";
import { TtcComponent } from "./signals/ttc/ttc.component";
import { Pere } from "./commInterCompo/pere/pere";
// métadonnée un décorateur qui informe le compilateur
// que cette classe c'est un composant
@Component({
  // Le sélécteur css qui va identifier le composant
  selector: 'app-root',
  // J'importe les dépendances de mon template
  imports: [Color, Two, RotatingCard, FirstSignal, Som, TtcComponent, Pere],
  // le lien vers le HTML que je gére
  templateUrl: './app.html',
  // Le css associé à ce composant
  styleUrl: './app.css'
})
export class App {

}
