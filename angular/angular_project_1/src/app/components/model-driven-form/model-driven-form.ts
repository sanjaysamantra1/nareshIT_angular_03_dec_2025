import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven-form',
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './model-driven-form.html',
  styleUrl: './model-driven-form.css',
})
export class ModelDrivenForm {
  registerForm: FormGroup;

  constructor() {
    this.registerForm = new FormGroup({
      firstName: new FormControl('Virat', [Validators.required, Validators.minLength(5)]),
      lastName: new FormControl('Kohli'),
      email: new FormControl('virat@gmail.com', [Validators.required, Validators.email]),
      address: new FormGroup({
        city: new FormControl(),
        state: new FormControl(),
        pincode: new FormControl(),
      })
    }, { updateOn: 'blur' })
  }

  submitMyForm() {
    console.log(this.registerForm);
    console.log(this.registerForm.value);
  }

  setFormValue() {
    this.registerForm.setValue(
      {
        "firstName": "Sanjay",
        "lastName": "",
        "email": "",
        "address": {
          "city": null,
          "state": null,
          "pincode": null
        }
      }
    )
  }
  patchFormValue() {
    this.registerForm.patchValue({ firstName: 'Sanjay' })
  }

  resetMyForm(){
    // this.registerForm.reset();
    this.registerForm.reset({ firstName: 'Sanjay' });
  }
}
