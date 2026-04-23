import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { map, Observable, of } from "rxjs";
import { CvService } from "../cv/services/cv.service";

export const uniqueCinValidator = (cvService: CvService): AsyncValidatorFn => {

  return (control: AbstractControl): Observable<null | ValidationErrors> => {
    const cin = control.value;
    if (cin) {
      return cvService.getCvsByProperty('cin',cin).pipe(
        // [cvs]
        map(cvs => cvs.length ? {uniqueCin: 'Le cin est déjà attribué'} : null)
        // si tableau vide => null sinon {uniqueCin}
      )
    }
    return of(null);
  }
}
