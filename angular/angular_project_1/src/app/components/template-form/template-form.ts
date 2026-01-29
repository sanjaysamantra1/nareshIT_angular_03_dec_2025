import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './template-form.html',
  styleUrl: './template-form.css',
})
export class TemplateForm {
  user = {
    firstName: 'Virat',
    lastName: 'Kohli',
    email: '',
    address: { city: 'Bangalore', state: '', pincode: '' }
  }

  submitUserForm(userForm: any) {
    console.log(userForm);
    console.log(userForm.value);
  }
}
