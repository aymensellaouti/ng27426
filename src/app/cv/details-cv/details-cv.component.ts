import { Component, signal } from "@angular/core";
import { Cv } from "../model/cv";

@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css'],
})
export class DetailsCvComponent {
  cv = signal<Cv | null>(null);

  constructor() {}
}
