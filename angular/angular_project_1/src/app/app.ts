import { Component, signal } from '@angular/core';
import { MyNavbar } from './components/navbar/navbar';
import { Categories } from './components/categories/categories';
import { Carousel } from './components/carousel/carousel';
import { Body } from './components/body/body';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    MyNavbar,
    Categories,
    Carousel,
    Body,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_project_1');
}
