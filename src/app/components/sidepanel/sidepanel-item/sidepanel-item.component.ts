import { Component, Input } from '@angular/core';
import {
  ShoppingCartItem,
  WishlistService,
} from 'src/app/services/wishlistService/wishlist.service';

@Component({
  selector: 'app-sidepanel-item',
  templateUrl: './sidepanel-item.component.html',
  styleUrls: ['./sidepanel-item.component.scss'],
})
export class SidepanelItemComponent {
  @Input() item: ShoppingCartItem;
  public showBox = false;
  public isPlusClicked = false;
  public isMinusClicked = false;
  public isUpdateClicked = false;

  constructor(private wishlistService: WishlistService) {}

  public showPlusMinus() {
    this.showBox = !this.showBox;
  }

  public add() {
    this.isPlusClicked = true;
    setTimeout(() => {
      this.isPlusClicked = false;
    }, 100);
    if (this.item.quantity) {
      this.item.quantity += 1;
      return;
    }
    this.item.quantity = 1;
  }

  public detract() {
    this.isMinusClicked = true;
    setTimeout(() => {
      this.isMinusClicked = false;
    }, 100);
    if (this.item.quantity) {
      if (this.item.quantity < 2) {
        return;
      }
      this.item.quantity -= 1;
      return;
    }
    this.item.quantity = 1;
  }

  public removeFromCart(item: ShoppingCartItem) {
    this.wishlistService.removeFromWishlist(item);
  }

  public updateQuantity() {
    this.isUpdateClicked = true;
    setTimeout(() => {
      this.isUpdateClicked = false;
    }, 100);
    this.showBox = !this.showBox;
    this.wishlistService.changeQuantity(this.item);
  }
}
