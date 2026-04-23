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
import { rxResource, toObservable } from '@angular/core/rxjs-interop';
import { catchError } from 'rxjs';

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
  // cvs = signal<Cv[]>([]);
  /**
   * Le cv sélectionné
   */
  selectedCv = this.cvService.getSelectedCv();
  logger = inject(LoggerSeervice);
  todoService = inject(TodoService);
  toastr = inject(ToastrService);
  // isLoading = signal(false);
  // error = signal('');
  cvsResources = rxResource({
    stream: () => this.cvService.getCvsFromApi().pipe(
      catchError(e => {
        this.toastr.error("Attention les données fictives merci de contacter l'admin");
        return toObservable(this.cvService.getCvs())
      })
    ),
    defaultValue: []
  });
  // helloService = new HelloService();
  // Je commande une instance de LoggerService
  constructor(
    public helloService: HelloService,
    //public logger: LoggerSeervice
  ) {
    this.helloService.sayHello();
    this.logger.log('cc je suis le cvComponent');
    this.toastr.info('cc je suis le cvComponent');
    // Lance le message de loading
    // this.isLoading.set(true);
    // this.cvService.getCvsFromApi().subscribe({
    //   next: (cvs) => this.cvs.set(cvs),
    //   error: (e) => {
    //     const fakeCvSignal = this.cvService.getCvs();
    //     this.error.set('On arrive pas à accéder aux données');
    //     this.cvs.set(fakeCvSignal());
    //     this.isLoading.set(false);
    //     this.toastr.error("Attention les données fictives merci de contacter l'admin");
    //   },
    //   complete: () => {
    //     // Ici je stop mon loading message
    //     this.isLoading.set(false);
    //   },
    // });
  }
  today = signal(new Date());
  // onForwardCv(cv: Cv) {
  //   this.selectedCv.set(cv);
  // }
}
