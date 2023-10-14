import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface ShoppingCartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity?: number;
}

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  private listOfItems: BehaviorSubject<ShoppingCartItem[]> =
    new BehaviorSubject<ShoppingCartItem[]>([]);
  public listOfItems$: Observable<ShoppingCartItem[]> =
    this.listOfItems.asObservable();

  constructor() {
    this.getListFromLocalStorage();
  }

  public addToWishlist(item: ShoppingCartItem): void {
    const currentList = this.listOfItems.getValue();
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

    currentList.push(item);
    this.setListInLocalStorage(currentList);
    this.listOfItems.next(currentList);
  }

  public existInList(item: ShoppingCartItem): boolean {
    const currentList = this.listOfItems.getValue();
    return currentList.some((listItem) => listItem.id === item.id);
  }

  public removeFromWishlist(item: ShoppingCartItem) {
    const currentList = this.listOfItems.getValue();
    const updatedList = currentList.filter(
      (listItem) => listItem.id !== item.id
    );
    this.setListInLocalStorage(updatedList);
    this.listOfItems.next(updatedList);
  }

  public changeQuantity(item: ShoppingCartItem) {
    const currentList = this.listOfItems.getValue();
    const updatedList = currentList.map((listItem) => {
      if (listItem.id === item.id) {
        listItem.quantity = item.quantity;
      }
      return listItem;
    });
    this.setListInLocalStorage(updatedList);
    this.listOfItems.next(updatedList);
  }

  public clearList() {
    this.setListInLocalStorage([]);
    this.listOfItems.next([]);
  }

  private setListInLocalStorage(list: ShoppingCartItem[]) {
    const listJson = JSON.stringify(list);
    localStorage.setItem('cartItems', listJson);
  }

  private getListFromLocalStorage() {
    const listJson = localStorage.getItem('cartItems');
    const list = listJson ? JSON.parse(listJson) : [];
    this.listOfItems.next(list);
  }
}
