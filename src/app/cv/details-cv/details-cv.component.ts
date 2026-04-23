import { Component, computed, inject, Injector, input, OnInit, Signal, signal } from "@angular/core";
import { Cv } from "../model/cv";
import { ActivatedRoute, Router } from "@angular/router";
import { CvService } from "../services/cv.service";
import { APP_ROUTES } from "../../config/app-routes.config";
import { DefaultImagePipe } from "../pipes/default-image-pipe";
import { HttpErrorResponse } from "@angular/common/http";
import { AuthService } from "../../auth/services/auth";
import { toSignal } from "@angular/core/rxjs-interop";
import { catchError, EMPTY } from "rxjs";

@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css'],
  imports: [DefaultImagePipe],
})
export class DetailsCvComponent implements OnInit{
  cvService = inject(CvService);
  injector = inject(Injector);
  acr = inject(ActivatedRoute);
  router = inject(Router);
  authService = inject(AuthService);
  // id = input(0);
  cv = toSignal(
      this.cvService.getCvByIdFromApi(this.acr.snapshot.params['id']).pipe(
        catchError(e => {
          this.router.navigate([APP_ROUTES.cv]);
          return EMPTY;
        })
      ), {
      initialValue: null
    });
  // cv = computed(() => {
  //   //console.log(this.id());
  //   return this.cvService.findCvById(this.id())
  // });
  ngOnInit() {
    //this.cv
    // var , const, let
    // Never use var , always use const untill it changes
    //const id = this.acr.snapshot.params['id'];
    // this.cv.set(this.cvService.findCvById(id));
    // this.cvService.getCvByIdFromApi(this.id()).subscribe({
    //   next: (cv) => this.cv.set(cv),
    //   error: (e: HttpErrorResponse) => {
    //     this.router.navigate([APP_ROUTES.cv]);
    //   },
    //});
    //if (!this.cv()) this.router.navigate([APP_ROUTES.cv]);
  }

  delete() {
    const cv = this.cv();
    if (cv) {
      this.cvService.deleteCvByIdFromApi(cv.id).subscribe({
        next: (cv) => this.router.navigate([APP_ROUTES.cv]),
        error: (e: HttpErrorResponse) => {
          console.log(e);
        },
      });
    }
  }
}
