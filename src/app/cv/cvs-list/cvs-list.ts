import { Component, input, output } from '@angular/core';
import { Cv } from '../model/cv';
import { CvItem } from "../cv-item/cv-item";

@Component({
  selector: 'app-cvs-list',
  imports: [CvItem],
  templateUrl: './cvs-list.html',
  styleUrl: './cvs-list.css',
})
export class CvsList {
  // cvsList(cvs)
  cvs = input<Cv[]>([]);

  // forwardCv = output<Cv>()
}
