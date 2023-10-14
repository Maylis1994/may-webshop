import { Component, Input } from '@angular/core';
import {
  House,
  WishlistService,
} from 'src/app/services/wishlistService/wishlist.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input() houseItem: House;

  constructor(private wishlistService: WishlistService) {}

  public addToList() {
    if (this.wishlistService.existInList(this.houseItem)) {
      this.wishlistService.removeFromWishlist(this.houseItem);
      return;
    }
    this.wishlistService.addToWishlist(this.houseItem);
  }
}
