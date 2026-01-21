import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  imports: [
    CommonModule
  ],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  /* productData$: Observable<any> | undefined;
  constructor(private productService: ProductService) {
  }
  ngOnInit() {
    this.productData$ = this.productService.getAllProducts();
  } */

  productArr = signal<any>([]);
  isLoading = signal<boolean>(true);
  constructor(private productService: ProductService) {
  }
  ngOnInit() {
    this.productService.getAllProducts().subscribe(response => {
      this.productArr.set(response);
      this.isLoading.set(false);
    })
  }

}
