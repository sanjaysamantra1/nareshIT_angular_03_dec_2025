import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { CartService } from '../../services/cart-service';

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
  constructor(private productService: ProductService, private cartService: CartService) {
  }
  ngOnInit() {
    this.productService.getAllProducts().subscribe(response => {
      this.productArr.set(response);
      this.isLoading.set(false);
    })
  }

  addToCart(product: any) {
    this.cartService.addItem(product)
  }

}
