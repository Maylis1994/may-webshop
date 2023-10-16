import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface ShoppingCartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity?: number;
}

export interface ShoppingCart {
  totalQuantity?: number;
  totalAmount?: number;
  listOfItems: ShoppingCartItem[];
}

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  private shoppingCart: BehaviorSubject<ShoppingCart> =
    new BehaviorSubject<ShoppingCart>({
      totalQuantity: 0,
      totalAmount: 0,
      listOfItems: [],
    });
  public shoppingCart$: Observable<ShoppingCart> =
    this.shoppingCart.asObservable();

  constructor() {
    this.getCartFromLocalStorage();
  }

  public addToWishlist(item: ShoppingCartItem): void {
    const currentList = this.shoppingCart.getValue().listOfItems;
    const wishListItem = currentList.find(
      (listItem) => listItem.id === item.id
    );
    if (wishListItem) {
      if (wishListItem.quantity) {
        wishListItem.quantity += 1;
        this.changeQuantity(wishListItem);
      }
      return;
    }
    item.quantity = 1;
    currentList.push(item);
    this.shoppingCart.next({
      ...this.shoppingCart.getValue(),
      totalQuantity: this.updateTotalQuantity(),
      totalAmount: this.updateTotalPrice(),
      listOfItems: currentList,
    });
    this.setCartInLocalStorage();
  }

  public existInList(item: ShoppingCartItem): boolean {
    const currentList = this.shoppingCart.getValue().listOfItems;
    return currentList.some((listItem) => listItem.id === item.id);
  }

  public removeFromWishlist(item: ShoppingCartItem) {
    const currentList = this.shoppingCart.getValue().listOfItems;
    const updatedList = currentList.filter(
      (listItem) => listItem.id !== item.id
    );
    this.shoppingCart.next({
      listOfItems: updatedList,
    });
    this.shoppingCart.next({
      ...this.shoppingCart.getValue(),
      totalQuantity: this.updateTotalQuantity(),
      totalAmount: this.updateTotalPrice(),
    });
    this.setCartInLocalStorage();
  }

  public updateTotalPrice(): number {
    const currentList = this.shoppingCart.getValue().listOfItems;
    let totalPrice = 0;

    for (const item of currentList) {
      totalPrice += this.calculateItemCost(item);
    }

    return totalPrice;
  }

  private calculateItemCost(item: ShoppingCartItem): number {
    return item.price * (item.quantity || 1);
  }

  public changeQuantity(item: ShoppingCartItem) {
    const currentList = this.shoppingCart.getValue().listOfItems;
    const updatedList = currentList.map((listItem) => {
      if (listItem.id === item.id) {
        listItem.quantity = item.quantity;
      }
      return listItem;
    });
    this.shoppingCart.next({
      ...this.shoppingCart.getValue(),
      totalQuantity: this.updateTotalQuantity(),
      totalAmount: this.updateTotalPrice(),
      listOfItems: updatedList,
    });
    this.setCartInLocalStorage();
  }

  public updateTotalQuantity() {
    const currentList = this.shoppingCart.getValue().listOfItems;
    let totalQuantity = 0;

    for (const item of currentList) {
      if (item.quantity) {
        totalQuantity += item.quantity;
      }
    }

    return totalQuantity;
  }

  private setCartInLocalStorage() {
    const shoppingCart = this.shoppingCart.getValue();
    const cartJson = JSON.stringify(shoppingCart);
    localStorage.setItem('cart', cartJson);
  }

  private getCartFromLocalStorage() {
    const cartJson = localStorage.getItem('cart');
    const cart = cartJson
      ? JSON.parse(cartJson)
      : {
          totalQuantity: 0,
          totalAmount: 0,
          listOfItems: [],
        };

    this.shoppingCart.next(cart);
  }
}
