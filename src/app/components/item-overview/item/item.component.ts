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

  public quantity: number = 1;

  constructor(private wishlistService: WishlistService) {}

  public addToList() {
    this.wishlistService.addToWishlist(this.houseItem);
  }
}
