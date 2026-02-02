import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  imports: [
    FormsModule
  ],
  templateUrl: './contactus.html',
  styleUrl: './contactus.css',
})
export class Contactus {
  isFormSubmitted: boolean = false;

  name = '';
  age = null;

  submitForm() {
    this.isFormSubmitted = true;
  }
}
