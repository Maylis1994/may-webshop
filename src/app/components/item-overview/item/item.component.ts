import { Component, Input } from '@angular/core';
import {
  ShoppingCartItem,
  WishlistService,
} from 'src/app/services/wishlistService/wishlist.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input() item: ShoppingCartItem;

  public quantity: number = 1;
  public isItemClicked = false;

  constructor(private wishlistService: WishlistService) {}

  public addToList() {
    this.isItemClicked = true;
    setTimeout(() => {
      this.isItemClicked = false;
    }, 100);
    this.wishlistService.addToWishlist(this.item);
  }
}
