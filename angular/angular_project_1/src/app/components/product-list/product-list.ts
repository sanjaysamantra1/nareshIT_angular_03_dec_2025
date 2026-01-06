import { Component } from '@angular/core';
import * as data from './products.json';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faRupee } from '@fortawesome/free-solid-svg-icons';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-product-list',
  imports: [
    FontAwesomeModule,
    NgxPaginationModule
  ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  productArr = (data as any).default;
  faStar = faStar;
  faRupee = faRupee;
  p: number = 1;
}
