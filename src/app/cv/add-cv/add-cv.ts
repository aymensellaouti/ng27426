import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { filter } from 'rxjs';

@Component({
  selector: 'app-add-cv',
  imports: [ReactiveFormsModule],
  templateUrl: './add-cv.html',
  styleUrl: './add-cv.css',
})
export class AddCv {
  formBuilder = inject(FormBuilder);
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
          asyncValidators: [],
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
  addCv() {}

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
