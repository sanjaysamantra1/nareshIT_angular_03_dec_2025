import { Component } from '@angular/core';
import * as data from './products.json';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faRupee } from '@fortawesome/free-solid-svg-icons';
import { NgxPaginationModule } from 'ngx-pagination';
import Swal from 'sweetalert2';
import Snackbar from 'awesome-snackbar';
import { Zoomin } from '../../custom-directives/zoomin';

@Component({
  selector: 'app-product-list',
  imports: [
    FontAwesomeModule,
    NgxPaginationModule,
    Zoomin
  ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  productArr = (data as any).default;
  faStar = faStar;
  faRupee = faRupee;
  p: number = 1;

  openSweetAlert() {
    Swal.fire('The Internet?', 'That thing is still around?', 'success')
  }
  openSnackbar() {
    new Snackbar('Helloooo, Good Morning',
      { position: 'top-center', theme: 'dark', timeout: 5000, actionText: 'X' }
    );
  }
}
