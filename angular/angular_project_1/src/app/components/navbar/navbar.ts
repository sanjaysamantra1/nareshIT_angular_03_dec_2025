import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from './../../services/cart-service';
import { Component, inject } from '@angular/core';
import { UserInformationService } from '../../services/user-information-service';

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
  userInformationService = inject(UserInformationService);
  userRole: string = '';
  cartItems = [];

  ngOnInit() {
    this.cartService.cartItem$.subscribe(cartItems => {
      this.cartItems = cartItems;
    })

    this.userRole = this.userInformationService.userRole;
  }
}
