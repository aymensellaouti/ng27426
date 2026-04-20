import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-som',
  imports: [FormsModule],
  templateUrl: './som.html',
  styleUrl: './som.css',
})
export class Som {
  x = signal(5);
  y = signal(7);
  z = computed(() => this.x() + this.y());
  zz = computed(() => {
    console.log('zz');
    return 2 * this.z()
  });
}
