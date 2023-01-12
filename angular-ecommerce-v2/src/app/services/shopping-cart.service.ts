import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  shoppingCart: Product[] = [];

  private cart = new BehaviorSubject<Product[]>([]);
  cart$ = this.cart.asObservable();

  constructor(

  ) { }

  addToShoppingCart(product: Product) {
    this.shoppingCart.push(product);
    this.cart.next(this.shoppingCart);
  }
}
