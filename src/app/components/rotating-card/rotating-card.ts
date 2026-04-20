import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rotating-card',
  imports: [FormsModule],
  templateUrl: './rotating-card.html',
  styleUrl: './rotating-card.css',
})
export class RotatingCard {
  // Le state de mon composant
  firstname = 'aymen';
  name = 'sellaouti';
  job = 'enseignant';
  path = 'rotating_card_profile3.png';
}
