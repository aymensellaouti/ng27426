import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two',
  imports: [FormsModule],
  templateUrl: './two.html',
  styleUrl: './two.css',
})
export class Two {
  two = 'initial value'
}
