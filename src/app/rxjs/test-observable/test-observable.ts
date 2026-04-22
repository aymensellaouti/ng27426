import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { filter, map, Observable, tap } from 'rxjs';
import { Cv } from '../../cv/model/cv';

@Component({
  selector: 'app-test-observable',
  imports: [AsyncPipe],
  templateUrl: './test-observable.html',
  styleUrl: './test-observable.css',
})
export class TestObservable {
  myObservable$: Observable<number>;
  toastr = inject(ToastrService);
  //compteArebours = 5;
  constructor() {
    this.myObservable$ = new Observable((observer) => {
      let i = 5;
      const intervalIndex = setInterval(() => {
        if (!i) {
          observer.complete();
          clearInterval(intervalIndex);
        } else {
          observer.next(i--);
        }
      }, 1000);
    });
    // const myObservable$2 = this.myObservable$.pipe(
    //   map(cvs => cvs.filter(cv  => cv.age <30  ))
    // );
    // 1 2 3 4 5
    // 5 4 3 2 1
    this.myObservable$.subscribe({
      next: (val) => {
        console.log(val);
      },
    });
    // this.myObservable$.subscribe({
    //   next: x => this.compteArebours = x
    // })
    // 2 1
    // setTimeout(() => {
    this.myObservable$.pipe(
      // 5 4 3 2 1
      tap(x => console.log('Avant Map', x)),
      map((x) => x * 3),
      tap(x => console.log('Apres Map', x)),
      // 15 12 9 6 3
      filter(x => x % 2 ==0),
      tap(x => console.log('Apres filter', x)),
      // 12 6
    ).subscribe({
      next: (data) => {
        this.toastr.info('' + data);
      },
      complete: () => {
        this.toastr.error('Fin !!!!');
      },
    });
    // }, 3000)
  }
}
