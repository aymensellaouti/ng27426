import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-test-form',
  imports: [FormsModule],
  templateUrl: './test-form.html',
  styleUrl: './test-form.css',
})
export class TestForm {
  processForm(form: NgForm) {
    console.log(form);
  }
}
