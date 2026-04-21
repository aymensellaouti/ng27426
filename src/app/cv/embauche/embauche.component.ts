import { Component, inject } from '@angular/core';
import { Cv } from '../model/cv';
import { EmbaucheService } from '../services/embauche.service';
import { CvItem } from "../cv-item/cv-item";



@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css'],
  imports: [CvItem],
})
export class EmbaucheComponent {
  embaucheService = inject(EmbaucheService);
  embauchees = this.embaucheService.getEmbauchees();
}

