import { Component, inject, OnDestroy } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { filter } from 'rxjs';
import { APP_CONST } from '../../config/app-const.config';
import { CvService } from '../services/cv.service';
import { Cv } from '../model/cv';
import { Router } from '@angular/router';
import { APP_ROUTES } from '../../config/app-routes.config';
import { uniqueCinValidator } from '../../validators/unique-cin.async-validator';

@Component({
  selector: 'app-add-cv',
  imports: [ReactiveFormsModule],
  templateUrl: './add-cv.html',
  styleUrl: './add-cv.css',
})
export class AddCv implements OnDestroy {
  formBuilder = inject(FormBuilder);
  cvService = inject(CvService);
  router = inject(Router);

  form = this.formBuilder.group(
    {
      // Syntaxe 1
      name: [
        '',
        {
          validators: [Validators.required],
          updateOn: 'change',
        },
      ],
      firstname: ['', Validators.required],
      path: [''],
      job: ['', Validators.required],
      // Syntaxe 2
      cin: [
        '',
        {
          validators: [Validators.required, Validators.pattern('[0-9]{8}')],
          asyncValidators: [uniqueCinValidator(this.cvService)],
          updateOn: 'change',
        },
      ],
      age: [
        0,
        {
          validators: [Validators.required],
          updateOn: 'change',
        },
      ],
    },
    {
      validators: [],
      asyncValidators: [],
      updateOn: 'change',
    },
  );
  constructor() {
    const form = localStorage.getItem(APP_CONST.savedAddForm);
    if (form) {
      this.form.patchValue(JSON.parse(form));
    }
    this.name.valueChanges.pipe(filter((value) => value.length > 3)).subscribe({
      next: (valeur) => console.log(valeur),
    });
    if (this.age.value < 18) {
      this.path?.disable();
      this.path?.setValue('');
    }
    this.age.valueChanges.subscribe({
      next: (age) => {
        if (age < 18) {
          this.path?.disable();
          this.path?.setValue('');
        } else {
          this.path?.enable();
        }
      },
    });
  }
  ngOnDestroy(): void {
    if (this.form.valid) {
      localStorage.setItem(APP_CONST.savedAddForm, JSON.stringify(this.form.value));
    }
  }
  addCv() {
    this.cvService.addCv(this.form.value as Cv).subscribe({
      next: (cv) => {
        localStorage.removeItem(APP_CONST.savedAddForm);
        this.form.reset();
        this.router.navigate([APP_ROUTES.cv]);
      },
    });
  }

  get name(): AbstractControl {
    return this.form.get('name')!;
  }
  get firstname() {
    return this.form.get('firstname');
  }
  get age(): AbstractControl {
    return this.form.get('age')!;
  }
  get job() {
    return this.form.get('job');
  }
  get path() {
    return this.form.get('path');
  }
  get cin(): AbstractControl {
    return this.form.get('cin')!;
  }
}
