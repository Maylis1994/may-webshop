import { Injectable } from '@angular/core';

export class ListOverview {
  totalPrice: number;
  items: House[];
}

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
  private listOverview: ListOverview;
  private listOfItems: House[] = this.getListFromLocalStorage();

  constructor() {}

  public addToWishlist(item: House) {
    let wishListItem = this.listOfItems.find(
      (listItem) => listItem.id === item.id
    );
    if (wishListItem) {
      return;
    }
    this.listOfItems.push(item);
    this.setListInLocalStorage();
    console.log('listofitemsAdd', this.listOfItems);
  }

  public removeFromWishlist(item: House) {
    this.listOfItems = this.listOfItems.filter(
      (listItem) => listItem.id != item.id
    );
    this.setListInLocalStorage();
    // console.log('listofitemsRemove', this.listOfItems);
  }

  public changeQuantity(item: House, quantity: number) {
    let listItem = this.listOfItems.find((listItem) => listItem.id === item.id);
    if (!listItem) {
      return;
    }
    listItem.quantity = quantity;
    this.setListInLocalStorage();
  }

  public clearList() {
    this.listOfItems = [];
    this.setListInLocalStorage();
  }

  public setListInLocalStorage() {
    const listJson = JSON.stringify(this.listOfItems);
    localStorage.setItem('listOfItems', listJson);
  }

  public getListFromLocalStorage() {
    const listJson = localStorage.getItem('listOfItems');
    return listJson ? JSON.parse(listJson) : [];
  }
}
