import { Component, inject, signal,  } from '@angular/core';
import { Cv } from '../model/cv';
import { CvsList } from "../cvs-list/cvs-list";
import { CvCard } from "../cv-card/cv-card";
import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Btc2UsdPipe } from '../../pipes/btc2-usd-pipe';
import { LoggerSeervice } from '../../services/logger.Service';
import { HelloService } from '../../services/hello.service';
import { TodoService } from '../../todo/service/todo.service';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';
import { EmbaucheComponent } from "../embauche/embauche.component";

@Component({
  selector: 'app-cv-page',
  imports: [CvsList, CvCard, DatePipe, UpperCasePipe, Btc2UsdPipe, CurrencyPipe, EmbaucheComponent],
  templateUrl: './cv-page.html',
  styleUrl: './cv-page.css',
  providers: [],
})
export class CvPage {

  cvService = inject(CvService);
  /**
   * La liste des cvs à afficher
   */
  cvs = signal<Cv[]>([]);
  /**
   * Le cv sélectionné
   */
  selectedCv = this.cvService.getSelectedCv();
  logger = inject(LoggerSeervice);
  todoService = inject(TodoService);
  toastr = inject(ToastrService);

  // helloService = new HelloService();
  // Je commande une instance de LoggerService
  constructor(
    public helloService: HelloService,
    //public logger: LoggerSeervice
  ) {
    this.helloService.sayHello();
    this.logger.log('cc je suis le cvComponent');
    this.toastr.info('cc je suis le cvComponent');
    this.cvService.getCvsFromApi().subscribe({
      next: (cvs) => this.cvs.set(cvs),
      error: (e) => {
        const fakeCvSignal = this.cvService.getCvs();
        this.cvs.set(fakeCvSignal());
        this.toastr.error("Attention les données fictives merci de contacter l'admin")
      }
    })
  }
  today = signal(new Date());
  // onForwardCv(cv: Cv) {
  //   this.selectedCv.set(cv);
  // }
}
