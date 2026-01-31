import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from './../../services/cart-service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class MyNavbar {
  cartService = inject(CartService);
  cartItems = [];

  ngOnInit() {
    this.cartService.cartItem$.subscribe(cartItems => {
      this.cartItems = cartItems;
    })
  }
}
