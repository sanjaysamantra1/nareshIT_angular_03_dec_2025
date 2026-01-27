import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemSubject = new BehaviorSubject([]); // writeable
  cartItem$ = this.cartItemSubject.asObservable();   // readonly

  private totalPriceSubject = new BehaviorSubject(0);    // writeable
  totalPrice$ = this.totalPriceSubject.asObservable();   // readonly

  addItem(newItem: any) {
    const cartItems: any = this.cartItemSubject.value;
    cartItems.push(newItem);
    this.cartItemSubject.next(cartItems);
    this.calculateTotalPrice();
  }
  removeItem(itemToRemove: any) {
    const cartItems: any = this.cartItemSubject.value;
    const cartItemsAfterRemove = cartItems.filter((cartItem: any) => {
      return cartItem.id !== itemToRemove.id;
    });
    this.cartItemSubject.next(cartItemsAfterRemove);
    this.calculateTotalPrice();
  }
  calculateTotalPrice() {
    const cartItems: any = this.cartItemSubject.value;
    let totalPrice = 0;
    cartItems.forEach((cartItem: any) => {
      totalPrice = totalPrice + cartItem.price;
    });
    this.totalPriceSubject.next(totalPrice);
  }
}
