import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface House {
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
  private listOfItems: BehaviorSubject<House[]> = new BehaviorSubject<House[]>(
    []
  );
  public listOfItems$: Observable<House[]> = this.listOfItems.asObservable();

  constructor() {
    this.getListFromLocalStorage();
  }

  public addToWishlist(item: House): void {
    const currentList = this.listOfItems.getValue();
    const wishListItem = currentList.find(
      (listItem) => listItem.id === item.id
    );
    if (wishListItem) {
      return;
    }

    currentList.push(item);
    this.setListInLocalStorage(currentList);
    this.listOfItems.next(currentList);
  }

  public existInList(item: House): boolean {
    const currentList = this.listOfItems.getValue();
    return currentList.some((listItem) => listItem.id === item.id);
  }

  public removeFromWishlist(item: House) {
    const currentList = this.listOfItems.getValue();
    const updatedList = currentList.filter(
      (listItem) => listItem.id !== item.id
    );
    this.setListInLocalStorage(updatedList);
    this.listOfItems.next(updatedList);
  }

  public changeQuantity(item: House, quantity: number) {
    const currentList = this.listOfItems.getValue();
    const updatedList = currentList.map((listItem) => {
      if (listItem.id === item.id) {
        listItem.quantity = quantity;
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

  private setListInLocalStorage(list: House[]) {
    const listJson = JSON.stringify(list);
    localStorage.setItem('cartItems', listJson);
  }

  private getListFromLocalStorage() {
    const listJson = localStorage.getItem('cartItems');
    const list = listJson ? JSON.parse(listJson) : [];
    this.listOfItems.next(list);
  }
}
